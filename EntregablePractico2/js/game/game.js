class Game {
    static #instance;
    #files = [];
    #selectedFile=null;

    constructor() {
        if (Game.#instance) {
            return Game.#instance;
        }
        Game.#instance = this;
        
       
    }

    static getInstance() {
        return Game.#instance;
    }

    getFiles() {
        return this.#files;
    }

    getComponent() {
        const canvas = document.createElement("canvas");
        canvas.id = 'gameCanvas';
        canvas.style.backgroundColor = "green";
      
        return canvas;
    }

    createComponents() {
        this.#createFiles();

        Ficha.loadImages().then(() => {
            this.#drawAllFiles(); 
        });
    }

    loadConfig() {
        Config.adjustCanvasResolution();
        this.#handleAllEvents();
    }

    #handleAllEvents() {
        this.#handleFilesMouseDown();
        this.#handleMouseUp();
        this.#handleMouseOut();
        this.#handleMouseMove();
    }

 
    #handleFilesMouseDown() {
        const canvas = document.getElementById("gameCanvas");

        canvas.addEventListener("mousedown", (e) => {
            console.log(e);
            
            e.preventDefault();
            const rect = canvas.getBoundingClientRect();
            const mouseX = e.clientX - rect.left;
            const mouseY = e.clientY - rect.top;
            this.#selectedFile=null;
          
            let isClicked=false;
           /*se itera de atras hacia delante porque la ultima ficha seria la ultima renderizada,osea la ultima que se dibujo en el canvas y mas arriba de todas está */
            for (let i = this.#files.length - 1; !isClicked && i >= 0; i--) {    
                
                const f = this.#files[i];
                const distanceFromCenter = Math.sqrt(             /*calcula la distancia entre el punto de clic del mouse (mouseX, mouseY) y el centro de una ficha (f.getX(), f.getY()).  */
                    Math.pow(mouseX - f.getX(), 2) + Math.pow(mouseY - f.getY(), 2) /*mat.pow eleva al cuadrado las diferencias anteriores para quitar coordenadas negativas */
                );
    
                if (distanceFromCenter <= f.getRadius()) {     /*si esta en el radio de la ficha, la marca como "agarrada/seleccionada" */
                    this.#selectedFile = f; 
                    isClicked=true;
                   
                }
            }
    
            if (this.#selectedFile) {
                this.#selectedFile.handleMouseDown(e, canvas); 
            }

        });
    }

    #handleMouseUp() {
        const canvas = document.getElementById("gameCanvas");
        canvas.addEventListener("mouseup", (e) => {
            this.#files.forEach((file) => {
                file.handleMouseUp(e);
            });
        });
    }

    #handleMouseMove() {
        const canvas = document.getElementById("gameCanvas");
        let context = canvas.getContext("2d");
        canvas.addEventListener("mousemove", (e) => {
            this.#files.forEach((file) => {
                file.handleMouseMove(e, context, canvas);
            });
        });
    }

    #handleMouseOut() {
        const canvas = document.getElementById("gameCanvas");
        canvas.addEventListener("mouseout", (e) => {
            this.#files.forEach((file) => {
                file.handleMouseOut(e);
            });
        });
    }


    
    #createFiles() {
        const canvas = document.getElementById("gameCanvas");
        const qFiles = 21;
        let acc =0;

        for (let index = 0; index < qFiles; index++) {
            this.#files.push(new Ficha(  canvas.offsetLeft+80  , (canvas.offsetTop + canvas.offsetHeight)-50-acc,true,0  ));
            acc=acc+10;
        }

        acc=0;

        for (let index = 0; index < qFiles; index++) {
            this.#files.push(new Ficha(  (canvas.offsetLeft + canvas.offsetWidth)-80 ,  (canvas.offsetTop + canvas.offsetHeight)-50-acc,false,0  ));
            acc=acc+10;
        }
      
    }

    reorderFiles(f) {
        const index = this.#files.indexOf(f);
        if (index !== -1) {
            this.#files.splice(index, 1); // remueve la ficha del arreglo
            this.#files.push(f); // la agrega al final
        }
    }

    #drawAllFiles() {
        const canvas = document.getElementById("gameCanvas");
        const ctx = canvas.getContext('2d');

        ctx.clearRect(0, 0, canvas.width, canvas.height); // limpiar el canvas antes de dibujar
        this.#files.forEach(f => {
            f.drawCircle(ctx);
        });
    }



}