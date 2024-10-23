class Casillero{
    static images=[
        {
            chipImgs:[]
        }
    
    ];
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
    assignChip(chip){
        this.#chip=chip;
        console.log("se asigno ficha");
        
        this.#isEmpty=false;
    }

    drawBox(ctx){
        //ctx.fillStyle='blue';
        //ctx.fillRect(this.#x,this.#y,Config.boxSize.width,Config.boxSize.width);
        
        const centerX = this.#x + Config.boxSize.width / 2;
        const centerY = this.#y + Config.boxSize.height / 2;
        const radius = Config.chipSize.radius;
        //ctx.clearRect(centerX - radius, centerY - radius, radius * 2, radius * 2);
        
        ctx.save()
        ctx.fillStyle = 'red'; 
        ctx.beginPath();
        ctx.arc(centerX, centerY, radius, 0, Math.PI * 2);
        ctx.fill(); // Rellena el círculo
        //ctx.drawImage(filterImg(), this.#x - Config.chipSize.radius, this.#y - Config.chipSize.radius, diameter, diameter);
        ctx.restore();
    }

    getChip(){
        return this.#chip;
    }
}