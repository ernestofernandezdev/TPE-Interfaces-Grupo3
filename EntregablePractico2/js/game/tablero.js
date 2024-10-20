class Tablero {
    #matriz;
    #type;
    #startX;
    #startY;

    constructor(){

    }

    /*debe dibujar el tablero con sus casilleros y fichas dentro */
    drawBoard(){
        const canvas = document.getElementById("gameCanvas");
        const ctx = canvas.getContext('2d');
        

        this.#startX = (canvas.width - Config.boardSize.width) / 2;  /*posicion en X donde arranca a dibujarse el tablero---> al centro del ancho del canvas*/
        this.#startY= canvas.height - Config.boardSize.height;      /*posicion en Y donde arranca a dibujarse el tablero---> total de altura del canvas - lo alto del tablero. seria como un "margen top" */
    
        
       
        ctx.fillStyle="white";
        
        ctx.fillRect(this.#startX,this.#startY,Config.boardSize.width,canvas.offsetHeight-this.#startY); /*el alto del tablero es lo alto del canvas menos el pedacito de arriba que no tiene tablero (ese "margen top") */
    
    }

    handleMouseDown(){}

    handleMouseMove(){}

    /*esta recibe por parametro la ficha clickeada, si no es null y esta en el area comprendida la posiciona */
    /*cuando la recibe la agrega a su matriz de fichas, y se elimina de la clase game asi no se ve involucrada en los clicks */
    handleMouseUp(e){
        
        
        if(this.#isInDropZone(e.offsetX , e.offsetY)){
            let colData=this.#getColDrop(e.offsetX,e.offsetY);
            console.log("columna que quedaria: "+colData.col);
            
            console.log("si");
            
        }else{
            console.log("nono");
            
        }
  
      
        
    }


    #isInDropZone(mouseX,mouseY){
        let endX= parseInt(this.#startX)+parseInt(Config.boardSize.width);

        return (mouseX > parseInt(this.#startX)+Config.fileSize.radius/2 && mouseX < endX-Config.fileSize.radius/2) && (parseInt(mouseY) < parseInt(this.#startY));
    }

    #getColDrop(mouseX,mouseY){
        let colSize=parseInt(Config.boardSize.width / Config.typeGame.columnsBoard);    /*tamaño de las columnas */
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

    handleMouseOut(){}

}