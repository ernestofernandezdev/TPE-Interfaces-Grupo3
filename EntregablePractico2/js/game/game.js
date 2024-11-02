class Game {
    static #instance;
    static images;
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
    #isEndGame=false;

    #timer={
        min:0,
        seg:0
    }

    #buttonsProperties={
        play:{
            ...Config.sizeButtons,
        },
        config:{
            ...Config.sizeButtons
        },
        arrows:[]
    }


    constructor() {
        if (Game.#instance) {
            return Game.#instance;
        }
        Game.#instance = this;
        this.#playerTurn = 1;
      
     
    }

    static getInstance() {
        return Game.#instance;
    }

   /*Util para cuando se desea dibujar mas cosas por encima de lo que ya hay(ejemplo placeholder de ficha, se agrega a lo que hay)*/
    redraw(context){
        this.drawTimer(context,this.convertTime(this.#timer.min,this.#timer.seg));
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

    /*metodo para inicializar y dibujar los componentes del juego.*/
    /*dibuja tablero,casilleros, fichas ..... */
    initGame() {

        this.loadConfig();
       
        
        this.animateTimer(this.#ctx);
        this.#board.drawAllBoxes(this.#ctx);
        this.drawChipDispenser();
        this.drawAllAvailableChips(this.#ctx); 
      
    }

    /*manda a cargar configuraciones del juego y escuchar eventos del mouse/usuario*/
    loadConfig() {
        this.#ctx = this.#canvas.getContext("2d");
        this.#board = new Tablero();
        this.setIsEndGame(false);
        this.initDispenserProperties();
        this.createChips();

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
        const colorText='white';

        this.#ctx.fillStyle=Config.dispenserColor.default;

        this.#drawRectangleRounded(ctx,x,y,width,height,radius);
        ctx.fill(); 

        if(state){
            ctx.strokeStyle=Config.dispenserColor.border;
            ctx.lineWidth = 5; 
            ctx.stroke();
           
        }

        this.drawText(ctx,'Victorias',colorText,x+(width/2), y+((height/2)+80),25,'Nunito');
        this.drawText(ctx,quantityWins,colorText,x+(width/2), y+((height/2)+120),20,'Nunito');
    }

    drawTimer(ctx,time){
        const width=120;
        const height=50;

        ctx.beginPath();
        ctx.fillStyle='#00197c';
        ctx.fillRect(this.#canvas.offsetWidth-width,0,width,height);
        if(this.#timer.min === 0 && this.#timer.seg <= 10){
            this.drawText(ctx,time,'#EE4848',this.#canvas.offsetWidth-width/2, height/2, 35,'Impact');
        }else{
            this.drawText(ctx,time,'white',this.#canvas.offsetWidth-width/2, height/2, 35,'Impact');
        }

    }

    endGame(){
        const win=this.getWinningPlayer();
        this.setIsEndGame(true);
        const options=['Reiniciar','Configuración'];
        const colorsText={
            p1:'#151FB1',
            p2:'#D83232',
            draw:'#EEE238'
        }

        if(!win){
            this.drawMenuContainer(Game.images.draw,`¡EMPATE!`,colorsText.draw,options);
        }else{
            const prop = win===Config.players.type1 ? {img: Game.images.batman, color: colorsText.p1} : {img:Game.images.joker,color:colorsText.p2};

            this.drawMenuContainer(prop.img,`¡GANADOR!`,prop.color,options);
        }

        
    }

    drawMenuContainer(img,title,textColor,options){
        const backColor='rgba(0, 0, 0, 0.7)';
        const width= this.#canvas.offsetWidth;
        const height=this.#canvas.offsetHeight;
        const startX=0;
        const startY=0;

        this.#ctx.fillStyle=backColor;
        this.#ctx.fillRect(startX,startY,width,height);
        this.drawMenu(width,height,img,title,textColor,options);

    }

    drawMenu(parentWidth,parentHeight,img,title,textColor,options){
        const width=parentWidth/2;
        const height=parentHeight/2;
        const startX=parentWidth/2-(width/2);
        const startY=parentHeight/2-(height/2);
        const buttonsColor= '#2B35C6';

        this.#buttonsProperties.play={
            ...this.#buttonsProperties.play,
            x:startX+(width/4),
            y:startY+height-(height/4),
            
        }

        this.#buttonsProperties.config={
            ...this.#buttonsProperties.config,
            x:((startX+width)-(width/4))-this.#buttonsProperties.config.width,
            y:startY+height-(height/4),
        }

        const config = this.#buttonsProperties.config;
        const play = this.#buttonsProperties.play;

        this.drawMenuImg(this.#ctx,startX,startY,width,height,30,img);
        this.drawWinnerText(this.#ctx,title,textColor,startX+(width/2),startY+50);

        this.drawButton(play.x,play.y,play.width,play.height,buttonsColor,options[0]);
        this.drawButton(config.x,config.y,config.width,config.height,buttonsColor,options[1]);

    }

   
    drawCustomMenu(parentWidth,parentHeight,color){
        const width=parentWidth/2;
        const height=parentHeight/2 + parentHeight/3;
        const startX=parentWidth/2-(width/2);
        const startY=parentHeight/2-(height/2);


    }


    drawMenuImg(ctx, x, y, width, height, radius,img){
        this.#drawRectangleRounded(ctx, x, y, width, height, radius);
        ctx.save(); 
        ctx.clip(); 

        if(img.complete){
            ctx.drawImage(img, x,y,width,height);
        }
        
        ctx.fillStyle='rgba(255, 255, 255, 0.2)';
        ctx.fillRect(x, y, width, height);
        ctx.restore();
    }

    animateTimer(ctx){
        const maxMinutes=Config.typeGame.timeInMin;
        this.#timer.min=maxMinutes;
        this.#timer.seg=59;

        this.drawTimer(ctx,this.convertTime(this.#timer.min,0));

        const animation = setInterval(() =>{
            if(this.#timer.seg === 59){
                this.#timer.min=this.#timer.min-1;
            }
            
            this.clearAndRedraw(ctx);
          
            if(this.#timer.min === 0 && this.#timer.seg===0){
                clearInterval(animation);
                this.endGame()
            }else{
                if(this.#timer.seg===0){
                    this.#timer.seg=59;
                }else{
                    this.#timer.seg=this.#timer.seg-1;
                }
            }
          
        }, 990);
    }

    drawWinnerText(ctx,text,color,x,y){
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle'; 
        ctx.font = `bold 45px Bubblegum Sans`; 

        this.#strokeText(2,'black',text,x,y)
    
        ctx.fillStyle = color;
        ctx.fillText(text, x, y);
    }

    drawText(ctx,text,color,x,y,size,family){
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle'; 
        ctx.font = `bold ${size}px ${family}`; 
        ctx.fillStyle = color; 
        ctx.fillText(text,x,y);
    }

    drawButton(x, y, width, height,color,text){
        const radiusButton=10;

        this.#ctx.fillStyle=color;
        this.#drawRectangleRounded(this.#ctx,x,y,width,height,radiusButton);
        this.#ctx.fill();

        this.#strokeRectangle(1,'black');

        this.drawText(this.#ctx,text,'white',x+(width/2),y+(height/2),14,'Nunito');
    }

    #strokeText(lineWidth,color,text,x,y){
        this.#ctx.lineWidth = lineWidth;
        this.#ctx.strokeStyle = color;
        this.#ctx.strokeText(text, x, y);
    }

    #strokeRectangle(lineWidth,color){
        this.#ctx.lineWidth = lineWidth;
        this.#ctx.strokeStyle = color;
        this.#ctx.stroke();
    }

    #drawRectangleRounded(ctx, x, y, width, height, radius) {
        ctx.beginPath();
        
        ctx.moveTo(x + radius, y);
        ctx.lineTo(x + width - radius, y);
        ctx.quadraticCurveTo(x + width, y, x + width, y + radius);
        ctx.lineTo(x + width, y + height - radius);
        ctx.quadraticCurveTo(x + width, y + height, x + width - radius, y + height);
        ctx.lineTo(x + radius, y + height);
        ctx.quadraticCurveTo(x, y + height, x, y + height - radius);
        ctx.lineTo(x, y + radius);
        ctx.quadraticCurveTo(x, y, x + radius, y);
        
        ctx.closePath();   
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

    convertTime(min,seg){
        return `${min.toString().padStart(2, '0')}:${seg.toString().padStart(2, '0')}`;
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

        this.#canvas.addEventListener("mousedown", (e) => {
            e.preventDefault();
           
            if(!this.getIsEndGame()){
                this.#handleMouseDownFirstChip(e);
            }else{
                
            }

        });
    }

    #handleMouseDownFirstChip(e){
        const rect = this.#canvas.getBoundingClientRect();
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

            this.#selectedchip.handleMouseDown(e, this.#canvas); 
        }
    }

    #handleMouseUp() {
        this.#canvas.addEventListener("mouseup", (e) => {
            if(!this.getIsEndGame()){
                this.#handleMouseUpChips(e);
            }
        });
    }

    #handleMouseUpChips(e){
        this.#chips.forEach((chip) => {
            chip.handleMouseUp(e);
        });
        if(this.#selectedchip){
            this.#board.handleMouseUp(e,this.#selectedchip,this.#ctx);
        }
    }

    #handleMouseMove() {
        const canvas = this.#canvas;
        canvas.addEventListener("mousemove", (e) => {
            this.#chips.forEach((chip) => {
                chip.handleMouseMove(e, this.#ctx, canvas);
            });
        });
    }

    #handleMouseOut() {
        const canvas = this.#canvas;
        canvas.addEventListener("mouseout", (e) => {
            if(!this.getIsEndGame()){
                this.#handleMouseOutChips(e);
            }
        });
    }

    #handleMouseOutChips(e){
        this.#chips.forEach((chip) => {
            chip.handleMouseOut(e);
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

    getIsEndGame(){
        return this.#isEndGame;
    }

    getWinningPlayer(){
        const winP1=this.#winsForPlayer.player1;
        const winP2=this.#winsForPlayer.player2;

        return winP1 > winP2 ? Config.players.type1 : winP1===winP2 ? null : Config.players.type2;
    }
    
    getWinsPlayer1(){
        return this.#winsForPlayer.player1
    }

    getWinsPlayer2(){
        return this.#winsForPlayer.player2
    }

    getSelectedChip(){
        return this.#selectedchip;
    }


    addWinPlayer1(){
        this.#winsForPlayer.player1+=1;
    }

    addWinPlayer2(){
        this.#winsForPlayer.player2+=1;
    }

    addWinForPlayer(boxWin){
        const heroWin= boxWin.getChip().getPlayer();
        if(heroWin === Config.players.type1){
            this.addWinPlayer1();
        }else{
            this.addWinPlayer2();
        }
    }

    setIsEndGame(bool){
        this.#isEndGame=bool;
    }

    resetAllRoundsWin(){
        this.#winsForPlayer.player1=0;
        this.#winsForPlayer.player2=0;
    }

    setPlayerTurn(value){
        this.#playerTurn=value;
    }

    alternateTurn(){
        if(this.getPLayerTurn() === 1){
           this.setPlayerTurn(2);
        }else{
            this.setPlayerTurn(1);
        }
    }

    setTurnForWinner(box){
        let players= Config.listPlayerTypes;
    
        let win= players.findIndex(p => p===box.getChip().getPlayer());
        
        this.setPlayerTurn(win+1);
    }

}