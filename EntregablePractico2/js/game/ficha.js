class Ficha {
    #x;     /*posicion de la ficha en x en relacion al canvas ----> se actualiza cada vez que se arrastra una ficha*/
    #y;        /*posicion de la ficha en y en relacion al canvas--------> se actualiza cada vez que se arrastra una ficha*/
    #startX; /*posicion del mouse en x relativa al canvas* */
    #startY; /*posicion del mouse en y relativa al canvas* */
    #isDragging;
    static #images =[];
    static #imagePathsBatman=[
        './static/assets/game/ficha-batman1.png',
        './static/assets/game/ficha-batman2.png'
    ]
    static #imagePathsJoker = [
        './static/assets/game/ficha-joker1.png',
        './static/assets/game/ficha-joker2.png',
    ];
    #player;    /*los jugadores son batman y joker y al constructor se le pasa true para batman y false para joker*/
    #type;      /*el tipo de ficha es 1 o 2 */

    constructor(x,y,player,type) {
        this.#x = x;
        this.#y = y;
        this.#isDragging=false;
        this.#player = player ? 'batman' : 'joker';
        this.#type = type; 
        
    }

    static loadImages() {
        return new Promise((resolve) => {
            let loadedCount = 0;
            let imagePaths = [...Ficha.#imagePathsBatman, ...Ficha.#imagePathsJoker];
            
            imagePaths.forEach((path, index) => {
                const img = new Image();
                img.src = path;

                img.onload = () => {
                    Ficha.#images[index] = img; 
                    loadedCount++;

                    if (loadedCount === imagePaths.length) {
                        resolve();
                    }
                };

                img.onerror = () => {
                    console.error(`Error loading image at ${path}`);
                };
            });
        });
    }

    drawCircle(ctx) {
        ctx.save(); 
        // dibujar un camino circular para el clipping
        ctx.beginPath();
        ctx.arc(this.#x, this.#y, Config.fileSize.radius, 0, Math.PI * 2);
        ctx.closePath();
        ctx.clip(); // recorta a la forma circular

        // dibuja la imagen dentro del área recortada
        const diameter = Config.fileSize.radius * 2;

        const filterImg= ()=>{
            if(this.#player == 'batman'){           /*si se mandan a crear fichas de batman, busco  si son de tipo 0 o 1 en el arreglo de imagenes */
                return Ficha.#images[parseInt(this.#type)];
            }else{
                return Ficha.#images[Ficha.#imagePathsBatman.length+parseInt(this.#type)];/*si se mandan a crear fichas de joker, busco  si son de tipo 0 o 1 a partir de donde terminan las de batman*/
            }
        }
     
        ctx.drawImage(filterImg(), this.#x - Config.fileSize.radius, this.#y - Config.fileSize.radius, diameter, diameter);

        ctx.restore(); 
    }

    getX(){
        return this.#x;
    }
    getY(){
        return this.#y;
    }
    getRadius(){
        return Config.fileSize.radius;
    }
    getPlayer(){
        return this.#player;
    }

    handleMouseDown(e,canvas){
        console.log(e);
        
        const rect = canvas.getBoundingClientRect(); // obtiene la posición del canvas
        this.#startX = parseInt(e.clientX - rect.left); // calcula la posición X relativa al canvas
        this.#startY = parseInt(e.clientY - rect.top); // calcula la posición Y relativa al canvas
     
        const distanceFromCenter = Math.sqrt(
            Math.pow(this.#startX - this.#x, 2) + Math.pow(this.#startY - this.#y, 2)
        );
        
        if(distanceFromCenter <= Config.fileSize.radius){
            console.log("se clickea en ficha");
            this.#isDragging=true;                                              /*cuando se detecta un click en la ficha se empieza a draggear* */

            this.#x = this.#startX;
            this.#y = this.#startY;

            const gameInstance = Game.getInstance();        
            gameInstance.reorderFiles(this);                /*cuando se hace click en una ficha, se le pide al padre que a esa ficha la ponga primera en el renderizado para que al arrastrarla pase por encima de todas las otras renderizadas */
            
        }else{
            console.log("se clickea fuera de ficha");
            
        }
    }

    handleMouseUp(e){
        //console.log("se dropeo");
     
        if(!this.#isDragging){
            return;
        }
        e.preventDefault();
        this.#isDragging=false;
    }

    handleMouseOut(e){
        //console.log("se sale");
        
        if(!this.#isDragging){
            return;
        }
        e.preventDefault();
        this.#isDragging=false;
    }

   
    //al mover el mouse (con la ficha clickeada arrastrando) se va obteniendo la posicion del mouse/puntero
    //se va modificando la posicion de la ficha acorde a las posiciones que va tomando el mouse/puntero
    //si la nueva posicion que pretende tomar la ficha esta fuera del canvas, lo deja en la ultima coordenada (x,y) dentro del canvas
    //borra el canvas y redibuja todas las fichas y esta ficha, cada vez que esta ficha cambia de posicion
    //establece como nueva posicion de inicio (startX,startY) la ultima posicion del mouse/puntero
    handleMouseMove(e,context,canvas){
        //console.log("se mueve");
        
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
        
        
            const radius = Config.fileSize.radius
           
            if (newX - radius < 0) {
                newX = radius;  // mantiene dentro del borde izquierdo
            } else if (newX + radius> canvas.width) {
                newX = canvas.width - radius;  // mantiene dentro del borde derecho
            }
        
            if (newY - radius < 0) {
                newY = radius;  // mantiene dentro del borde superior
            } else if (newY + radius > canvas.height) {
                newY = canvas.height - radius;  // mantiene dentro del borde inferior
            }

            // actualiza las coordenadas
            this.#x = newX;
            this.#y = newY;
            
             
            context.clearRect(0, 0, canvas.width, canvas.height);

            context.save(); // guarda el contexto antes de dibujar
            this.drawCircle(context);
            context.restore(); // restaura el contexto

            // redibuja todas las otras fichas
            Game.getInstance().redraw(context);
          
        
            this.#startX=mouseX;
            this.#startY=mouseY;
            
        }
        
    }
    
 


    
   
   
      
}
  
    





 

