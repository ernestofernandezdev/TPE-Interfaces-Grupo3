class Tablero {
    static #instance;
    #startX;
    #startY;    /*con startX almacenan en que posicion comienza el tablero. (posicion respecto al canvas en que se renderiza)*/
    #boxes=[];  /*matriz de casilleros(boxes) */

    constructor(){
        if (Tablero.#instance) {
            return Tablero.#instance;
        }
        Tablero.#instance = this;
        for(let i = 0; i < Config.typeGame.rowsBoard; i++){
            this.#boxes.push([]);
        }
    }

    static getInstance() {
        return Tablero.#instance;
    }

    /*debe dibujar el tablero con sus casilleros y fichas dentro */
    /*el tablero son muchos rectangulos. Los rectangulos contienen al circulo casillero en el centro (drawRectangles)*/
    drawBoard(ctx){
        const canvas = document.getElementById("gameCanvas");
       
        this.#startX = (canvas.width - Config.boardSize.width) / 2;  /*posicion en X donde arranca a dibujarse el tablero---> al centro del ancho del canvas*/
        this.#startY= canvas.height - Config.boardSize.height;      /*posicion en Y donde arranca a dibujarse el tablero---> total de altura del canvas - lo alto del tablero. seria como un "margen top" */
    
        if(this.#boxes[0][0] == null){
            this.createBoxes();
        }

        this.#drawRectangles(ctx);
       
    }

    handleMouseDown(){}

    handleMouseMove(){
    }

    handleMouseOut(){}

    /*cuando se suelta el click en el canvas ---> recibe por parametro la ficha clickeada/arrastrada, verifica si hay ficha arrastrada y si el dropeo(mouseUp) esta en el area superior del tablero comprendida. */
    /*cuando recibe la ficha la agrega a su matriz de fichas.La Ficha se elimina de la clase game ----> sale de las fichas disponibles asi no se renderiza junto con las otras. */
    handleMouseUp(e,chip,canvas,ctx){
        
        if(this.isInDropZone(e.offsetX , e.offsetY)){
            let colData=this.#getColDrop(e.offsetX,e.offsetY);
            console.log("columna que quedaria: "+colData.col);
            this.#assingChipToBox(chip, colData.col);
            console.log(this.#boxes);
            
            Game.getInstance().removeChip(chip);
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            ctx.save(); // guarda el contexto antes de dibujar
            ctx.restore();
            Game.getInstance().redraw(ctx);
            /*aca la mando a eliminar del arreglo de game */
            /*mando a guardar la ficha en el casillero vacio de la columna,pasando por todas los casilleros vacios en la columna */
            //console.log(chip);
            
        } else {
            chip.redrawChip(canvas,ctx);
        }

    }

    /*Parametros: la ficha a agregar al tablero y el numero de colunmna (entre 1 y 7->total de columnas) */
    /*asigna la ficha al primer lugar vacio de abajo para arriba de la columna. Se lo pasa al Casillero --> assignChip(ficha) */
    #assingChipToBox(chip,col){
        let isAssing=false;
        for(let i = this.#boxes.length-1; i >= 0 && !isAssing ; i--){
            for(let j = 0; j < this.#boxes[i].length && !isAssing; j++){
                if(this.#boxes[i][j].isEmpty() && j == col-1){
                    this.#boxes[i][j].assignChip(chip);
                    isAssing=true;
                }
            }
        }
    }

    getStartX(){
        return this.#startX;
    }

    getStartY(){
        return this.#startY;
    }

    /*el ultimo valor de Y que toma el tablero coincide con el final del canvas, por eso retorna el alto del canvas */
    getPosBottom(){
        const canvas = document.getElementById("gameCanvas");
        return  canvas.height;
    }

    /*Parametros: posiciones de x e y de donde se hizo un mouseUp. Verifica si esta en la zona de dropeo de ficha(encima de tablero). */
    isInDropZone(mouseX,mouseY){
        let endX= parseInt(this.#startX)+parseInt(Config.boardSize.width);

        return (mouseX > parseInt(this.#startX)+Config.chipSize.radius/2 && mouseX < endX-Config.chipSize.radius/2) && (parseInt(mouseY) < parseInt(this.#startY));
    }

    /*Parametros: posiciones de x e y de donde se hizo mouseUp. Retorna un objeto que contiene las coordenadas donde se dropeo y la posicion de columna que deberia insertarse.*/
    /*Posicion de columna: numero de columna -1. */
    #getColDrop(mouseX,mouseY){
        let colSize=parseInt(Config.boardSize.width / Config.typeGame.columnsBoard);  /*tamaño de las columnas: total de ancho del tablero dividido el total de columnas de juego*/
        let pos={x:0,y:0,col:1};
        let isCol=true;

        //*se observa en que posicion de X dropeo la ficha(mouseX) y busca la columna en base a donde comienzan las columnas y su tamaño  */
        /*ejemplo para la primer columna: si mouseX esta entre: donde arrancan las columnas + el tamaño de la primer columna -> es la columna indicada */
        /*segunda iteracion: si mouse X esta entre: donde arrancan las columnas + 2 veces el tamaño de la columna -> esta en la segunda columna */
        while(isCol){
            if (mouseX < this.#startX + (colSize * pos.col) ){
                pos.x=mouseX;
                pos.y=mouseY;
                isCol=false;
            }else{
                pos.col++;
            }
        }

        return pos;
    }

    /*dibuja todos los rectangulos del tablero acorde al total y tamaños de casilleros */
    #drawRectangles(ctx){
        let initY= this.getPosBottom() - Config.boxSize.width;  /*se empiezan a renderizar casilleros en la posicion mas abajo del tablero (getPosBottom) - el tamaño del casillero Y mas a la izquierda posible(getStartX) */
        let initX = this.getStartX();
        let sizeBox= Config.boxSize.width;
        let columns=Config.typeGame.columnsBoard;  
        let totalRectangles= Config.typeGame.rowsBoard * Config.typeGame.columnsBoard;

        for(let i =this.#boxes.length-1; i >= 0; i-- ){
            for(let j =0; j < columns; j++){
             
                ctx.fillStyle='orange';
                ctx.fillRect(initX,initY,sizeBox,sizeBox);
                // const centerX = initX + Config.boxSize.width / 2;
                // const centerY = initY + Config.boxSize.height / 2;
                // const radius = Config.chipSize.radius;
                
                // ctx.save()
                // ctx.fillStyle = 'red'; 
                // ctx.beginPath();
                // ctx.arc(centerX, centerY, radius, 0, Math.PI * 2);
                
                // ctx.clearRect(centerX - radius, centerY - radius, radius * 2, radius * 2);
                // ctx.restore();
               
                initX = initX+sizeBox;
            }
            initX= initX - (sizeBox*columns)
            initY=initY - sizeBox;
        }
          
    }

    /*crea objetos de casillero y los agrega a la matriz.  */
    createBoxes(){
        let initY= this.getPosBottom() - Config.boxSize.width;  /*se empiezan a renderizar casilleros en la posicion mas abajo del tablero (getPosBottom) - el tamaño del casillero Y mas a la izquierda posible(getStartX) */
        let initX = this.getStartX();
        let sizeBox= Config.boxSize.width;
        let columns=Config.typeGame.columnsBoard;    
       
        for(let i =this.#boxes.length-1; i >= 0; i-- ){
            for(let j =0; j < columns; j++){
                this.#boxes[i].push(new Casillero(initX,initY));
               
                initX = initX+sizeBox;
            }
            initX= initX - (sizeBox*columns)
            initY=initY - sizeBox;
        }
    

    }

    /*recorre la matriz de casilleros y manda a dibujar cada casillero */
    drawAllBoxes(ctx){
        this.#boxes.forEach(row =>{
            row.forEach(col=>{
                col.drawBox(ctx);
            })
        })
    }

}