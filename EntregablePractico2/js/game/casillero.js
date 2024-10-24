class Casillero{
    static images={
        chipImgs:[]
    };
    #x;
    #y;
    #isEmpty;
    #chip;
    #row;
    #column;


    constructor(x,y,row,column){
        this.#x=x;
        this.#y=y;
        this.#isEmpty=true;
        this.#chip=null;
        this.#row=row;
        this.#column=column;
    }

    isEmpty(){
        return this.#isEmpty;
    }

    getRow(){
        return this.#row;
    }

    getColumn(){
        return this.#column;
    }


    /*guarda la ficha en el casillero. Marca el casillero como completo*/
    assignChip(chip,ctx){
        this.#chip=chip;
        this.#isEmpty=false;
        this.drawBox(ctx);
    }

    drawBox(ctx){
        const centerX = this.#x + Config.boxSize.width/ 2;
        const centerY = this.#y + Config.boxSize.width/ 2;
        const radius = Config.chipSize.radius;
        ctx.fillStyle='blue';
        ctx.fillRect(this.#x,this.#y,Config.boxSize.width,Config.boxSize.height);


        ctx.save()
        ctx.beginPath();
        ctx.arc(centerX, centerY, radius, 0, Math.PI * 2);
        ctx.closePath();
        ctx.clip(); 

        if(this.isEmpty()){
            ctx.fillStyle='white';
            ctx.fill();
        }else{
           ctx.drawImage(this.getImageChip(), centerX-radius ,centerY-radius, radius*2, radius*2);
        }
        
        ctx.restore();
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
}