class Game {
    static #instance;
    #chips = [];    /*fichas disponibles para lanzar */
    #selectedchip=null; /*ficha seleccionada/arrastrada */
    #board; /*tablero */
    #ctx;
    #turn;

   

    constructor() {
        if (Game.#instance) {
            return Game.#instance;
        }
        Game.#instance = this;
        this.#board = new Tablero();
        this.#turn = true;

     
    }

    static getInstance() {
        return Game.#instance;
    }

    /*redibuja los componentes del juego (fichas,tablero,casilleros). Se redibuja cada vez que hay cambios(movimientos de fichas, casillero completo,...) */
    redraw(context){
       
      
        this.#board.drawBoard(context);
        this.#board.drawAllBoxes(context)
        this.#drawAllchips(context)
      
       
    }

  
    /*habria que precargar una imagen para que el fondo del juego sea una imagen, como en la clase ficha */
    getComponent() {
        const canvas = document.createElement("canvas");
        canvas.id = 'gameCanvas';
        canvas.style.backgroundColor='green';

        return canvas;
    }

    /*metodo para dibujar los componentes del juego en la primera ejecucion.*/
    /*dibuja tablero,casilleros, fichas ..... */
    createComponents() {
        const canvas = document.getElementById("gameCanvas");
        this.#ctx = canvas.getContext("2d");

        this.#board.drawBoard(this.#ctx);
        this.#board.drawAllBoxes(this.#ctx)
 
        this.#createchips();
        
        this.#drawAllchips(this.#ctx); 
      
        
    }

    /*manda a cargar configuraciones del juego y escuchar eventos del mouse/usuario*/
    loadConfig() {
        Config.adjustCanvasResolution();
        this.#handleAllEvents();
    }

    /*crea los objetos de Ficha. Multiplica cantidad de filas por columnas del juego y los divide por la cantidad de jugadores (batman vs joker).*/
    /*tiene en cuenta los costados del canvas para crear/renderizar inicialmente las fichas. */
    #createchips() {
        const canvas = document.getElementById("gameCanvas");
        const qchips = (Config.typeGame.quantityColumnsInBoard * Config.typeGame.quantityRowsInBoard) / Config.typeGame.quantityPlayers;
        const paddingXRespectCanvas=80;
        const paddingYRespectCanvas=50;
        const typeChip1=Config.typeGame.typeOfChipsPlayer1;
        const typeChip2=Config.typeGame.typeOfChipsPlayer2;
        let acc =0;

        for (let index = 0; index < qchips; index++) {
            this.#chips.push(new Ficha(  canvas.offsetLeft+paddingXRespectCanvas  , (canvas.offsetTop + canvas.offsetHeight)-paddingYRespectCanvas-acc,true,typeChip1));
            acc=acc+10;
        }

        acc=0;

        for (let index = 0; index < qchips; index++) {
            this.#chips.push(new Ficha(  (canvas.offsetLeft + canvas.offsetWidth)-paddingXRespectCanvas ,  (canvas.offsetTop + canvas.offsetHeight)-paddingYRespectCanvas-acc,false,typeChip2));
            acc=acc+10;
        }
      
    }

    removeChip(chip) {
        let pos = this.#chips.indexOf(chip);
        this.#chips.splice(pos,1);
    }

    /*dibuja todas las fichas disponibles para lanzar*/
    #drawAllchips(context) {
        this.#chips.forEach(f => {
            f.drawCircle(context);
        });
    }

    drawPlaceholderChip(chip) {
        chip.drawCircle(this.#ctx);
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
            //console.log(e);
            
            e.preventDefault();
            const rect = canvas.getBoundingClientRect();
            const mouseX = e.clientX - rect.left;
            const mouseY = e.clientY - rect.top;
            this.#selectedchip=null;
          
            let isClicked=false;
           /*se itera de atras hacia delante porque la ultima ficha seria la ultima renderizada,osea la ultima que se dibujo en el canvas y mas arriba de todas está */
            for (let i = this.#chips.length - 1; !isClicked && i >= 0; i--) {    
                
                const f = this.#chips[i];
                const distanceFromCenter = Math.sqrt(             /*calcula la distancia entre el punto de clic del mouse (mouseX, mouseY) y el centro de una ficha (f.getX(), f.getY()).  */
                    Math.pow(mouseX - f.getX(), 2) + Math.pow(mouseY - f.getY(), 2) /*mat.pow eleva al cuadrado las diferencias anteriores para quitar coordenadas negativas */
                );
    
                if (distanceFromCenter <= f.getRadius()) {     /*si esta en el radio de la ficha, la marca como "agarrada/seleccionada" */
                    this.#selectedchip = f; 
                    isClicked=true;
                   
                }
            }
    
            if (this.#selectedchip) {
                this.#selectedchip.handleMouseDown(e, canvas); 
            }

        });
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


    
    ///*//////////////////////////////////////////////////////////metodos de reorden/eliminacion/////////////////////////////////////////////////////////////////////

    /*le llega por parametro la ficha clickeada y la agrega al final del arreglo de fichas para renderizarla ultima al dibujarla(mas recientemente). Parametro: ficha arrastrada/clikeada */
    reorderchips(c) {
        const index = this.#chips.indexOf(c);
        if (index !== -1) {
            this.#chips.splice(index, 1); // remueve la ficha del arreglo
            this.#chips.push(c); // la agrega al final
        }
    }

    /*actualiza las fichas que estan disponibles para jugar . Parametro: ficha que se dropea en el tablero */
    updateChipsAvailable(chip){
        this.#chips = this.#chips.filter(c => c !== chip);
    }


}