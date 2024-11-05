class Game {
    static #instance;
    static images;
    #ctx;
    #canvas;
    #timerAnimation;
    #chips = [];    /*fichas disponibles para lanzar */
    #selectedchip=null; /*ficha seleccionada/arrastrada */
    #board; 
    #posDispenser=null;
    #playerTurn;
    #statesGame={   /*maneja los momentos del juego para saber que eventos activar/escuchar y responder */
        stop:false,         /*se utiliza cuando se encuentra juego en linea y cuando se muestra ganador/empate */
        inMainMenu:false,
        inConfig:false,
    }

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

    #winsForPlayer={
        player1:0,
        player2:0
    }

    #timer={
        min:0,
        seg:0
    }

    /*al momento de dibujar se agregan coordenadas de dibujo */
    #buttonsProperties={
        play:{
            ...Config.sizeButtons,
        },
        config:{
            ...Config.sizeButtons
        },
        groupArrows:[]
    }

    #personalizeConfig=[];


    constructor() {
        if (Game.#instance) {
            return Game.#instance;
        }
        Game.#instance = this;
        this.#playerTurn = 1;
        this.#initPersonalizeConfig();
      
    }

    static getInstance() {
        return Game.#instance;
    }

    getCanvas() {
        const canvas = document.createElement("canvas");
        canvas.id = 'gameCanvas';
        this.#canvas=canvas;
        canvas.style.backgroundImage= 'linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(./static/assets/game/game-background.png)';
        canvas.style.backgroundRepeat = 'no-repeat';
        canvas.style.backgroundPosition = 'center top';
        canvas.style.backgroundSize = '100%';

        return canvas;
    }

    //////////////////////////////////////////////////////////metodos del flujo del juego///////////////////////////////////////////////////////////////////////
    loadGame(){
        this.loadConfig();
        this.initMainMenu();
    }

    /*manda a cargar configuraciones del juego y escuchar eventos del mouse/usuario*/
    loadConfig() {
        this.#ctx = this.#canvas.getContext("2d");
        this.#board = new Tablero();
        this.setDispenserProperties();
 
        Config.adjustCanvasResolution();
        this.#handleAllEvents();
    }

    initMainMenu(){
        const options=["Clásico", "Configuración"];
        const backgroundMainColor='black';
        this.setIsInMainMenu(true);

        this.drawMainMenu(Game.images.menu,'4 en linea: Batman vs Joker','red',options,backgroundMainColor);
    }

    rebootGame(){
        this.#board.resetAllBoxes();
        this.resetAllRoundsWin();

        this.setPlayerTurn(1);
        this.resetAllChips();

        this.animateTimer(this.#ctx);

        this.clearAndRedraw(this.#ctx);
       
    }

    endGame(){
        const win=this.getWinningPlayer();
        this.setStopGame(true);
        this.setIsInMainMenu(true);
        
        setTimeout(() => {
            this.clearAndRedraw(this.#ctx);
            const backgroundMainColor='rgba(0, 0, 0, 0.7)';
            const options=['Reiniciar','Configuración'];
            const colorsText={
                p1:'#151FB1',
                p2:'#D83232',
                draw:'#EEE238'
            }
            
            if(!win){
                this.drawMainMenu(Game.images.draw,`¡EMPATE!`,colorsText.draw,options,backgroundMainColor);
            }else{
                const prop = win===Config.players.type1 ? {img: Game.images.batman, color: colorsText.p1} : {img:Game.images.joker,color:colorsText.p2};
    
                this.drawMainMenu(prop.img,`¡GANADOR!`,prop.color,options,backgroundMainColor);
            } 
        }, 500);
    }

    
    ///////////////////////////////////////////////////////////////////metodos de redibujo/////////////////////////////////////////////////////////////////////////////

    /*Util cuando se cambia el estado de cosas del juego(se agregan fichas, se modifica la cantidad de fichas, se mueve la ficha, etc.) */
    clearAndRedraw(ctx){
        this.clear(ctx);
        this.redraw(ctx);
    }

    clearAndRedrawMenuConfig(ctx){
        this.clear(ctx);
        this.redraw(ctx);
        this.drawConfigMenu();
    }

    /*Util para cuando se desea dibujar mas cosas por encima de lo que ya hay(ejemplo placeholder de ficha, se agrega a lo que hay)*/
    redraw(context){
        this.drawTimer(context,this.convertTime(this.#timer.min===Config.typeGame.timeInMin && this.#timer.seg===59?this.#timer.min-1:this.#timer.min,this.#timer.seg));
        this.drawResetBtn();
        this.#board.drawAllBoxes(context)
        this.drawChipDispenser();
        this.drawAllAvailableChips(context)
       
    }

    clear(ctx){
        ctx.clearRect(0, 0, this.#canvas.offsetWidth, this.#canvas.offsetHeight);
        ctx.save(); 
        ctx.restore();
    }

    ////////////////////////////////////////////////////////////dibujos-organismo de los 2 menu (main y config)//////////////////////////////////////////////////////////////////////
    drawMainMenu(img,title,textColor,options,backColor){
        const width= this.#canvas.offsetWidth;
        const height=this.#canvas.offsetHeight;

        this.#drawMenuContainer(width,height,backColor);
        this.#drawMainMenuContainer(width,height,img,title,textColor,options);
    }

    drawConfigMenu(){
        const width= this.#canvas.offsetWidth;
        const height=this.#canvas.offsetHeight;

        this.#drawMenuContainer(width,height,this.getIsStopGame()? 'rgba(0, 0, 0, 0.5)':'black');
      
        this.#drawConfigMenuContainer(width,height,Game.images.menu);
    }

    //////////////////////////////////////////////////////////dibujos contenedores y moleculas de los 2 menu (main y config)//////////////////////////////////////////
    #drawMainMenuContainer(parentWidth,parentHeight,img,title,textColor,options){
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

        this.#drawMenuImg(this.#ctx,startX,startY,width,height,30,img,'rgba(0, 0, 0, 0.3)');
        this.#drawStrokeText(this.#ctx,title,textColor,startX+(width/2),startY+50,45,"Bubblegum Sans");

        this.#drawButton(play.x,play.y,play.width,play.height,buttonsColor,options[0]);
        this.#drawButton(config.x,config.y,config.width,config.height,buttonsColor,options[1]);
    }

    #drawConfigMenuContainer(parentWidth,parentHeight,img){
        const width=parentWidth/2;
        const height=parentHeight/2 + parentHeight/3;
        const startX=parentWidth/2-(width/2);
        const startY=parentHeight/2-(height/2);
        const btnPlay=this.#buttonsProperties.play;

        this.#drawMenuImg(this.#ctx,startX,startY,width,height,30,img,'rgba(0, 0, 0, 0.5)')
       
        this.#drawConfigList(startX,startY,width,height);

        this.#drawButton(parentWidth/2-(btnPlay.width/2),(startY+height)-btnPlay.height-10,btnPlay.width,btnPlay.height,'#2B35C6','Jugar');

        this.#buttonsProperties.play.x=parentWidth/2-(btnPlay.width/2);
        this.#buttonsProperties.play.y=(startY+height)-btnPlay.height-10;
    }

    #drawConfigList(parentX,parentY,parentWidth,parentHeight){

        this.#sincronizedPersonalizeConfig();

        const width=parentWidth-(parentWidth/2);
        const height=parentHeight-(parentHeight/6);
        const x=(parentX+(parentWidth/2))-(width/2);
        const y=parentY+10;   
        const qItems=this.#personalizeConfig.length;
        let index=0;
        let incrementY;  


        this.#personalizeConfig.forEach(c=>{
            if(!c.options[c.optionPos]){
                c.optionPos=0;
            }
            if(index===0){
                this.#drawItemConfig(c.title,c.options,{x:x,y:y,width:width,height:height/qItems},index,c.optionPos);
            }else{
                this.#drawItemConfig(c.title,c.options,{x:x,y:incrementY,width:width,height:height/qItems},index,c.optionPos);
            }
            index++;
            incrementY=y+(((height/qItems) * index) +8);
        }) 
    }

    #drawItemConfig(title,options,propSizing,numItem,optActive){
        const width=propSizing.width;
        const height=propSizing.height; 
        const x=propSizing.x;
        const y= propSizing.y;

        const titleSize=25;
        const titleX=x+width/2, titleY=y+Math.ceil(titleSize/2);

        const btnColor='#2B35C6';
        const btnSize=30;
        const arrowLeftX=x, arrowLeftY= y+height/3;
        const arrowRightX=(x+width)-btnSize, arrowRightY=y+height/3;
        
        const opSize=18;
        const opX=x+(width/2),opY=y+(height/3)+opSize;


        if(this.#buttonsProperties.groupArrows.length < this.#personalizeConfig.length){
            this.#buttonsProperties.groupArrows.push({
                id:numItem,
                left:{
                    x:arrowLeftX,
                    y:arrowLeftY,
                    width:btnSize,
                    height:btnSize
                },
                right:{
                    x:arrowRightX,
                    y:arrowRightY,
                    width:btnSize,
                    height:btnSize
                }
            })
        }

        
        this.#drawStrokeText(this.#ctx,title,'red',titleX,titleY,titleSize,'Nunito');
        this.#drawButton(arrowLeftX,arrowLeftY,btnSize,btnSize,btnColor,'<');
        this.#drawStrokeText(this.#ctx,numItem===0 ? `${options[optActive]} min.`: options[optActive],'white',opX,opY,opSize,'Nunito');
        this.#drawButton(arrowRightX,arrowRightY,btnSize,btnSize,btnColor,'>');
    }
    //////////////////////////////////////////////////////////////dibujos de cosas utiles (timer,fichas,dispenser de fichas)////////////////////////////////////////////////////////
    animateTimer(ctx){
        const maxMinutes=Config.typeGame.timeInMin;
        this.#timer.min=maxMinutes;
        this.#timer.seg=0;

        this.#timerAnimation = setInterval(() =>{
            if(this.#timer.seg === 59){
                this.#timer.min=this.#timer.min-1;
            }
            
            this.clearAndRedraw(ctx);
          
            if(this.#timer.min === 0 && this.#timer.seg===0){
                clearInterval(this.#timerAnimation);
                
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

    drawTimer(ctx,time){
        const width=120;
        const height=50;

        ctx.beginPath();
        ctx.fillStyle='#00197c';
        ctx.fillRect(this.#canvas.offsetWidth-width,0,width,height);
        if(this.#timer.min === 0 && this.#timer.seg <= 10){
            this.#drawText(ctx,time,'#EE4848',this.#canvas.offsetWidth-width/2, height/2, 35,'Impact');
        }else{
            this.#drawText(ctx,time,'white',this.#canvas.offsetWidth-width/2, height/2, 35,'Impact');
        }

    }

    drawResetBtn() {
        const maginRight=10;
        const width=100;
        const height=30;
        const posX=this.#canvas.offsetWidth-(width+maginRight);
        const posY=60;
        this.#drawButton(posX, posY, width, height, '#00197c', "Reiniciar")

        this.#canvas.addEventListener("click", e => {
            const rect = this.#canvas.getBoundingClientRect();
            const mouseX = e.clientX - rect.left;
            const mouseY = e.clientY - rect.top;

            if (mouseX > posX &&
                mouseX < this.#canvas.offsetWidth-maginRight &&
                mouseY > posY &&
                mouseY < posY+height
            ) {
                clearInterval(this.#timerAnimation);
                this.rebootGame();
            }
        })
    }

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
            this.#drawText(ctx,'🔻Turno🔻',colorText,x+(width/2), y-15,18,'Nunito');
           
        }

        this.#drawText(ctx,'Victorias',colorText,x+(width/2), y+((height/2)+80),25,'Nunito');
        this.#drawText(ctx,quantityWins,colorText,x+(width/2), y+((height/2)+120),20,'Nunito');
    }

    //////////////////////////////////////////////////////////////////////Dibujos reutilizables//////////////////////////////////////////////////////////////////////////////////////
    #drawMenuContainer(width,height,backColor){
        const startX=0;
        const startY=0;

        this.#ctx.fillStyle=backColor;
        this.#ctx.fillRect(startX,startY,width,height);
    }

    #drawMenuImg(ctx, x, y, width, height, radius,img,gradientColor){
        this.#drawRectangleRounded(ctx, x, y, width, height, radius);
        ctx.save(); 
        ctx.clip(); 

        if(img.complete){
            ctx.drawImage(img, x,y,width,height);
        }
        
        ctx.fillStyle=gradientColor;
        ctx.fillRect(x, y, width, height);
        ctx.restore();
    }

    #drawStrokeText(ctx,text,color,x,y,size,font){
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle'; 
        ctx.font = `bold ${size}px ${font}`; 

        this.#strokeText(2,'black',text,x,y)
    
        ctx.fillStyle = color;
        ctx.fillText(text, x, y);
    }

    #drawText(ctx,text,color,x,y,size,family){
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle'; 
        ctx.font = `bold ${size}px ${family}`; 
        ctx.fillStyle = color; 
        ctx.fillText(text,x,y);
    }

    #drawButton(x, y, width, height,color,text){
        const radiusButton=10;

        this.#ctx.fillStyle=color;
        this.#drawRectangleRounded(this.#ctx,x,y,width,height,radiusButton);
        this.#ctx.fill();

        this.#strokeRectangle(1,'black');

        this.#drawText(this.#ctx,text,'white',x+(width/2),y+(height/2),14,'Nunito');
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

    /*crea los objetos de Ficha. Multiplica cantidad de filas por columnas del juego y los divide por la cantidad de jugadores (batman vs joker).*/
    /*tiene en cuenta los costados del canvas para crear/renderizar inicialmente las fichas. */
    resetAllChips() {
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
        this.#handleMouseDown();
        this.#handleMouseUp();
        this.#handleMouseOut();
        this.#handleMouseMove();
        this.#handleClick();
    }

    #handleClick(){
        this.#canvas.addEventListener("click", (e) => {
            if(this.getIsInMainMenu()){                                 
                if(this.isInPlayGame(e)){                       /*si estando en el main menu, dio click a play */ 
                    this.resetAllStates();                          /*reseteo todos los estados y lanzo el juego */

                    this.rebootGame();
                    
                }else if(this.isInConfigGame(e)){               /*si estando en el main menu, dio click a configuracion*/
                    this.setIsInConfig(true);                    
                    this.setIsInMainMenu(false);                 /*dejo de estar en el menu principal y voy al de configuracion*/           

                    this.clearAndRedrawMenuConfig(this.#ctx); 
                }

            }else if(this.getIsInConfig() && this.#isInArrowsConfig(e)){        /*si esta en el menu de configuracion y dio click en las flechas*/
                const arrow= this.#isInArrowsConfig(e);
                this.#setPersonalizeConfig(arrow);                                            /*cambio las opciones elegidas, pero sigo en el menu de configuracion */
                this.clearAndRedrawMenuConfig(this.#ctx);

            }else if(this.getIsInConfig() && this.isInPlayGame(e)){             /*si esta en el menu de configuracion y dio click en el boton de play */
                this.resetAllStates();                                              /*reseteo todos los estados, actualizo reglas y lanzo el juego */
                this.#setGameTypeRules();
                this.rebootGame();
            }
        })
    }
    
    #handleMouseDown() {                                                                        
        this.#canvas.addEventListener("mousedown", (e) => {
            e.preventDefault();
            if(!this.getIsStopGame()){                          /*si el juego no esta detenido*/
                this.#handleMouseDownFirstChip(e);                  /*activo los eventos de las fichas*/
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

      
        //agarro el personaje de la ficha que selecciono y dejo usar solo la ultima renderizada.
        if (this.#selectedchip) {

            this.#selectedchip.handleMouseDown(e, this.#canvas); 
        }
    }

    #handleMouseUp() {
        this.#canvas.addEventListener("mouseup", (e) => {                                                          
            this.#handleMouseUpChips(e);                                
        });
    }

    #handleMouseUpChips(e){
        this.#chips.forEach((chip) => {
            if(!this.getIsStopGame()){  
                chip.handleMouseUp(e);
            }
        });
        if(this.#selectedchip && !this.getIsStopGame()){
            this.#board.handleMouseUp(e,this.#selectedchip,this.#ctx);
        }
    }

    #handleMouseMove() {
        const canvas = this.#canvas;
        canvas.addEventListener("mousemove", (e) => {
            
            this.#chips.forEach((chip) => {
                if(!this.getIsStopGame()){
                    chip.handleMouseMove(e, this.#ctx, canvas);
                }
            });
            
        });
    }

    #handleMouseOut() {
        const canvas = this.#canvas;
        canvas.addEventListener("mouseout", (e) => {
            
            this.#handleMouseOutChips(e);
            
        });
    }

    #handleMouseOutChips(e){
        this.#chips.forEach((chip) => {
            if(!this.getIsStopGame()){
                chip.handleMouseOut(e);
            }
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

    getWinningPlayer(){
        const winP1=this.#winsForPlayer.player1;
        const winP2=this.#winsForPlayer.player2;

        return winP1 > winP2 ? Config.players.type1 : winP1===winP2 ? null : Config.players.type2;
    }

    isInPlayGame(e){
        const {offsetX,offsetY}=e;
        const btnPlay=this.#buttonsProperties.play;

        return offsetX >= btnPlay.x && offsetX <= btnPlay.x+btnPlay.width && offsetY >= btnPlay.y && offsetY <= btnPlay.y+btnPlay.height;
    }

    isInConfigGame(e){
        const {offsetX,offsetY}=e; 
        const btnConfig=this.#buttonsProperties.config;

        return offsetX >= btnConfig.x && offsetX <= btnConfig.x+btnConfig.width && offsetY >= btnConfig.y && offsetY <= btnConfig.y+btnConfig.height;
    }

    #isInArrowsConfig(e){
        const {offsetX,offsetY}=e;
        let obj={
            id:-1,
            typeArrow:0
        };

        this.#buttonsProperties.groupArrows.forEach(btn=>{
            let btnLeft=btn.left;
            let btnRight=btn.right;
           
            if(offsetX >= btnLeft.x && offsetX <= btnLeft.x+btnLeft.width && offsetY >= btnLeft.y && offsetY <= btnLeft.y+btnLeft.height){
                obj.id=btn.id;
                obj.typeArrow=0;
            }else if(offsetX >= btnRight.x && offsetX <= btnRight.x+btnRight.width && offsetY >= btnRight.y && offsetY <= btnRight.y+btnRight.height){
                obj.id=btn.id;
                obj.typeArrow=1;
            }
        })

        if(obj.id==-1){
            return null;
        }

        return obj;
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

    getIsStopGame(){
        return this.#statesGame.stop;
    }
   
    getIsInConfig(){
        return this.#statesGame.inConfig;
    }

    getIsInMainMenu(){
        return this.#statesGame.inMainMenu;
    }

    #initPersonalizeConfig(){
        const configs=[
            {
                title:'Tiempo',
                options:[1,5,10,20,30],
                optionPos:0
            },
            {
                title:'Fichas',
                options:['Clasicas','Secundarias'],
                optionPos:0,
            },
            {
                title:'Tablero',
                options:['6x7','6x6','4x5','4x4'],
                optionPos:0
            },
            {
                title:'Fichas en linea',
                options:[],
                optionPos:0
            }];
        
        this.#personalizeConfig=[...configs];
    }

    #sincronizedPersonalizeConfig(){
        const configs=this.#personalizeConfig;
       
        if(configs[2].optionPos >= configs[2].options.length-2){
            this.#personalizeConfig[3].options=[3,4];
        }else if(configs[2].optionPos === 1){
            this.#personalizeConfig[3].options=[3,4,5,6];
        }else{
            this.#personalizeConfig[3].options=[3,4,5,6,7];
        }
    }

    #setPersonalizeConfig(arrow){
        let pos=this.#personalizeConfig[arrow.id].optionPos;
        
        if(arrow.typeArrow === 0){
            if(pos-1 < 0){
                this.#personalizeConfig[arrow.id].optionPos=this.#personalizeConfig[arrow.id].options.length-1;
            }else{
                this.#personalizeConfig[arrow.id].optionPos=pos-1;
            }
            
        }else{
            if(pos+1 > this.#personalizeConfig[arrow.id].options.length-1){
                this.#personalizeConfig[arrow.id].optionPos=0;
            }else{
                this.#personalizeConfig[arrow.id].optionPos=pos+1;
            }
        }
    }

    #setGameTypeRules(){
        const config = this.#personalizeConfig;
        const time=config[0].options[config[0].optionPos];
        const chips = config[1].optionPos;
        const board= config[2].options[config[2].optionPos];
        const lines=config[3].options[config[3].optionPos];
        const rows=board.toString().at(0);
        const cols=board.toString().at(-1);
        
        Config.typeGame.quantityRowsInBoard=parseInt(rows);
        Config.typeGame.quantityColumnsInBoard=parseInt(cols);
        Config.typeGame.timeInMin=parseInt(time);
        Config.typeGame.quantityChipsAlignToWin=parseInt(lines);
        Config.typeGame.typeOfChipsPlayer1=parseInt(chips);
        Config.typeGame.typeOfChipsPlayer2=parseInt(chips);

        Config.boardSize.width=Config.boxSize.width * parseInt(cols);
        Config.boardSize.height=Config.boxSize.height * parseInt(rows);


        Tablero.setInstance();
        this.#board=new Tablero();
    }

    setDispenserProperties(){
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
   
    resetAllStates(){
        Object.keys(this.#statesGame).forEach(prop => {
            this.#statesGame[prop] = false;
        });
    }

    setIsInMainMenu(bool){
        this.#statesGame.inMainMenu=bool;
    }
    setIsInConfig(bool){
        this.#statesGame.inConfig=bool;
    }

    setStopGame(bool){
        this.#statesGame.stop=bool;
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