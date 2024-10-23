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
        for(let i = 0; i < Config.typeGame.quantityRowsInBoard; i++){
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
            const quantityChipsAlignToWin= Config.typeGame.quantityChipsAlignToWin;
            let posOfColumnDrop=this.#getColDrop(e.offsetX) -1;
            const firstBoxEmpty= this.getFirstBoxEmptyInCol(posOfColumnDrop);
            
            
            if(firstBoxEmpty){
                firstBoxEmpty.assignChip(chip);
              
                if(this.checkWinForColumn(posOfColumnDrop).length === quantityChipsAlignToWin){
                    console.log("hay ganador por columna");
                    console.log(this.checkWinForColumn(posOfColumnDrop));
                    
                    
                }else if(this.checkWinForRow(firstBoxEmpty).length === quantityChipsAlignToWin) {

                   console.log("hay ganador por fila");
                   console.log(this.checkWinForRow(firstBoxEmpty));
                   
                   
                    
                }else{
                    console.log("se verifico la columna y fila y no hay");
                }
               
            }else{
                
                console.log("no hay mas lugar en columna");
                
            }
          
            
            Game.getInstance().removeChip(chip);
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            ctx.save(); // guarda el contexto antes de dibujar
            ctx.restore();
            Game.getInstance().redraw(ctx);
            /*aca la mando a eliminar del arreglo de game */

            /*mando a guardar la ficha en el casillero vacio de la columna,pasando por todas los casilleros vacios en la columna */
            //console.log(chip);
            
        }else {
            chip.redrawChip(canvas,ctx);
        }

    }

  
    getFirstBoxEmptyInCol(j){
        /*en base a las columnas que hay,tomar la columna y preguntar si hay ficha */
        let rowPos=Config.typeGame.quantityRowsInBoard-1;
        let box;

       while(!box && rowPos >= 0){
            if(this.#boxes[rowPos][j].isEmpty()){
                box=this.#boxes[rowPos][j];
            }
            rowPos--;
       }
        
       return box;
    }

    checkWinForColumn(j){
        const minWin=Config.typeGame.quantityChipsAlignToWin;
        let isWin=false;
        let notWin=false;
        let rowPos=this.#boxes.length-1;
        let winLine=[];
    
        while(!isWin && !notWin && rowPos >= 0){
            if(!this.#boxes[rowPos][j].isEmpty()){
                winLine.push(this.#boxes[rowPos][j]);

                if(winLine.length > 1){
                    if(winLine[0].getChip().getPlayer() != winLine[winLine.length-1].getChip().getPlayer()){
                        winLine=[];
                        winLine.push(this.#boxes[rowPos][j]);
                    }
                }

            }else{
                notWin=true;
            }

            isWin=minWin === winLine.length;
        
            rowPos--;
        }

        return winLine;
    }

    checkWinForRow(box){
        const minWin=Config.typeGame.quantityChipsAlignToWin;
        const quantityCol = Config.typeGame.quantityColumnsInBoard;

        let rowBoard= this.#boxes[box.getRow()];
        let colPosBox= box.getColumn();

        let winLine=[];
        let isNotWin=false;
        let isWin=false;
    
        //recorro la fila desde la columna que se ingreso la ficha , hacia la derecha en las columnas. Guardo en arreglo si encuentro fichas iguales y consecutivas a la ingresada
        while(colPosBox < quantityCol && !isNotWin && !isWin){
            if(!rowBoard[colPosBox].isEmpty()){
                winLine.push(rowBoard[colPosBox]);

                if(winLine.length > 1){
                    if(winLine[0].getChip().getPlayer() != winLine[winLine.length-1].getChip().getPlayer()){
                        winLine.pop()
                        isNotWin=true; 
                    }
                }

                isWin= winLine.length === minWin;
            }else{
                isNotWin=true;
            }
            colPosBox++;
        }
       
        if(isWin){
            return winLine;
        }

        colPosBox=box.getColumn()-1;
        isNotWin=false;
        isNotWin=false;
 
        //Con las fichas iguales a la derecha, recorro a la izquierda y guardo las iguales y consecutivas
        while(colPosBox >= 0 && !isNotWin && !isWin){
            if(!rowBoard[colPosBox].isEmpty()){
                winLine.push(rowBoard[colPosBox]);

                if(winLine.length > 1){
                  
                    if(winLine[0].getChip().getPlayer() != winLine[winLine.length-1].getChip().getPlayer()){
                        winLine=[];
                        isNotWin=true;
                    }
                }
                isWin = winLine.length === minWin;
            }else{
                winLine=[]
                isNotWin=true;
            }
            colPosBox--;
        }

        return winLine;  
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

    /*Parametros: posiciones de x e y de donde se hizo mouseUp. Retorna el numero de columna donde debe insertarse.*/
    /*Es el numero de columna, no la posicion (para obtener posicion restarle 1 a este numero)*/
    #getColDrop(mouseX){
        let colSize=parseInt(Config.boardSize.width / Config.typeGame.quantityColumnsInBoard);  /*tamaño de las columnas: total de ancho del tablero dividido el total de columnas de juego*/
        let col=1;
        let isCol=true;

        while(isCol){
            if (mouseX < this.#startX + (colSize * col) ){
                isCol=false;
            }else{
                col++;
            }
        }

        return col;
    }

    /*dibuja todos los rectangulos del tablero acorde al total y tamaños de casilleros */
    #drawRectangles(ctx){
        let initY= this.getPosBottom() - Config.boxSize.width;  /*se empiezan a renderizar casilleros en la posicion mas abajo del tablero (getPosBottom) - el tamaño del casillero Y mas a la izquierda posible(getStartX) */
        let initX = this.getStartX();
        let sizeBox= Config.boxSize.width;
        let columns=Config.typeGame.quantityColumnsInBoard;  
        let totalRectangles= Config.typeGame.quantityRowsInBoard * Config.typeGame.quantityColumnsInBoard;

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
        let columns=Config.typeGame.quantityColumnsInBoard;    
       
        for(let i =this.#boxes.length-1; i >= 0; i-- ){
            for(let j =0; j < columns; j++){
                this.#boxes[i].push(new Casillero(initX,initY,i,j));
               
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