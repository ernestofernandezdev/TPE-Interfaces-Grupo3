class Config{

    static imgPlayerType1=[
        './static/assets/game/ficha-batman1.png',       /*importante que se carguen primero las de batman y luego las de joker--> Funcion drawCircle */
        './static/assets/game/ficha-batman2.png'
    ]
    static imgPlayerType2= [
        './static/assets/game/ficha-joker1.png',
        './static/assets/game/ficha-joker2.png',
    ];

    static boxesImagesPaths= [
        './static/assets/game/boxEmpty.png',
        './static/assets/game/boxWin.png',
        './static/assets/game/boxDraw.png',
    ]

    static imgsWins=[
        './static/assets/game/batmanWin.png',
        './static/assets/game/jokerWin.png',
        './static/assets/game/draw.png'
    ]

    static menuImg='./static/assets/game/menu-default.png';

    static typeGame={
        quantityRowsInBoard:6,
        quantityColumnsInBoard:7,
        quantityChipsAlignToWin:4,
        timeInMin:1,
        quantityPlayers:2,
        typeOfChipsPlayer1:0,
        typeOfChipsPlayer2:0
    
    }

    static players={
        type1:'batman',
        type2:'joker'
    }
    
    static listPlayerTypes=Object.values(Config.players);

    static chipSize={
        radius:30,
    }

    static boxSize={
        width:((Config.chipSize.radius*2) + 30),            /*tamaño de los casilleros= al tamaño perimetral de las fichas(60) + margenes de 15*2 */
        height:((Config.chipSize.radius*2) + 30),
    }

    static dispenserColor={
        default:`rgba(0, 0, 0, 0.6)`,
        border:`rgba(0, 0, 255, 0.6)`,
    }

    static boardSize={
        width:Config.boxSize.width * Config.typeGame.quantityColumnsInBoard,          /*serian 7 fichas(columns) de 60 + 30 en margenes : 90*7 = 630 */
        height:Config.boxSize.height * Config.typeGame.quantityRowsInBoard             /*serian 6 fichas(rows) de 60 + 30 en margenes: 90*6 = 540 */
    }

    static sizeButtons={
        width:100,
        height:40
    }

    
    static loadImages() {
        return Promise.all([
            Config.loadChipsImages(),
            Config.loadWinImgs(),
            Config.loadImgMenu(),
            Config.loadBoxesImages()
        ]);
    }

    static loadBoxesImages() {

        return new Promise((resolve) => {
            let loadedCount = 0;
            let imagePaths = Config.boxesImagesPaths;
            
            imagePaths.forEach((path, index) => {
                const img = new Image(90,90);
                img.src = path;

                img.onload = () => {
                    Casillero.images[index]= img;
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

    static loadChipsImages(){
        return new Promise((resolve) => {
            let loadedCount = 0;
            let imagePaths = [...Config.imgPlayerType1, ...Config.imgPlayerType2];
            
            imagePaths.forEach((path, index) => {
                const img = new Image();
                img.src = path;

                img.onload = () => {
                    Ficha.images[index] = img;
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

    static loadWinImgs(){
        return new Promise((resolve)=>{
            this.imgsWins.forEach((path,index)=>{
                const img = new Image();
                img.src=path;

                img.onload=()=>{
                    if(index===0){
                        Game.images={
                            batman:img
                        }
                    }else if(index==1){
                        Game.images={...Game.images, joker:img}
                    }else{
                        Game.images={...Game.images, draw:img}
                        resolve();
                    }
                }

                img.onerror = () => {
                    console.error(`Error al cargar imagenes ganadoras.`);
                };
            })
        })
    }

    static loadImgMenu(){
        return new Promise((resolve)=>{
            const img = new Image();
            img.src=Config.menuImg;

            img.onload=()=>{
                Game.images={...Game.images, menu:img};
                resolve();
            }

            img.onerror = () => {
                console.error(`Error al cargar imagenes de menu.`);
            };
        })
    }


    static adjustCanvasResolution() {
        const canvas = document.getElementById("gameCanvas");
        const ctx = canvas.getContext('2d');
        const dpr = window.devicePixelRatio || 1;
        const rect = canvas.getBoundingClientRect();

        canvas.width = rect.width * dpr;
        canvas.height = rect.height * dpr;
        ctx.scale(dpr, dpr);
    }

    
}