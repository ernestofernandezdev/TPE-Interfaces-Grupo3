class Config{

    static imgPlayerType1=[
        './static/assets/game/ficha-batman1.png',       /*importante que se carguen primero las de batman y luego las de joker--> Funcion drawCircle */
        './static/assets/game/ficha-batman2.png'
    ]
    static imgPlayerType2= [
        './static/assets/game/ficha-joker1.png',
        './static/assets/game/ficha-joker2.png',
    ];

    static typeGame={
        quantityRowsInBoard:6,
        quantityColumnsInBoard:7,
        quantityChipsAlignToWin:4,
        timeInSeg:900,
        quantityPlayers:2,
        quantityRounds:5,
    
    }

    static players={
        type1:'batman',
        type2:'joker'
    }

    static chipSize={
        radius:30,
    }

    static boxSize={
        width:((Config.chipSize.radius*2) + 30),            /*tamaño de los casilleros= al tamaño perimetral de las fichas(60) + margenes de 15*2 */
        height:((Config.chipSize.radius*2) + 30)  
    }

    static boardSize={
        width:Config.boxSize.width * Config.typeGame.quantityColumnsInBoard,          /*serian 7 fichas(columns) de 60 + 30 en margenes : 90*7 = 630 */
        height:Config.boxSize.height * Config.typeGame.quantityRowsInBoard             /*serian 6 fichas(rows) de 60 + 30 en margenes: 90*6 = 540 */
    }

    /*se activa para cargar las imagenes de las fichas antes de dibujar los circulos */
    static loadChipsImgs() {
        return new Promise((resolve) => {
            let loadedCount = 0;
            let imagePaths = [...Config.imgPlayerType1, ...Config.imgPlayerType2];
            
            imagePaths.forEach((path, index) => {
                const img = new Image();
                img.src = path;

                img.onload = () => {
                    Ficha.images[index] = img;
                    Casillero.images[0].chipImgs.push(img);
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