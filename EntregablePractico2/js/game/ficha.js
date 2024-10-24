class Ficha {
    static images =[];
    #x;     /*posicion de la ficha en x en relacion al canvas ----> se actualiza cada vez que se arrastra una ficha*/
    #y;        /*posicion de la ficha en y en relacion al canvas--------> se actualiza cada vez que se arrastra una ficha*/
    #startX; /*posicion del mouse en x relativa al canvas* */
    #startY; /*posicion del mouse en y relativa al canvas* */
    #initX; 
    #initY;/*junto con initX sirven para saber en que coordenadas se renderizo la ficha (util para volver la ficha a su lugar) */
    #isDragging;
    #player;    /*toma valores:  'batman' o 'joker' . al constructor se le pasa true para batman y false para joker. Se puede agregar a clase Config*/
    #type;      /*toma valores: 0 o 1 para controlar la imagen/tematica de ficha. */
    #transparent;

    constructor(x,y,player,type) {
        this.#x = x;
        this.#y = y;
        this.#initX=x;
        this.#initY=y;
        this.#isDragging=false;
        this.#player = player ? Config.players.type1 : Config.players.type2;
        this.#type = type; 
        this.#transparent;
    }


    drawCircle(ctx) {
        ctx.save(); 
        // dibujar un camino circular para el clipping
        ctx.beginPath();
        ctx.arc(this.#x, this.#y, Config.chipSize.radius, 0, Math.PI * 2);
        ctx.closePath();
        ctx.clip(); // recorta a la forma circular

        // dibuja la imagen dentro del área recortada
        const diameter = Config.chipSize.radius * 2;

        const filterImg= ()=>{
            if(this.#player == Config.players.type1){           /*si se mandan a crear fichas de batman, busco  si son de tipo 0 o 1 en el arreglo de imagenes */
                return Ficha.images[parseInt(this.#type)];
            }else{
                return Ficha.images[Config.imgPlayerType1.length+parseInt(this.#type)];/*si se mandan a crear fichas de joker, busco  si son de tipo 0 o 1 a partir de donde terminan las de batman*/
            }
        }
        if (this.#transparent) {
            ctx.globalAlpha = 0.4;
        }
        ctx.drawImage(filterImg(), this.#x - Config.chipSize.radius, this.#y - Config.chipSize.radius, diameter, diameter);

        ctx.restore(); 
    }

    setTransparent() {
        this.#transparent = true;
    }

    redrawChip(canvas,context) {

        // actualiza las coordenadas
        this.#x = this.#initX;
        this.#y = this.#initY;
        
        context.clearRect(0, 0, canvas.width, canvas.height);

        context.save(); // guarda el contexto antes de dibujar
        this.drawCircle(context);
        context.restore(); // restaura el contexto

        // redibuja todas las otras fichas
        Game.getInstance().redraw(context);
    }

    getX(){
        return this.#x;
    }
    getY(){
        return this.#y;
    }
    getRadius(){
        return Config.chipSize.radius;
    }
    getPlayer(){
        return this.#player;
    }

    setPosition(newX,newY){
        this.#x=newX;
        this.#y=newY;
    }

    

    //Parametros: el evento y el objeto de canvas. Detecta si el click esta dentro del radio de la ficha. */
    /*si esta en el radio, la marca como arrastrada --> isDragging .*/
    /*actualiza la posicion de la ficha con las coordenadas del mouse */
    /*le pide a la clase game que reordene, las fichas para que esta quede por encima de todas */
    handleMouseDown(e,canvas){
        const rect = canvas.getBoundingClientRect(); // obtiene la posición del canvas
        this.#startX = parseInt(e.clientX - rect.left); // calcula la posición X relativa al canvas
        this.#startY = parseInt(e.clientY - rect.top); // calcula la posición Y relativa al canvas
     
        const distanceFromCenter = Math.sqrt(
            Math.pow(this.#startX - this.#x, 2) + Math.pow(this.#startY - this.#y, 2)
        );
        
        if(distanceFromCenter <= Config.chipSize.radius){
          
            this.#isDragging=true;                                              /*cuando se detecta un click en la ficha se empieza a draggear* */

            this.setPosition(this.#startX,this.#startY);

            const gameInstance = Game.getInstance();        
            gameInstance.reorderchips(this);                /*cuando se hace click en una ficha, se le pide al padre que a esa ficha la renderize ultima (mas recientemente). */ 
        }
    }

    /*cuando se suelta la ficha marca la ficha como no-arrastrada */
    handleMouseUp(e){
        if(!this.#isDragging){
            return;
        }
        e.preventDefault();
        this.#isDragging=false;
    }

    /*cuando el mouse sale del canvas marca la ficha como no-arrastrada */
    handleMouseOut(e){
        if(!this.#isDragging){
            return;
        }
        e.preventDefault();
        this.#isDragging=false;
    }

    //al clikear la ficha y mover el mouse(arrastrar) se va actualizando la nueva posicion de la ficha acorde a las posiciones que va tomando el mouse/puntero.
    //si la nueva posicion que pretende tomar la ficha esta fuera del canvas, lo deja en la ultima coordenada (x,y) dentro del canvas.
    //cada vez que esta ficha cambia de posicion, borra el canvas y redibuja todas las fichas incluida esta.
    //establece como nueva posicion de inicio (startX,startY) la ultima posicion del mouse/puntero.
    handleMouseMove(e,context,canvas){
        if(!this.#isDragging){
            return;
        }else{
            e.preventDefault();
            const rect = canvas.getBoundingClientRect(); // Obtiene la posición del canvas
            let mouseX = parseInt(e.clientX - rect.left); // Calcula la posición X relativa al canvas
            let mouseY = parseInt(e.clientY - rect.top); // Calcula la posición Y relativa al canvas
        
            let dx=mouseX - this.#startX;
            let dy=mouseY - this.#startY;

            let newX = this.#x + dx;
            let newY = this.#y + dy;
        
        
            const radius = Config.chipSize.radius
           
            if (newX - radius < 0) {                                                /*verificaciones para que la ficha choque contra el borde del canvas */
                newX = radius;  // mantiene dentro del borde izquierdo
            } else if (newX + radius> canvas.width) {
                newX = canvas.width - radius;  // mantiene dentro del borde derecho
            }
        
            if (newY - radius < 0) {
                newY = radius;  // mantiene dentro del borde superior
            } else if (newY + radius > canvas.height) {
                newY = canvas.height - radius;  // mantiene dentro del borde inferior
            }

          
            this.setPosition(newX,newY);
            
             
            context.clearRect(0, 0, canvas.width, canvas.height);

            context.save(); // guarda el contexto antes de dibujar
            let tablero = Tablero.getInstance();
            if (tablero.isInDropZone(newX, newY)) {
                let x = Math.trunc((e.offsetX-tablero.getStartX())/(Config.boxSize.width))*Config.boxSize.width + Config.boxSize.width/2 + tablero.getStartX();
                let y = tablero.getStartY() - Config.boxSize.height/2;
                let ficha = new Ficha(x, y, this.#player == Config.players.type1 ,this.#type);
                ficha.setTransparent();
                ficha.drawCircle(context);
            }
            this.drawCircle(context);
            context.restore(); // restaura el contexto

            // redibuja todas las otras fichas
            Game.getInstance().redraw(context);
          
        
            this.#startX=mouseX;
            this.#startY=mouseY;
            
        }
        
    }
    
 
  
}
  
    





 

