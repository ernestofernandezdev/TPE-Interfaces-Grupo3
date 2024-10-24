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

      
       
        this.#startX = canvas.width/2 - Config.boardSize.width/2;  /*posicion en X donde arranca a dibujarse el tablero---> al centro del ancho del canvas*/
        this.#startY= canvas.height - Config.boardSize.height;      /*posicion en Y donde arranca a dibujarse el tablero---> total de altura del canvas - lo alto del tablero. seria como un "margen top" */
    
        if(this.#boxes[0][0] == null){
            this.createBoxes();
        }

        
        ctx.fillStyle='red';
        ctx.fillRect(this.#startX, this.#startY,Config.boardSize.width,Config.boardSize.height);
       
    }

    handleMouseDown(){}

    handleMouseMove(){
    }

    handleMouseOut(){}

    /*cuando se suelta el click en el canvas ---> recibe por parametro la ficha clickeada/arrastrada, verifica si hay ficha arrastrada y si el dropeo(mouseUp) esta en el area superior del tablero comprendida. */
    /*cuando recibe la ficha la agrega a su matriz de fichas.La Ficha se elimina de la clase game ----> sale de las fichas disponibles asi no se renderiza junto con las otras. */
    handleMouseUp(e,chip,canvas,ctx){
        
        if(this.isInDropZone(e.offsetX , e.offsetY)){
            let posOfColumnDrop=this.#getColDrop(e.offsetX) -1;
            const firstBoxEmpty= this.getFirstBoxEmptyInCol(posOfColumnDrop);
            
            
            if(firstBoxEmpty){
                firstBoxEmpty.assignChip(chip,ctx);
                let listBoxesWinner= this.checkWinner(posOfColumnDrop,firstBoxEmpty);
                
                if(listBoxesWinner){
                    console.log("HAY GANADOR");
                    console.log(listBoxesWinner);
                    
                    
                }else{
                    console.log("no hay ganador");
                    
                }
               
            }else{
                console.log("no hay mas lugar en columna: "+ posOfColumnDrop);
                
            }
          
            
            Game.getInstance().removeChip(chip);
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            ctx.save(); // guarda el contexto antes de dibujar
            ctx.restore();
            Game.getInstance().redraw(ctx);
           

        }else {
            chip.redrawChip(canvas,ctx);
        }

    }

    /*Parametros: posicion de columna donde se dropeo la ultima ficha, casillero donde se almacena la ultima ficha dropeada */
    /*funcion para revisar si hay ganador por columnas, filas y diagonales */
    checkWinner(posOfColumnDrop,firstBoxEmpty){
        const quantityChipsAlignToWin= Config.typeGame.quantityChipsAlignToWin;
        let winForColumn=this.checkWinForColumn(posOfColumnDrop);
        let winForRow=this.checkWinForRow(firstBoxEmpty);
        let winForDiagonal=this.checkWinForDiagonal(firstBoxEmpty);

        if(winForColumn.length === quantityChipsAlignToWin){
            return winForColumn;
        
        }else if(winForRow.length === quantityChipsAlignToWin) {
            return winForRow;
           
        }else if(winForDiagonal){
            return winForDiagonal;
        }

        return null;
    }

    /*Parametro: posicion de la columna donde se dropeo la ultima ficha*/
    /*Retorna el primer casillero disponible de abajo hacia arriba en una columna(j) */
    getFirstBoxEmptyInCol(j){
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

    /*Parametro: posicion de la columna donde se dropeo la ultima ficha */
    /*recorre toda la columna de abajo hacia arriba para checkear si hay juego en la columna */
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

    /*Parametro: casillero donde se guarda la ultima ficha dropeada */
    /*Recorre los casilleros a la derecha e izquierda del casillero donde se guarda la ultima ficha dropeada--->primero recorre a su derecha y luego a su izquierda. */
    /*retorna un arreglo que para saber si es el ganador se debe verificar que su longitud sea igual al de la cantidad de fichas para hacer juego */
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

    /*Parametro: casillero donde se guarda la ultima ficha dropeada */
    /*funcion que llama a chequear las 2 diagonales que atraviezan el casillero de la ultima ficha ingresada */
    checkWinForDiagonal(box){
        let colInit=box.getColumn();
        let rowInit=box.getRow();
        const minToWin=Config.typeGame.quantityChipsAlignToWin;
        const diagRight=this.checkRightDiagonal(colInit,rowInit);
        const diagLeft=this.checkLeftDiagonal(colInit,rowInit);

        if(diagRight.length === minToWin){
            return diagRight;
        }else if(diagLeft.length === minToWin){
            return diagLeft;
        }
        return null;
    }

    /*Parametro: col: columna del casillero donde se guarda la ultima ficha dropeada. row: fila del casillero donde se guarda la ultima ficha dropeada */
    /*recorre primero la diagonal arriba a la izquierda y despues abajo a la derecha ---> haciendo la forma de: "\" */
    /*En cada recorrido agrega fichas del mismo jugador consecutivas al arreglo ganador */
    checkLeftDiagonal(col,row){
        const minToWin=Config.typeGame.quantityChipsAlignToWin;
        let index=1;
        let isBottomRow= row === this.#boxes.length-1;
        let isTopRow = row === 0;

        let isRightCol= col === this.#boxes[0].length-1;
        let isLeftCol= col === 0;

        let isEndSearch=false;
        let winLine=[];

        winLine.push(this.#boxes[row][col]);

        /*escala hacia arriba y a la izquierda */
        if(!isTopRow && !isLeftCol){
            while(!isEndSearch){

                if(!this.#boxes[row-index][col-index].isEmpty()){
                    winLine.push(this.#boxes[row-index][col-index]);
                    if(winLine[0].getChip().getPlayer() != winLine[winLine.length-1].getChip().getPlayer()){
                        winLine.pop();
                        isEndSearch=true;
                    }
                    if(winLine.length === minToWin){
                        isEndSearch= true;
                    }else{
                        index++;

                        isEndSearch= row-index < 0 || col-index < 0;
                    }
                }else{
                    isEndSearch= true;
                }
            }
        }
        
        if(winLine.length === minToWin){
            return winLine;
        }

        isEndSearch=false;
        index=1;
        col=winLine[0].getColumn();
        row=winLine[0].getRow();

        /*escala hacia abajo y a la derecha */
        if(!isRightCol && !isBottomRow){
            while(!isEndSearch){
                let diag = this.#boxes[row+index][col+index];

                if(!diag.isEmpty()){
                    winLine.push(this.#boxes[row+index][col+index]);
                    if(winLine[0].getChip().getPlayer() != winLine[winLine.length-1].getChip().getPlayer()){
                        winLine.pop();
                        isEndSearch=true;
                    }

                    if(winLine.length === minToWin){
                        isEndSearch= true;
                    }else{
                        index++;
                        isEndSearch= row+index > this.#boxes.length-1 || col+index > Config.typeGame.quantityColumnsInBoard-1;
                    }
                }else{
                    isEndSearch=true;
                }
            }
        }

        return winLine;
    }

    /*Parametro: col: columna del casillero donde se guarda la ultima ficha dropeada. row: fila del casillero donde se guarda la ultima ficha dropeada */
    /*recorre primero la diagonal arriba a la derecha y despues abajo a la izquierda ---> haciendo la forma de: "/" */
    /*En cada recorrido agrega fichas del mismo jugador consecutivas al arreglo ganador */
    checkRightDiagonal(col, row){
        const minToWin=Config.typeGame.quantityChipsAlignToWin;
        let index=1;
        let isBottomRow= row === this.#boxes.length-1;
        let isTopRow = row === 0;

        let isRightCol= col === this.#boxes[0].length-1;
        let isLeftCol= col === 0;

        let isEndSearch=false;
        let winLine=[];

        winLine.push(this.#boxes[row][col]);
      
        /*escala hacia arriba y a la derecha */
        if(!isRightCol && !isTopRow){
            while(!isEndSearch){

                if(!this.#boxes[row-index][col+index].isEmpty()){
                    winLine.push(this.#boxes[row-index][col+index]);

                    if(winLine[0].getChip().getPlayer() != winLine[winLine.length-1].getChip().getPlayer()){
                        winLine.pop();
                        isEndSearch=true;
                    }
                     
                    if(winLine.length === minToWin){
                        isEndSearch= true;
                    }else{
                        index++;
    
                        isEndSearch=col+index > Config.typeGame.quantityColumnsInBoard || row-index < 0;
                    }
                    
                }else{
                    isEndSearch=true;
                }

            }
        }

        if(winLine.length === minToWin){
            return winLine;
        }

        isEndSearch=false;
        index=1;
        col=winLine[0].getColumn();
        row=winLine[0].getRow();
      
        /*escala hacia abajo y a la izquierda */
        if(!isLeftCol && !isBottomRow){
            while(!isEndSearch){
                let diag=this.#boxes[row+index][col-index];

                if(!diag.isEmpty()){
                    winLine.push(this.#boxes[row+index][col-index]);
                    if(winLine[0].getChip().getPlayer() != winLine[winLine.length-1].getChip().getPlayer()){
                        winLine.pop();
                        isEndSearch=true;
                    }
                    
                    if(winLine.length === minToWin){
                        isEndSearch=true;
                    }else{
                        index++;
                        isEndSearch= row+index > this.#boxes.length-1 || col-index < 0;
                    }

                }else{
                    isEndSearch=true;
                }
            }
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

    /*crea objetos de casillero y los agrega a la matriz.  */
    createBoxes(){
        const margin=Config.boxSize.margins;
        let initY= this.getPosBottom() - Config.boxSize.width;  /*se empiezan a renderizar casilleros en la posicion mas abajo del tablero (getPosBottom) - el tamaño del casillero Y mas a la izquierda posible(getStartX) */
        let initX = this.getStartX();
        let sizeBox = Config.boxSize.width;
        let columns = Config.typeGame.quantityColumnsInBoard;    
       
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