class Game {
    static #instance;
    #chips = [];    /*fichas disponibles para lanzar */
    #selectedchip=null; /*ficha seleccionada/arrastrada */
    #board; /*tablero */
    #playerTurn;
    #chipsDrop=[
        {
            x:0,
            y:0
        },
        {
            x:0,
            y:0
        },
        {
            width:0,
            height:0
        }
        
    ]
    #posDispenser=null;
    
    #ctx;
    #canvas;
    #winsForPlayer={
        player1:0,
        player2:0
    }


    constructor() {
        if (Game.#instance) {
            return Game.#instance;
        }
        Game.#instance = this;
        this.#board = new Tablero();
        this.#playerTurn = 1;

     
    }

    static getInstance() {
        return Game.#instance;
    }

   /*Util para cuando se desea dibujar mas cosas por encima de lo que ya hay(ejemplo placeholder de ficha, se agrega a lo que hay)*/
    redraw(context){
        this.#board.drawBoard(context);
        this.#board.drawAllBoxes(context)
        this.drawChipDispenser();
        this.drawAllAvailableChips(context)
      
    }

    /*Util cuando se cambia el estado de cosas del juego(se agregan fichas, se modifica la cantidad de fichas, se mueve la ficha, etc.) */
    clearAndRedraw(ctx){
        ctx.clearRect(0, 0, this.#canvas.offsetWidth, this.#canvas.offsetHeight);
        ctx.save(); 
        ctx.restore();
        this.redraw(ctx);
    }

  
    /*habria que precargar una imagen para que el fondo del juego sea una imagen, como en la clase ficha */
    getComponent() {
        const canvas = document.createElement("canvas");
        canvas.id = 'gameCanvas';
        this.#canvas=canvas;
        canvas.style.backgroundImage= 'linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(./static/assets/game/game-background.png)';
        canvas.style.backgroundRepeat = 'no-repeat';
        canvas.style.backgroundPosition = 'center top';
        canvas.style.backgroundSize = '100%';

        return canvas;
    }

    /*metodo para dibujar los componentes del juego en la primera ejecucion.*/
    /*dibuja tablero,casilleros, fichas ..... */
    createComponents() {
        this.#ctx = this.#canvas.getContext("2d");
        this.#board.drawBoard(this.#ctx);
        this.#board.drawAllBoxes(this.#ctx);
        this.initDispenserProperties();
        this.createChips();
      
        this.drawChipDispenser();
        
        this.drawAllAvailableChips(this.#ctx); 
      
    }

    /*manda a cargar configuraciones del juego y escuchar eventos del mouse/usuario*/
    loadConfig() {
        Config.adjustCanvasResolution();
        this.#handleAllEvents();
    }

    /*crea los objetos de Ficha. Multiplica cantidad de filas por columnas del juego y los divide por la cantidad de jugadores (batman vs joker).*/
    /*tiene en cuenta los costados del canvas para crear/renderizar inicialmente las fichas. */
    createChips() {
        const typeChip1=Config.typeGame.typeOfChipsPlayer1;
        const typeChip2=Config.typeGame.typeOfChipsPlayer2;
        const qchips = Math.ceil((Config.typeGame.quantityColumnsInBoard * Config.typeGame.quantityRowsInBoard) / Config.typeGame.quantityPlayers);

        const paddingFirstX=this.#posDispenser[2].width/2;
        const paddingFirstY=this.#posDispenser[2].height*0.15;

        const paddingXListChips=(paddingFirstX/3) + 2;
        const paddingYListChips=(this.#posDispenser[2].height/2) - 15;

        const accRender=6;
        let acc =0;
        this.#chips=[];
       

        for (let index = 0; index < qchips; index++) {
            if(index === qchips-1){
                this.#chips.push(new Ficha(  this.#posDispenser[0].x+paddingFirstX  , this.#posDispenser[0].y+paddingFirstY,true,typeChip1));
                this.#chipsDrop[0].x=this.#posDispenser[0].x+paddingFirstX ,
                this.#chipsDrop[0].y=this.#posDispenser[0].y+paddingFirstY;
            }else{
                this.#chips.push(new Ficha(  this.#posDispenser[0].x+paddingXListChips+acc  , this.#posDispenser[0].y+paddingYListChips,true,typeChip1));
            }
            acc=acc+accRender;
        }

        acc=0;
       

        for (let index = 0; index < qchips; index++) {
            if(index === qchips-1){
                this.#chips.push(new Ficha(  this.#posDispenser[1].x+paddingFirstX , this.#posDispenser[1].y+paddingFirstY,false,typeChip2));
                this.#chipsDrop[1].x=this.#posDispenser[1].x+paddingFirstX ,
                this.#chipsDrop[1].y=this.#posDispenser[1].y+paddingFirstY;
            }else{
                this.#chips.push(new Ficha(   this.#posDispenser[1].x+this.#posDispenser[2].width-paddingXListChips-acc ,  this.#posDispenser[1].y+paddingYListChips,false,typeChip2));
            }
            acc=acc+accRender;
        }
    
    }

    initDispenserProperties(){
        const paddingXRespectBoard= 30;
        const paddingY= 30;
        const width=200;
        const height=380;

        this.#posDispenser=[
            {
                x:Tablero.getInstance().getStartX()-width-paddingXRespectBoard,
                y:this.#canvas.offsetHeight-height-paddingY
            },
            {
                x:Tablero.getInstance().getEndX()+paddingXRespectBoard,
                y:this.#canvas.offsetHeight-height-paddingY
            },
            {
                width:width,
                height:height
            }
        ]
    }

    /*dibuja todas las fichas disponibles para lanzar*/
    drawAllAvailableChips(context) {
        this.#chips.forEach(f => {
            f.drawCircle(context);
        });
    }

    drawChipDispenser(){
        const radius=30;
       
        this.#drawDispenser(this.#ctx,this.#posDispenser[0].x,this.#posDispenser[0].y,this.#posDispenser[2].width,this.#posDispenser[2].height,radius,this.getPLayerTurn()===1,this.getWinsPlayer1());
        this.#drawDispenser(this.#ctx,this.#posDispenser[1].x,this.#posDispenser[1].y,this.#posDispenser[2].width,this.#posDispenser[2].height,radius,this.getPLayerTurn()===2,this.getWinsPlayer2());
       
    }

 

    #drawDispenser(ctx, x, y, width, height, radius,state,quantityWins){
        this.#ctx.fillStyle=Config.dispenserColor.default;
        ctx.beginPath();
        ctx.moveTo(x + radius, y); // Esquina superior izquierda
        ctx.lineTo(x + width - radius, y); // Línea superior
        ctx.quadraticCurveTo(x + width, y, x + width, y + radius); // Esquina superior derecha
        ctx.lineTo(x + width, y + height - radius); // Línea derecha
        ctx.quadraticCurveTo(x + width, y + height, x + width - radius, y + height); // Esquina inferior derecha
        ctx.lineTo(x + radius, y + height); // Línea inferior
        ctx.quadraticCurveTo(x, y + height, x, y + height - radius); // Esquina inferior izquierda
        ctx.lineTo(x, y + radius); // Línea izquierda
        ctx.quadraticCurveTo(x, y, x + radius, y); // Esquina superior izquierda de nuevo
        ctx.closePath();
        ctx.fill(); // Rellenar el rectángulo

        if(state){
            ctx.strokeStyle=Config.dispenserColor.border;
            ctx.lineWidth = 5; 
            ctx.stroke();
           
        }

      
        ctx.textAlign = 'center'; // Alineación horizontal del texto
        ctx.textBaseline = 'middle'; // Alineación vertical del texto
        ctx.font = '25px Nunito'; // Tamaño y tipo de fuente
        ctx.fillStyle = 'white'; // Color del texto

        ctx.fillText('Victorias', x+(width/2), y+((height/2)+80));
        ctx.font = '15px Nunito'; // Tamaño y tipo de fuente
        ctx.fillText(quantityWins, x+(width/2), y+((height/2)+120));

    }

    ///*//////////////////////////////////////////////////////////metodos de reorden/eliminacion/////////////////////////////////////////////////////////////////////

    /*actualiza las fichas que estan disponibles para jugar . Parametro: ficha que se dropea en el tablero */
    updateChipsAvailable(chip){
        this.#chips = this.#chips.filter(c => c !== chip);
    }

    removeChip(chip) {
        let pos = this.#chips.indexOf(chip);
        this.#chips.splice(pos,1);
    }

    /*Actualiza la posicion de la ficha que puede ser dropeada por cada jugador */
    updatePositionChipsDrop(){
        if(this.#chips.length >= Config.typeGame.quantityPlayers){
            const chipsPlayer1=this.#chips.filter(c => c.getPlayer()===Config.players.type1);
            const chipsPlayer2=this.#chips.filter(c => c.getPlayer()===Config.players.type2);
            
            chipsPlayer1[chipsPlayer1.length-1].setInitPositionX(this.#chipsDrop[0].x);
            chipsPlayer1[chipsPlayer1.length-1].setInitPositionY(this.#chipsDrop[0].y);

            chipsPlayer2[chipsPlayer2.length-1].setInitPositionX(this.#chipsDrop[1].x);
            chipsPlayer2[chipsPlayer2.length-1].setInitPositionY(this.#chipsDrop[1].y);

        }
    }

    alternateTurn(){
        if(this.#playerTurn === 1){
            this.#playerTurn = 2
        }else{
            this.#playerTurn=1
        }
       
    }

    setTurnForWinner(box){
        let players= Config.listPlayerTypes;
    
        let win= players.findIndex(p => p===box.getChip().getPlayer());
        
        this.#playerTurn=win+1;
    }

    /*///////////////////////////////////////////////////////////////////////Eventos///////////////////////////////////////////////////////////////*/

    /*funcion que contiene todos los eventos */
    #handleAllEvents() {
        this.#handlechipsMouseDown();
        this.#handleMouseUp();
        this.#handleMouseOut();
        this.#handleMouseMove();
    }

    /*cuando baja el click, detecta si se hizo en una ficha (en el radio ), la marca como agarrada/clickeada (isClicked) y le pasa el evento a la clikeada*/
    #handlechipsMouseDown() {
        const canvas = this.#canvas;

        canvas.addEventListener("mousedown", (e) => {
            e.preventDefault();
            const rect = canvas.getBoundingClientRect();
            const mouseX = e.clientX - rect.left;
            const mouseY = e.clientY - rect.top;
            this.#selectedchip=null;
            const firstChipDrop= this.#getFirstChipForPlayerTurn(this.getPLayerTurn());

            const distanceFromCenter = Math.sqrt(             /*calcula la distancia entre el punto de clic del mouse (mouseX, mouseY) y el centro de una ficha (f.getX(), f.getY()).  */
                Math.pow(mouseX - firstChipDrop.getX(), 2) + Math.pow(mouseY - firstChipDrop.getY(), 2) /*mat.pow eleva al cuadrado las diferencias anteriores para quitar coordenadas negativas */
            );

            if (distanceFromCenter <= firstChipDrop.getRadius()) {     /*si esta en el radio de la ficha, la marca como "agarrada/seleccionada" */
                this.#selectedchip = firstChipDrop; 
            }

          
            //agarro el personaje de la ficha que selecciono y le dejo usar solo la ultima renderizada.
            if (this.#selectedchip) {
                console.log("la agarroooo");
                
                this.#selectedchip.handleMouseDown(e, canvas); 
            }

        });
    }

    /*le pasa el evento a sus hijos */
    #handleMouseUp() {
        const canvas = this.#canvas;
        canvas.addEventListener("mouseup", (e) => {
            this.#chips.forEach((chip) => {
                chip.handleMouseUp(e);
            });
            if(this.#selectedchip){
                this.#board.handleMouseUp(e,this.#selectedchip,this.#ctx);
            }
        });
    }

    /*le pasa el evento a sus hijos */
    #handleMouseMove() {
        const canvas = this.#canvas;
        canvas.addEventListener("mousemove", (e) => {
            this.#chips.forEach((chip) => {
                chip.handleMouseMove(e, this.#ctx, canvas);
            });
        });
    }

    /*le pasa el evento a sus hijos */
    #handleMouseOut() {
        const canvas = this.#canvas;
        canvas.addEventListener("mouseout", (e) => {
            this.#chips.forEach((chip) => {
                chip.handleMouseOut(e);
            });
        });
    }

    /*//////////////////////////////////////////////////////////////////getters y setters//////////////////////////////////////////////////////////////////////*/
    getChips(){
        return this.#chips;
    }

    getPLayerTurn(){
        return this.#playerTurn;
    }

    #getFirstChipForPlayerTurn(playerTurn){
        const chipsPlayer= this.#chips.filter(c => c.getPlayer()===Config.listPlayerTypes[playerTurn-1]);
        let chip= chipsPlayer[chipsPlayer.length-1];
     
        return chip;
    }
    
    addWinPlayer1(){
        this.#winsForPlayer.player1+=1;
    }

    addWinPlayer2(){
        this.#winsForPlayer.player2+=1;
    }

    getWinsPlayer1(){
        return this.#winsForPlayer.player1
    }

    getWinsPlayer2(){
        return this.#winsForPlayer.player2
    }

    addWinForPlayer(boxWin){
        const heroWin= boxWin.getChip().getPlayer();
        if(heroWin === Config.players.type1){
            this.addWinPlayer1();
        }else{
            this.addWinPlayer2();
        }
    }

    resetAllRoundsWin(){
        this.#winsForPlayer.player1=0;
        this.#winsForPlayer.player2=0;
    }

}