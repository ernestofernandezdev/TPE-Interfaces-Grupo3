class Tablero {
    static #instance;
    #startX;
    #startY;    /*con startX almacenan en que posicion comienza el tablero. (posicion respecto al canvas en que se renderiza)*/
    #boxes=null;  /*matriz de casilleros(boxes) */

    constructor(){
        if (Tablero.#instance) {
            return Tablero.#instance;
        }
        Tablero.#instance = this;
       
        const canvas = document.getElementById("gameCanvas");
        this.#startX = canvas.offsetWidth/2 - Config.boardSize.width/2;  /*posicion en X donde arranca a dibujarse el tablero---> al centro del ancho del canvas*/
        this.#startY= canvas.offsetHeight - Config.boardSize.height;      /*posicion en Y donde arranca a dibujarse el tablero---> total de altura del canvas - lo alto del tablero. seria como un "margen top" */
        
        if(!this.#boxes){
           this.loadBoxes();
        }
    }

    static getInstance() {
        return Tablero.#instance;
    }

    static setInstance(){
        this.#instance=null;
    }

   
    loadBoxes(){
        this.#boxes=[];
        for(let i = 0; i < Config.typeGame.quantityRowsInBoard; i++){
            this.#boxes.push([]);
        }

        this.createBoxes();
    }

    /*crea objetos de casillero y los agrega a la matriz.  */
    createBoxes(){
        let sizeBox = Config.boxSize.width;
        let columns = Config.typeGame.quantityColumnsInBoard;
        let properties={
            initY: this.getPosBottom() - Config.boxSize.width,
            initX:this.getStartX(),
            row:0,
            col:0,
            borderRadius:[false,false,false,false],
        }    
       
        for(let i =this.#boxes.length-1; i >= 0; i-- ){

            for(let j =0; j < columns; j++){
                properties.row=i;
                properties.col=j;
                properties.borderRadius[0]=false;
                properties.borderRadius[1]=false;
                if(i===0 && j===0){
                    properties.borderRadius[0]=true;
                }
                if(i===0 && j===columns-1){
                    properties.borderRadius[1]=true;
                }

                this.#boxes[i].push(new Casillero(properties));
               
                properties.initX = properties.initX+sizeBox;
            }
            properties.initX= properties.initX - (sizeBox*columns)
            properties.initY=properties.initY - sizeBox;
        }
    
    }

    /*recorre la matriz de casilleros y manda a dibujar cada casillero */
    drawAllBoxes(ctx){
        this.#boxes.forEach(row =>{
            row.forEach(col=>{
                col.drawBox(ctx);
                if (!col.isEmpty()) {
                    col.drawChip(ctx);
                }
            })
        })
 
    }

    /*cuando se suelta el click en el canvas ---> recibe por parametro la ficha clickeada/arrastrada, verifica si hay ficha arrastrada y si el dropeo(mouseUp) esta en el area superior del tablero comprendida. */
    /*cuando recibe la ficha la agrega a su matriz de fichas.La Ficha se elimina de la clase game ----> sale de las fichas disponibles asi no se renderiza junto con las otras. */
    handleMouseUp(e,chip,ctx){
        
        if(this.isInDropZone(e.offsetX , e.offsetY)){
            const posOfColumnDrop=this.#getColDrop(e.offsetX) -1;
            const firstBoxEmpty= this.getFirstBoxEmptyInCol(posOfColumnDrop);
            let listBoxesWinner=null;
            chip.setPosition(this.#getColDrop(e.offsetX)*Config.boxSize.width-Config.boxSize.width/2 + this.#startX, this.#startY-Config.boxSize.height/2);

            if(firstBoxEmpty){
                chip.setFalling(true);
                firstBoxEmpty.assignChip(chip,ctx);
                
                this.animateFall(ctx, chip, firstBoxEmpty).then(()=>{
                    listBoxesWinner= this.checkWinner(posOfColumnDrop,firstBoxEmpty);

                    Game.getInstance().removeChip(chip);
                    Game.getInstance().updatePositionChipsDrop();
                    Game.getInstance().clearAndRedraw(ctx);

                    if(listBoxesWinner){
                        Game.getInstance().setStopGame(true);
                        this.checkListWinner(listBoxesWinner);
                        Game.getInstance().addWinForPlayer(listBoxesWinner[0]);
                        Game.getInstance().clearAndRedraw(ctx);

                        
                        setTimeout(() => {
                            if(!Game.getInstance().getIsInMainMenu()){
                                Game.getInstance().setStopGame(false);
                                Game.getInstance().setTurnForWinner(listBoxesWinner[0]);
                                this.resetAllBoxes();
                                Game.getInstance().resetAllChips();
                                Game.getInstance().clearAndRedraw(ctx);
                            }
                        }, 2200);

                        
                    }

                    if(Game.getInstance().getChips().length === 0 && !listBoxesWinner){
                        this.checkDrawBoxes();
                        Game.getInstance().clearAndRedraw(ctx);
                        
                        setTimeout(() => {
                            if(!Game.getInstance().getIsInMainMenu()){
                                this.resetAllBoxes();
                                Game.getInstance().resetAllChips();
                                Game.getInstance().clearAndRedraw(ctx);
                            }
                        }, 2200);
                    }

                });

                if(!listBoxesWinner){
                    Game.getInstance().alternateTurn();
                }
                
            }else{;
                Game.getInstance().updatePositionChipsDrop();
                Game.getInstance().clearAndRedraw(ctx);
            }

        }else {
            Game.getInstance().updatePositionChipsDrop();
            Game.getInstance().clearAndRedraw(ctx);
        }

    }

    animateFall(ctx, chip, firstBoxEmpty) {
        return new Promise((resolve) => {
            const dt = 0.2;
            let y = chip.getY();
            let x = chip.getX();
            const g = 80;
            let v = 0;
            let dv;
            let dy;
            const yMax = firstBoxEmpty.getY() + Config.boxSize.width / 2;
            let bounces = 0;
    
            const id = setInterval(() =>{
                dv = dt*g;
                v += dv;
                dy = v*dt
                y = y + dy;
                chip.setPosition(x, y);
                Game.getInstance().clearAndRedraw(ctx);
          
    
                if (y > yMax && bounces == 2) {
                    chip.setPosition(x, yMax);
                    chip.setFalling(false);
                   
                    Game.getInstance().clearAndRedraw(ctx);
                 
                    clearInterval(id);
                    
                    resolve(); // Resuelve la promesa al finalizar la animación
                } else if (y > yMax) {
                    y = yMax - 1;
                    chip.setPosition(x, y);
                    v = -0.3*v;
                    bounces++;
                }
            }, 16);
        });
    }

    checkDrawBoxes(){
        this.#boxes.forEach(row =>{
            row.forEach(box=>{
                box.setState(2);
            })
        })
    }

    checkListWinner(list){
        list.forEach(box =>{
            box.setState(1);
        })
    }

    resetAllBoxes(){
        this.#boxes.forEach(row =>{
            row.forEach(box=>{
                box.setState(0);
                box.setChip(null);
            })
        })

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
    
    /*Parametro: posicion de la columna donde se dropeo la ultima ficha*/
    /*Retorna el primer casillero disponible de abajo hacia arriba en una columna(j) */
    getFirstBoxEmptyInCol(j){
        let rowPos=Config.typeGame.quantityRowsInBoard-1;
        let pos={
            row:-1,
            col:-1
        }

       while(pos.col===-1 && rowPos >= 0){
            if(this.#boxes[rowPos][j].isEmpty()){
              
                pos.row=rowPos;
                pos.col=j
            }
            rowPos--;
        }
        
        if(pos.col != -1){
          
            return this.#boxes[parseInt(pos.row)][parseInt(pos.col)];

        }else{
            return null
        }
    }

    /*Parametros: posicion de columna donde se dropeo la ultima ficha, casillero donde se almacena la ultima ficha dropeada */
    /*funcion para revisar si hay ganador por columnas, filas y diagonales. Si hay ganador retorna el arreglo ganador*/
    checkWinner(posOfColumnDrop,firstBoxEmpty){
        const quantityChipsAlignToWin= Config.typeGame.quantityChipsAlignToWin;
        let winForColumn=this.checkWinForColumn(posOfColumnDrop);
        let winForRow=this.checkWinForRow(firstBoxEmpty);
        let winForDiagonal=this.checkWinForDiagonal(firstBoxEmpty);

        if(winForColumn.length === quantityChipsAlignToWin){
            return winForColumn;
        
        }else if(winForRow.length >= quantityChipsAlignToWin) {
            return winForRow;
           
        }else if(winForDiagonal){
            return winForDiagonal;
        }

        return null;
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
        const quantityCol = Config.typeGame.quantityColumnsInBoard;

        let rowBoard= this.#boxes[box.getRow()];
        let colPosBox= box.getColumn();

        let winLine=[];
        let isNotWin=false;
    
        //recorro la fila desde la columna que se ingreso la ficha , hacia la derecha en las columnas. Guardo en arreglo si encuentro fichas iguales y consecutivas a la ingresada
        while(colPosBox < quantityCol && !isNotWin){
            if(!rowBoard[colPosBox].isEmpty()){
                winLine.push(rowBoard[colPosBox]);

                if(winLine.length > 1){
                    if(winLine[0].getChip().getPlayer() != winLine[winLine.length-1].getChip().getPlayer()){
                        winLine.pop()
                        isNotWin=true; 
                    }
                }

            }else{
                isNotWin=true;
            }
            colPosBox++;
        }
 
        colPosBox=box.getColumn()-1;
        isNotWin=false;
 
        //Con las fichas iguales a la derecha, recorro a la izquierda y guardo las iguales y consecutivas
        while(colPosBox >= 0 && !isNotWin){
            if(!rowBoard[colPosBox].isEmpty()){
                winLine.push(rowBoard[colPosBox]);

                if(winLine.length > 1){
                  
                    if(winLine[0].getChip().getPlayer() != winLine[winLine.length-1].getChip().getPlayer()){
                        winLine.pop();
                        isNotWin=true;
                    }
                }
                
            }else{
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

        if(diagRight.length >= minToWin){
            return diagRight;
        }else if(diagLeft.length >= minToWin){
            return diagLeft;
        }
        return null;
    }

    /*Parametro: col: columna del casillero donde se guarda la ultima ficha dropeada. row: fila del casillero donde se guarda la ultima ficha dropeada */
    /*recorre primero la diagonal arriba a la izquierda y despues abajo a la derecha ---> haciendo la forma de: "\" */
    /*En cada recorrido agrega fichas del mismo jugador consecutivas al arreglo ganador */
    checkLeftDiagonal(col,row){
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

                if(this.#boxes[row-index][col-index] && !this.#boxes[row-index][col-index].isEmpty()){
                    winLine.push(this.#boxes[row-index][col-index]);
                    if(winLine[0].getChip().getPlayer() != winLine[winLine.length-1].getChip().getPlayer()){
                        winLine.pop();
                        isEndSearch=true;

                    }else{
                        index++;

                        isEndSearch= row-index < 0 || col-index < 0;
                    }
                  
                }else{
                    isEndSearch= true;
                }
            }
        }
        
        isEndSearch=false;
        index=1;
        col=winLine[0].getColumn();
        row=winLine[0].getRow();

        /*escala hacia abajo y a la derecha */
        if(!isRightCol && !isBottomRow){
            while(!isEndSearch){
                let diag = this.#boxes[row+index][col+index];

                if(diag && !diag.isEmpty()){
                    winLine.push(this.#boxes[row+index][col+index]);
                    if(winLine[0].getChip().getPlayer() != winLine[winLine.length-1].getChip().getPlayer()){
                        winLine.pop();
                        isEndSearch=true;
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

                if(this.#boxes[row-index][col+index] && !this.#boxes[row-index][col+index].isEmpty()){
                    winLine.push(this.#boxes[row-index][col+index]);

                    if(winLine[0].getChip().getPlayer() != winLine[winLine.length-1].getChip().getPlayer()){
                        winLine.pop();
                        isEndSearch=true;
                    }else{
                        index++;
    
                        isEndSearch=col+index > Config.typeGame.quantityColumnsInBoard || row-index < 0;
                    }
                    
                }else{
                    isEndSearch=true;
                }

            }
        }

        isEndSearch=false;
        index=1;
        col=winLine[0].getColumn();
        row=winLine[0].getRow();
      
        /*escala hacia abajo y a la izquierda */
        if(!isLeftCol && !isBottomRow){
            while(!isEndSearch){
                let diag=this.#boxes[row+index][col-index];

                if(diag && !diag.isEmpty()){
                    winLine.push(this.#boxes[row+index][col-index]);
                    if(winLine[0].getChip().getPlayer() != winLine[winLine.length-1].getChip().getPlayer()){
                        winLine.pop();
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

    getEndX(){
        return this.#startX+Config.boardSize.width;
    }

    getStartX(){
        return this.#startX;
    }

    getStartY(){
        return this.#startY;
    }

    getPosBottom(){
        const canvas = document.getElementById("gameCanvas");
        const dHeight=Config.boardSize.height+(canvas.offsetHeight-Config.boardSize.height);

        return dHeight;
    }
}