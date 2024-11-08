class Casillero{
    static images=[];
    #x;
    #y;
    #row;
    #column;
    #state;     /*toma valores 0,1,2 --> influye el orden en el que se cargan las imagenes */

    #chip;
    #borderRadius;
    
    
    constructor(prop){
        this.#x=prop.initX;
        this.#y=prop.initY,
        this.#row=prop.row;
        this.#column=prop.col;
        this.#borderRadius=[...prop.borderRadius];
        this.#state = 0
        this.#chip=null;
    }

    drawBox(ctx){
        const centerX = this.#x + Config.boxSize.width/ 2;
        const centerY = this.#y + Config.boxSize.height/ 2;
        const radius = Config.chipSize.radius;

        this.#drawRectangleRounded(ctx,this.#x,this.#y,Config.boxSize.width,Config.boxSize.height,Config.boxSize.height);
        ctx.save();
        ctx.clip();

        ctx.drawImage(Casillero.images[this.getState()], this.#x, this.#y, Config.boxSize.width, Config.boxSize.height)
        
        ctx.strokeStyle='black';
        ctx.lineWidth = 3; 
        ctx.stroke();

        ctx.globalCompositeOperation = "xor"
        ctx.beginPath();
        ctx.arc(centerX, centerY, radius, 0, Math.PI * 2);
        ctx.closePath();
        ctx.clip(); 

        ctx.fill();
        

        ctx.restore();
    }

    setState(num) {
        this.#state = num;
    }

    getState(){
        return this.#state;
    }
    
    drawChip(ctx) {
        if (!this.#chip.isFalling()) {
            this.#chip.drawCircle(ctx);
        }
    }

    isEmpty(){
        return this.#chip === null;
    }

    getRow(){
        return this.#row;
    }

    getColumn(){
        return this.#column;
    }

    getX() {
        return this.#x;
    }

    getY() {
        return this.#y;
    }

    getChip(){
        return this.#chip;
    }

    getImageChip(){
        if(this.#chip.getPlayer() == Config.players.type1){           /*si se mandan a crear fichas de batman, busco  si son de tipo 0 o 1 en el arreglo de imagenes */
            return Casillero.images.chipImgs[Config.typeGame.typeOfChipsPlayer1];
        }else{
            return Casillero.images.chipImgs[Config.imgPlayerType1.length+Config.typeGame.typeOfChipsPlayer2];/*si se mandan a crear fichas de joker, busco  si son de tipo 0 o 1 a partir de donde terminan las de batman*/
        }
    }
    
    /*guarda la ficha en el casillero. Marca el casillero como completo*/
    assignChip(chip,ctx){
        this.setChip(chip);
        this.drawBox(ctx);
    }

    setChip(chip){
        this.#chip=chip;
    }
 
    #drawRectangleRounded(ctx, x, y, width, height, r) {
        const radius=r-70
        ctx.beginPath();

        // Punto de inicio en la esquina superior izquierda
        ctx.moveTo(x + (this.#borderRadius[0] ? radius : 0), y);
    
        // Línea superior hasta la esquina superior derecha
        ctx.lineTo(x + width - (this.#borderRadius[1] ? radius : 0), y);
        if (this.#borderRadius[1]) {
            // Esquina superior derecha, aplicando radio en la línea derecha
            ctx.quadraticCurveTo(x + width, y, x + width, y + radius);
        }
    
        // Línea derecha hasta la esquina inferior derecha
        ctx.lineTo(x + width, y + height - (this.#borderRadius[2] ? radius : 0));
        if (this.#borderRadius[2]) {
            // Esquina inferior derecha, aplicando radio en la línea inferior
            ctx.quadraticCurveTo(x + width, y + height, x + width - radius, y + height);
        }
    
        // Línea inferior hasta la esquina inferior izquierda
        ctx.lineTo(x + (this.#borderRadius[3] ? radius : 0), y + height);
        if (this.#borderRadius[3]) {
            // Esquina inferior izquierda, aplicando radio en la línea izquierda
            ctx.quadraticCurveTo(x, y + height, x, y + height - radius);
        }
    
        // Línea izquierda hasta la esquina superior izquierda
        ctx.lineTo(x, y + (this.#borderRadius[0] ? radius : 0));
        if (this.#borderRadius[0]) {
            // Esquina superior izquierda, aplicando radio en la línea superior
            ctx.quadraticCurveTo(x, y, x + radius, y);
        }
    
        ctx.closePath();
    
    }



}