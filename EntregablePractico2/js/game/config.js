class Config{

    static typeGame={
        rowsBoard:6,
        columnsBoard:7,
        fileAlign:4,
        timeInSeg:900
    }

    static fileSize={
        radius:30,
    }

    static boardSize={
        width:((Config.fileSize.radius*2) + 30) * Config.typeGame.columnsBoard,          /*serian 7 fichas(columns) de 60 + 30 en margenes : 90*7 = 630 */
        height:((Config.fileSize.radius*2) + 30) * Config.typeGame.rowsBoard             /*serian 6 fichas(rows) de 60 + 30 en margenes: 90*6 = 540 */
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