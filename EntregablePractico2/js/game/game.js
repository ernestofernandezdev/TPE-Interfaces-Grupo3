class Game {
    static #instance;
    #chips = [];    /*fichas disponibles para lanzar */
    #selectedchip=null; /*ficha seleccionada/arrastrada */
    #board; /*tablero */
    #ctx;
    #playerTurn;
    #chipsDrop=[
        {
            x:0,
            y:0
        },
        {
            x:0,
            y:0
        }

    ]
    #posDispenser=null;


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

    /*redibuja los componentes del juego (fichas,tablero,casilleros). Se redibuja cada vez que hay cambios(movimientos de fichas, casillero completo,...) */
    redraw(context){
    
        this.#board.drawBoard(context);
        this.#board.drawAllBoxes(context)
        this.drawChipDispenser();
        this.drawAllAvailableChips(context)
      
       
    }

  
    /*habria que precargar una imagen para que el fondo del juego sea una imagen, como en la clase ficha */
    getComponent() {
        const canvas = document.createElement("canvas");
        canvas.id = 'gameCanvas';
        canvas.style.backgroundImage= 'linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(./static/assets/game/batman4.png)';
        canvas.style.backgroundRepeat = 'no-repeat';
        canvas.style.backgroundPosition = 'center top';
        canvas.style.backgroundSize = '100%';

        return canvas;
    }

    /*metodo para dibujar los componentes del juego en la primera ejecucion.*/
    /*dibuja tablero,casilleros, fichas ..... */
    createComponents() {
        const canvas = document.getElementById("gameCanvas");
        this.#ctx = canvas.getContext("2d");

        this.#board.drawBoard(this.#ctx);
        this.#board.drawAllBoxes(this.#ctx)
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
        const canvas = document.getElementById("gameCanvas");
        const qchips = (Config.typeGame.quantityColumnsInBoard * Config.typeGame.quantityRowsInBoard) / Config.typeGame.quantityPlayers;
        const paddingXRespectCanvas=Config.chipSize.radius+canvas.offsetWidth/20+10;
        const paddingYRespectCanvas=Config.chipSize.radius+200;
        const typeChip1=Config.typeGame.typeOfChipsPlayer1;
        const typeChip2=Config.typeGame.typeOfChipsPlayer2;
        const paddingFirstX=60;
        const paddingFirstY=120;
        const accRender=6;
        let acc =0;
        this.#chips=[];
       

        for (let index = 0; index < qchips; index++) {
            if(index === qchips-1){
                this.#chips.push(new Ficha(  canvas.offsetLeft+paddingXRespectCanvas+paddingFirstX  , (canvas.offsetTop + canvas.offsetHeight)-paddingYRespectCanvas-paddingFirstY,true,typeChip1));
                this.#chipsDrop[0].x=canvas.offsetLeft+paddingXRespectCanvas+paddingFirstX,
                this.#chipsDrop[0].y=(canvas.offsetTop + canvas.offsetHeight)-paddingYRespectCanvas-paddingFirstY;
            }else{
                this.#chips.push(new Ficha(  canvas.offsetLeft+paddingXRespectCanvas+acc  , (canvas.offsetTop + canvas.offsetHeight)-paddingYRespectCanvas,true,typeChip1));
            }
            acc=acc+accRender;
        }

        acc=0;
       

        for (let index = 0; index < qchips; index++) {
            if(index === qchips-1){
                this.#chips.push(new Ficha(  (canvas.offsetLeft + canvas.offsetWidth)-paddingXRespectCanvas-paddingFirstX , (canvas.offsetTop + canvas.offsetHeight)-paddingYRespectCanvas-paddingFirstY,false,typeChip2));
                this.#chipsDrop[1].x=(canvas.offsetLeft + canvas.offsetWidth)-paddingXRespectCanvas-paddingFirstX,
                this.#chipsDrop[1].y=(canvas.offsetTop + canvas.offsetHeight)-paddingYRespectCanvas-paddingFirstY;
            }else{
                this.#chips.push(new Ficha(  (canvas.offsetLeft + canvas.offsetWidth)-acc-paddingXRespectCanvas ,  (canvas.offsetTop + canvas.offsetHeight)-paddingYRespectCanvas,false,typeChip2));
            }
            acc=acc+accRender;
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


    removeChip(chip) {
        let pos = this.#chips.indexOf(chip);
        this.#chips.splice(pos,1);
    }

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

    /*dibuja todas las fichas disponibles para lanzar*/
    drawAllAvailableChips(context) {
        this.#chips.forEach(f => {
            f.drawCircle(context);
        });
    }


    drawPlaceholderChip(chip) {
        chip.drawCircle(this.#ctx);
    }

    drawChipDispenser(){
        const canvas = document.getElementById("gameCanvas");
        const chipsPlayer1= this.#chips.filter(c => c.getPlayer()===Config.players.type1);
        const chipsPlayer2=this.#chips.filter(c => c.getPlayer()===Config.players.type2);
        const paddingX= canvas.offsetWidth/20;
        const paddingY= 170;
        const width=200;
        const height=380;
        const radius=30;
        if(this.#posDispenser === null){
            this.#posDispenser=[
                {
                    x:canvas.offsetLeft+paddingX,
                    y:chipsPlayer1[0].getInitY()-paddingY
                },
                {
                    x:canvas.offsetLeft + canvas.offsetWidth-(width+paddingX),
                    y:chipsPlayer2[0].getInitY()-paddingY
                }
            ]
        }
  
        this.#ctx.fillStyle='black';
        this.#drawRectangleRounded(this.#ctx,this.#posDispenser[0].x,this.#posDispenser[0].y,width,height,radius);
        this.#drawRectangleRounded(this.#ctx,this.#posDispenser[1].x,this.#posDispenser[1].y,width,height,radius);
       
    }

    // #startAnimationDispenser(p1Status,p2Status){
    //     if(this.#animationDispenser == null){
    //         this.#animationDispenser = setInterval(() => {
    //             if(p1Status){
    //                 this.drawChipDispenser(this.#alternateAnimation,p2Status); 
    //                 console.log(this.#alternateAnimation);
                    
    //             }else{
    //                 this.drawChipDispenser(p1Status,this.#alternateAnimation); 
    //             }
    //             this.#alternateAnimation=!this.#alternateAnimation;
    //             this.drawAllAvailableChips(this.#ctx);
    //         }, 1000);
    //     }
    // }

    #drawRectangleRounded(ctx, x, y, width, height, radius){
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
    }

    

    /*///////////////////////////////////////////////////////////////////////metodos de eventos///////////////////////////////////////////////////////////////*/

    /*funcion que contiene todos los eventos */
    #handleAllEvents() {
        this.#handlechipsMouseDown();
        this.#handleMouseUp();
        this.#handleMouseOut();
        this.#handleMouseMove();
    }

    /*cuando baja el click, detecta si se hizo en una ficha (en el radio ), la marca como agarrada/clickeada (isClicked) y le pasa el evento a la clikeada*/
    #handlechipsMouseDown() {
        const canvas = document.getElementById("gameCanvas");

        canvas.addEventListener("mousedown", (e) => {
            e.preventDefault();
            const rect = canvas.getBoundingClientRect();
            const mouseX = e.clientX - rect.left;
            const mouseY = e.clientY - rect.top;
            this.#selectedchip=null;
            const firstChipDrop= this.#getFirstChipForPlayerTurn(this.#playerTurn);

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

    #getFirstChipForPlayerTurn(playerTurn){
        const chipsPlayer= this.#chips.filter(c => c.getPlayer()===Config.listPlayerTypes[playerTurn-1]);
        let chip= chipsPlayer[chipsPlayer.length-1];
     
        return chip;
    }

    /*le pasa el evento a sus hijos */
    #handleMouseUp() {
        const canvas = document.getElementById("gameCanvas");
        canvas.addEventListener("mouseup", (e) => {
            this.#chips.forEach((chip) => {
                chip.handleMouseUp(e);
            });
            if(this.#selectedchip){
                this.#board.handleMouseUp(e,this.#selectedchip,canvas,this.#ctx);
            }
        });
    }

    /*le pasa el evento a sus hijos */
    #handleMouseMove() {
        const canvas = document.getElementById("gameCanvas");
        canvas.addEventListener("mousemove", (e) => {
            this.#chips.forEach((chip) => {
                chip.handleMouseMove(e, this.#ctx, canvas);
            });
        });
    }

    /*le pasa el evento a sus hijos */
    #handleMouseOut() {
        const canvas = document.getElementById("gameCanvas");
        canvas.addEventListener("mouseout", (e) => {
            this.#chips.forEach((chip) => {
                chip.handleMouseOut(e);
            });
        });
    }


    getChips(){
        return this.#chips;
    }

    
    ///*//////////////////////////////////////////////////////////metodos de reorden/eliminacion/////////////////////////////////////////////////////////////////////

    /*actualiza las fichas que estan disponibles para jugar . Parametro: ficha que se dropea en el tablero */
    updateChipsAvailable(chip){
        this.#chips = this.#chips.filter(c => c !== chip);
    }


}