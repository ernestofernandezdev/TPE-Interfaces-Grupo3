(function(){

    window.addEventListener("DOMContentLoaded", ()=>{
        showContent("inicio",player);
        
    });
    
    function showContent(section,user=null,sectionActive=null) {
        const root= document.querySelector("#root");
        root.innerHTML=' ';

        const header = new Header(user,root,sectionActive || section);
        const footer = new Footer();
        root.appendChild(header.getComponent());
        
       
        if(section == "inicio"){
            document.title="Inicio | FlamingGames";
            const spinner = new Spinner();
            const home = new Home(user);
            root.appendChild(spinner.getComponent());

            setTimeout(() => {
                root.innerHTML='';
                root.appendChild(header.getComponent());
                root.appendChild(home.getComponent());
                root.appendChild(footer.getComponent());
    
                header.listenEvents();
                home.listenEvents();
                footer.listenEvents();
            }, 5000);
              
        }else if(section == "game"){
            document.title="Ver juego | FlamingGames";
            const gameEject = new SectionGame(games1[1],user)

            root.appendChild(gameEject.getComponent());

            gameEject.listenEvents();
            header.listenEvents();
           
        }else if(section == "login"){
            let section;
            if(sectionActive == "game"){
                section = new SectionGame(games1[1],user);
            }else{
                section=new Home(user);
            }
      
            const login = new Login(player,sectionActive);    /*aca siempre debe pasarle player que es el simulado que llega de la DB */
            root.appendChild(section.getComponent());
            root.appendChild(login.getComponent());

            header.listenEvents();
            login.listenEvents();
            section.listenEvents();
        }else if(section == "registro"){
            
            let section;
            if(sectionActive == "game"){
                section = new SectionGame(games1[1],user);
            }else{
                section=new Home(user);
            }
           
            const registro = new Registro(player,sectionActive);    /*aca siempre debe pasarle player que es el simulado que llega de la DB */
            root.appendChild(section.getComponent());
            root.appendChild(registro.getComponent());
            
            header.listenEvents();
            registro.listenEvents();
            section.listenEvents();
        
        }else{
            console.log("render error");
        }

        root.appendChild(footer.getComponent());
        footer.listenEvents();  
    }

    const player={
        avatar:`<svg viewBox="0 0 128 128" data-name="Layer 1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" fill="#000000">
        <g id="SVGRepo_bgCarrier" stroke-width="0"/>
        <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"/>
        <g id="SVGRepo_iconCarrier"> <defs> <style>.cls-1{fill:#4bc190;}.cls-2{fill:#356cb6;}.cls-13,.cls-2{opacity:0.3;}.cls-3{fill:#fbc0aa;}.cls-4{fill:#f8dc25;}.cls-5{fill:#f2bc0f;}.cls-6{fill:#ffffff;}.cls-12,.cls-13,.cls-16,.cls-7{fill:none;stroke-linecap:round;stroke-linejoin:round;}.cls-12,.cls-7{stroke:#fbc0aa;}.cls-7{stroke-width:20px;}.cls-8{fill:#ffd8c9;}.cls-14,.cls-19,.cls-9{fill:#515570;}.cls-9{opacity:0.2;}.cls-10,.cls-17{fill:#f85565;}.cls-10{opacity:0.4;}.cls-11{fill:#7f3838;}.cls-12{stroke-width:4px;}.cls-13{stroke:#f85565;}.cls-13,.cls-16{stroke-width:2px;}.cls-14,.cls-20{opacity:0.1;}.cls-15{fill:#393c54;}.cls-16{stroke:#515570;}.cls-18{fill:#ff8475;}</style> </defs> <title/> <circle class="cls-1" cx="64" cy="64" r="60"/> <circle class="cls-2" cx="64" cy="64" r="48"/> <circle class="cls-3" cx="91.32" cy="60.43" r="7.93"/> <path class="cls-4" d="M101.6,103.14c-1.71-4-6.22-6.64-11.29-6.64H88.87C87.57,84.8,76.93,82,64,82S40.43,84.8,39.13,96.5H37.69c-5.07,0-9.58,2.66-11.29,6.64L24,108.82a60,60,0,0,0,80,0Z"/> <path class="cls-5" d="M64,124.1l1,0V112a1,1,0,0,0-2,0v12.08Z"/> <path class="cls-6" d="M76,100a12,12,0,1,0-20.93,8H55l7.51,8.35a2,2,0,0,0,3,0L73,108h0A11.89,11.89,0,0,0,76,100Z"/> <line class="cls-7" x1="64" x2="64" y1="84.75" y2="98.5"/> <circle class="cls-3" cx="36.68" cy="60.43" r="7.93"/> <path class="cls-8" d="M64,96C52.47,96,39.88,86.07,36.4,66.2c-3.27-18.66-1-23.74-1-23.74,0-16.41,57.32-16.41,57.32,0,0,0,1.22,7.16-1,23.74C89.19,84,75.55,96,64,96Z"/> <path class="cls-9" d="M73.17,88.08H54.83c0-1.6-1.08-8.44.17-11.22,2.71-6,9-8.69,9-8.69s6.65,2.53,9.32,8.69C74.41,79.35,73.17,86.62,73.17,88.08Z"/> <path class="cls-10" d="M64,81c5,0,7-3,7-3H57S59,81,64,81Z"/> <path class="cls-11" d="M75,78c-.07-5-6-5.08-11-5.08S53.08,73,53,78h0V94.16a28.48,28.48,0,0,0,22,0V78Zm-5,9H67.78a1,1,0,0,1-1-.76l-.62-2.48a1,1,0,0,0-1-.76H62.78a1,1,0,0,0-1,.76l-.62,2.48a1,1,0,0,1-1,.76H58a2,2,0,0,1-2-2V80.08a2,2,0,0,1,2-2H70a2,2,0,0,1,2,2V85A2,2,0,0,1,70,87Z"/> <line class="cls-12" x1="64" x2="64" y1="59.75" y2="72.25"/> <line class="cls-12" x1="66.5" x2="61.5" y1="71" y2="71"/> <line class="cls-13" x1="66" x2="67" y1="70" y2="70"/> <path class="cls-14" d="M91.61,66.29A9.71,9.71,0,0,0,83,76v9.83A38.42,38.42,0,0,0,91.61,66.29Z"/> <path class="cls-14" d="M36.42,66.31C37.89,74.62,41,81.17,44.88,86V76A9.72,9.72,0,0,0,36.42,66.31Z"/> <path class="cls-15" d="M70.41,56H82.59A2.41,2.41,0,0,1,85,58.41V62a6,6,0,0,1-6,6H74.57A6.57,6.57,0,0,1,68,61.43v-3A2.41,2.41,0,0,1,70.41,56Z"/> <path class="cls-15" d="M49.57,56H54a6,6,0,0,1,6,6v3.56A2.41,2.41,0,0,1,57.59,68H45.41A2.41,2.41,0,0,1,43,65.59v-3A6.57,6.57,0,0,1,49.57,56Z" transform="translate(103 124) rotate(180)"/> <path class="cls-16" d="M70.41,56H82.59A2.41,2.41,0,0,1,85,58.41V62a6,6,0,0,1-6,6H74.57A6.57,6.57,0,0,1,68,61.43v-3A2.41,2.41,0,0,1,70.41,56Z"/> <path class="cls-16" d="M49.57,56H54a6,6,0,0,1,6,6v3.56A2.41,2.41,0,0,1,57.59,68H45.41A2.41,2.41,0,0,1,43,65.59v-3A6.57,6.57,0,0,1,49.57,56Z" transform="translate(103 124) rotate(180)"/> <path class="cls-16" d="M60,62a4,4,0,0,1,8,0"/> <line class="cls-16" x1="85" x2="92.32" y1="58.41" y2="52.5"/> <line class="cls-16" x1="43" x2="35.68" y1="58.41" y2="52.57"/> <rect class="cls-15" height="15" rx="2" width="60" x="34" y="31"/> <polygon class="cls-15" points="76 25.33 51.61 25.33 40.61 32.33 87 32.33 76 25.33"/> <line class="cls-16" x1="34" x2="94" y1="32" y2="32"/> <path class="cls-15" d="M24.22,27H47.79a0,0,0,0,1,0,0v4.71A2.36,2.36,0,0,1,45.42,34H26.58a2.36,2.36,0,0,1-2.36-2.36V27a0,0,0,0,1,0,0Z" transform="translate(-11.02 34.39) rotate(-45)"/> <rect class="cls-17" height="3.54" rx="1.77" transform="translate(-9.81 31.47) rotate(-45)" width="28.28" x="18.94" y="25.82"/> <path class="cls-18" d="M30.77,20.73l-8.94,8.94a2.35,2.35,0,0,0,0,3.33l1.67,1.67L40.17,18l-.41-.41A2.36,2.36,0,0,0,37,17.2l-5.66,3.14A2.53,2.53,0,0,0,30.77,20.73Z"/> <path class="cls-15" d="M82.58,27h18.84a2.36,2.36,0,0,1,2.36,2.36V34a0,0,0,0,1,0,0H80.21a0,0,0,0,1,0,0V29.33A2.36,2.36,0,0,1,82.58,27Z" transform="translate(135.48 117.12) rotate(-135)"/> <rect class="cls-17" height="3.54" rx="1.77" transform="translate(142.53 114.2) rotate(-135)" width="28.28" x="80.77" y="25.82"/> <path class="cls-18" d="M97.23,20.73l8.94,8.94a2.35,2.35,0,0,1,0,3.33l-1.67,1.67L87.83,18l.41-.41a2.36,2.36,0,0,1,2.81-.39l5.66,3.14A2.53,2.53,0,0,1,97.23,20.73Z"/> <polygon class="cls-15" points="71 26 57 26 55 19 73 19 71 26"/> <line class="cls-16" x1="53" x2="75" y1="19" y2="19"/> <path class="cls-19" d="M95.38,51.81l-10-9.24,4.07-4.41,10,9.23a3,3,0,0,1,.18,4.24h0A3,3,0,0,1,95.38,51.81Z"/> <path class="cls-19" d="M32.38,51.81l10-9.24-4.07-4.41-10,9.23a3,3,0,0,0-.17,4.24h0A3,3,0,0,0,32.38,51.81Z"/> <g class="cls-20"> <polyline class="cls-16" points="48 48 59 50 71 49 82 48"/> <polyline class="cls-16" points="47 51 60 54 69 53 82 53"/> <line class="cls-16" x1="56" x2="61" y1="43" y2="58"/> <line class="cls-16" x1="65" x2="64" y1="43" y2="58"/> </g> <path class="cls-5" d="M37.69,96.5a14.18,14.18,0,0,0-3.08.34S36,106,44,110a19.32,19.32,0,0,1-4.87-13.5Z"/> <path class="cls-5" d="M84,110c8-4,9.39-13.16,9.39-13.16a14.18,14.18,0,0,0-3.08-.34H88.87A19.32,19.32,0,0,1,84,110Z"/> </g>
        </svg>`,
        nombre:"juan",
        apellido:"fernandez",
        nick:"juancito28673",
        fecha_nacimiento:"2005-07-10",
        email:"juanfer@gmail.com",
        password:1234
    }

    const games1=[
        {
            id:"1",
            titulo:"battle arena",
            frontImg:'static/assets/battle-arena.png',
            categoria:"accion",
            multimedia:[null,null],
            descipcion:"es un juego sasrasara",
            controles:"con la flecha",
            comentarios:["objetoComentario1"],
            precio:15800.65,
            esPago:true,
            likes:25374
        },
        {
            id:"20",
            titulo:"4 en linea: batman vs. guasón",
            frontImg:'static/assets/4-linea.png',
            categoria:"puzzle",
            multimedia:['static/video/videojuego0.mp4',
                'static/video/videojuego1.mp4',
                'static/video/videojuego2.mp4',
                'static/assets/juego0.png',
                'static/assets/juego1.png',
                'static/assets/juego2.png',
                'static/assets/juego3.png',
                'static/assets/juego4.png',
                'static/assets/juego5.png',
                'static/assets/juego6.png',
            ],
            descipcion:`El juego "4 en línea: Batman vs Guasón" lleva la clásica estrategia a Ciudad Gótica. Los jugadores eligen entre fichas de Batman o el Guasón, tratando de alinear cuatro fichas seguidas antes que su oponente, ya sea en vertical, horizontal o diagonal. Con el trasfondo oscuro de la ciudad y elementos visuales icónicos de ambos personajes, la partida se convierte en una lucha por el control de Gótica.`,
            controles:"Clickear y arrastrar hacia la parte superior del tablero la primera ficha ubicada por encima del slot de fichas. Este movimiento se repite en cada turno.",
            comentarios:[{
                id:1,
                usuario:"juancitoXGamer",
                comentario:"tremendo juego me gusto mucho!!! para jugar de a 2 es super divertido",
                fecha:"10-09-2024",
                likes:2787,
                unlikes:100
            },{
                id:2,
                usuario:"xoxas283791",
                comentario:"es divertido pero le faltan mas personajes",
                fecha:"07-09-2024",
                likes:14985,
                unlikes:24,
            },
            {
                id:3,
                usuario:"panchitoXGamer",
                comentario:"me encantó el juego 4 en línea porque es increíble cómo algo tan sencillo puede volverse tan adictivo. Cada partida es un reto diferente, y siempre me encuentro buscando nuevas formas de anticipar los movimientos del otro jugador. Además, esa sensación de conseguir alinear cuatro fichas después de una batalla mental es súper satisfactoria. Es un juego que no importa cuántas veces lo juegues, siempre te mantiene enganchado y con ganas de más.",
                fecha:"01-09-2024",
                likes:126782,
                unlikes:56734,
            },
            {
                id:4,
                usuario:"juliana129038",
                comentario:"me encanto el juego, super recomendable ♥",
                fecha:"04/08/2024",
                likes:38272,
                unlikes:2
            }
            ],
            precio:null,
            esPago:false,
            likes:9901
        },
        {
            id:"3",
            titulo:"sniper mission",
            frontImg:'static/assets/sniper-mission.png',
            categoria:"disparos",
            multimedia:[null,null],
            descipcion:"es un asjkdha",
            controles:"askdfjlasd",
            comentarios:["obj1","obj2"],
            precio:25000.30,
            esPago:true,
            likes:29834
        },
        {
            id:"2",
            titulo:"bank robbery escape",
            frontImg:'static/assets/robbery.png',
            categoria:"escape",
            multimedia:[null,null],
            descipcion:"es un asjkdha",
            controles:"askdfjlasd",
            comentarios:["obj1","obj2"],
            precio:null,
            esPago:false,
            likes:29837
        },
        {
            id:"4",
            titulo:"downtown 1930s mafia",
            frontImg:'static/assets/downtown.png',
            categoria:"disparos",
            multimedia:[null,null],
            descipcion:"es un asjkdha",
            controles:"askdfjlasd",
            comentarios:["obj1","obj2"],
            precio:null,
            esPago:false,
            likes:18232
        },
        {
            id:"5",
            titulo:"table tennis world tour",
            frontImg:'static/assets/table-tennis.png',
            categoria:"deportes",
            multimedia:[null,null],
            descipcion:"es un asjkdha",
            controles:"askdfjlasd",
            comentarios:["obj1","obj2"],
            precio:null,
            esPago:false,
            likes:28371
        },
        {
            id:"6",
            titulo:"xtreme moto mayhem",
            frontImg:'static/assets/xtreme-moto.png',
            categoria:"motos",
            multimedia:[null,null],
            descipcion:"es un asjkdha",
            controles:"askdfjlasd",
            comentarios:["obj1","obj2"],
            precio:12300.10,
            esPago:true,
            likes:29384
        },
        {
            id:"7",
            titulo:"8 balls billard classic",
            frontImg:'static/assets/8-ball.png',
            categoria:"billar",
            multimedia:[null,null],
            descipcion:"es un asjkdha",
            controles:"askdfjlasd",
            comentarios:["obj1","obj2"],
            precio:null,
            esPago:false,
            likes:12837
        },
        {
            id:"8",
            titulo:"skydom",
            frontImg:'static/assets/skydom.png',
            categoria:"casino",
            multimedia:[null,null],
            descipcion:"es un asjkdha",
            controles:"askdfjlasd",
            comentarios:["obj1","obj2"],
            precio:null,
            esPago:false,
            likes:28371
        },
        {
            id:"9",
            titulo:"bullet force",
            frontImg:'static/assets/bullet-force.png',
            categoria:"disparos",
            multimedia:[null,null],
            descipcion:"es un asjkdha",
            controles:"askdfjlasd",
            comentarios:["obj1","obj2"],
            precio:17080.30,
            esPago:true,
            likes:12387
        },
        {
            id:"10",
            titulo:"sniper mission",
            frontImg:'static/assets/sniper-mission.png',
            categoria:"disparos",
            multimedia:[null,null],
            descipcion:"es un asjkdha",
            controles:"askdfjlasd",
            comentarios:["obj1","obj2"],
            precio:25000.30,
            esPago:true,
            likes:9832
        },
        {
            id:"11",
            titulo:"cube stories escape",
            frontImg:'static/assets/cube-stories-escape.png',
            categoria:"escape",
            multimedia:[null,null],
            descipcion:"es un asjkdha",
            controles:"askdfjlasd",
            comentarios:["obj1","obj2"],
            precio:5000.90,
            esPago:true,
            likes:29832
        },
        {
            id:"12",
            titulo:"elemental merge",
            frontImg:'static/assets/elemental-merge.png',
            categoria:"accion",
            multimedia:[null,null],
            descipcion:"es un asjkdha",
            controles:"askdfjlasd",
            comentarios:["obj1","obj2"],
            precio:null,
            esPago:false,
            likes:1928
        },
        {
            id:"13",
            titulo:"mr racer car racing",
            frontImg:'static/assets/racer.png',
            categoria:"coches",
            multimedia:[null,null],
            descipcion:"es un asjkdha",
            controles:"askdfjlasd",
            comentarios:["obj1","obj2"],
            precio:9750.60,
            esPago:true,
            likes:29387
        },
        {
            id:"14",
            titulo:"bloxd.io",
            frontImg:'static/assets/bloxd.png',
            categoria:".io",
            multimedia:[null,null],
            descipcion:"es un asjkdha",
            controles:"askdfjlasd",
            comentarios:["obj1","obj2"],
            precio:null,
            esPago:false,
            likes:1289
        },
    ]
    const games2=[
        {
            id:"30",
            titulo:"shell shockers",
            frontImg:'static/assets/shell.png',
            categoria:"disparos",
            multimedia:[null,null],
            descipcion:"es un asjkdha",
            controles:"askdfjlasd",
            comentarios:["obj1","obj2"],
            precio:null,
            esPago:false,
            likes:12873
        },
        {
            id:"49",
            titulo:"racing limits",
            frontImg:'static/assets/racing.png',
            categoria:"coches",
            multimedia:[null,null],
            descipcion:"es un asjkdha",
            controles:"askdfjlasd",
            comentarios:["obj1","obj2"],
            precio:null,
            esPago:false,
            likes:19283
        },
        {
            id:"36",
            titulo:"bloc ops",
            frontImg:'static/assets/blocops.png',
            categoria:"disparos",
            multimedia:[null,null],
            descipcion:"es un asjkdha",
            controles:"askdfjlasd",
            comentarios:["obj1","obj2"],
            precio:null,
            esPago:false,
            likes:29873
        },
        {
            id:"47",
            titulo:"our lotto",
            frontImg:'static/assets/bingo.png',
            categoria:"casino",
            multimedia:[null,null],
            descipcion:"es un asjkdha",
            controles:"askdfjlasd",
            comentarios:["obj1","obj2"],
            precio:null,
            esPago:false,
            likes:29873

        },
        {
            id:"48",
            titulo:"penalty shooters 2",
            frontImg:'static/assets/penalty.png',
            categoria:"futbol",
            multimedia:[null,null],
            descipcion:"es un asjkdha",
            controles:"askdfjlasd",
            comentarios:["obj1","obj2"],
            precio:null,
            esPago:false,
            likes:2975
        },
        {
            id:"16",
            titulo:"3d bowling",
            frontImg:'static/assets/bowling.png',
            categoria:"deportes",
            multimedia:[null,null],
            descipcion:"es un asjkdha",
            controles:"askdfjlasd",
            comentarios:["obj1","obj2"],
            precio:null,
            esPago:false,
            likes:9083
        },
        {
            id:"19",
            titulo:"bloons td 4",
            frontImg:'static/assets/bloons.png',
            categoria:"disparos",
            multimedia:[null,null],
            descipcion:"es un asjkdha",
            controles:"askdfjlasd",
            comentarios:["obj1","obj2"],
            precio:null,
            esPago:false,
            likes:732
        },
        {
            id:"23",
            titulo:"doodle road",
            frontImg:'static/assets/doodle.png',
            categoria:"puzzle",
            multimedia:[null,null],
            descipcion:"es un asjkdha",
            controles:"askdfjlasd",
            comentarios:["obj1","obj2"],
            precio:null,
            esPago:false,
            likes:9283
        },
        {
            id:"24",
            titulo:"carball.io",
            frontImg:'static/assets/carball.png',
            categoria:"deportes",
            multimedia:[null,null],
            descipcion:"es un asjkdha",
            controles:"askdfjlasd",
            comentarios:["obj1","obj2"],
            precio:null,
            esPago:false,
            likes:2986
        },
        {
            id:"24",
            titulo:"archer ragdoll masters",
            frontImg:'static/assets/archer.png',
            categoria:"disparos",
            multimedia:[null,null],
            descipcion:"es un asjkdha",
            controles:"askdfjlasd",
            comentarios:["obj1","obj2"],
            precio:null,
            esPago:false,
            likes:8922
        },
        {
            id:"25",
            titulo:"spiderdoll",
            frontImg:'static/assets/spider.png',
            categoria:"escape",
            multimedia:[null,null],
            descipcion:"es un asjkdha",
            controles:"askdfjlasd",
            comentarios:["obj1","obj2"],
            precio:null,
            esPago:false,
            likes:8971
        },
        {
            id:"26",
            titulo:"zombie defense",
            frontImg:'static/assets/zombie.png',
            categoria:"accion",
            multimedia:[null,null],
            descipcion:"es un asjkdha",
            controles:"askdfjlasd",
            comentarios:["obj1","obj2"],
            precio:null,
            esPago:false,
            likes:9283
        },
        {
            id:"46",
            titulo:"monstrella fantasy makeup",
            frontImg:'static/assets/monst.png',
            categoria:"belleza",
            multimedia:[null,null],
            descipcion:"es un asjkdha",
            controles:"askdfjlasd",
            comentarios:["obj1","obj2"],
            precio:null,
            esPago:false,
            likes:8723
        },
        {
            id:"44",
            titulo:"krampus: the devil",
            frontImg:'static/assets/krampus.png',
            categoria:"terror",
            multimedia:[null,null],
            descipcion:"es un asjkdha",
            controles:"askdfjlasd",
            comentarios:["obj1","obj2"],
            precio:null,
            esPago:false,
            likes:9827
        },
        {
            id:"45",
            titulo:"lines",
            frontImg:'static/assets/lines.png',
            categoria:"puzzle",
            multimedia:[null,null],
            descipcion:"es un asjkdha",
            controles:"askdfjlasd",
            comentarios:["obj1","obj2"],
            precio:null,
            esPago:false,
            liikes:2987
        },
       
    ]
    const games3=[
        {
            id:"15",
            titulo:"basketball stars",
            frontImg:'static/assets/basketball-stars.png',
            categoria:"basquet",
            multimedia:[null,null],
            descipcion:"es un asjkdha",
            controles:"askdfjlasd",
            comentarios:["obj1","obj2"],
            precio:30900.00,
            esPago:true,
            likes:28732
        },
        {
            id:"55",
            titulo:"super bike the champions: race and driver motorbike",
            frontImg:'static/assets/moto.png',
            categoria:"motos",
            multimedia:[null,null],
            descipcion:"es un asjkdha",
            controles:"askdfjlasd",
            comentarios:["obj1","obj2"],
            precio:null,
            esPago:false,
            likes:10293
        },
        {
            id:"18",
            titulo:"tower swap match 3 tower defense",
            frontImg:'static/assets/tower-swap.png',
            categoria:"accion",
            multimedia:[null,null],
            descipcion:"es un asjkdha",
            controles:"askdfjlasd",
            comentarios:["obj1","obj2"],
            precio:20000.50,
            esPago:true,
            likes:92384
        },
        {
            id:"17",
            titulo:"kour.io",
            frontImg:'static/assets/kour.png',
            categoria:".io",
            multimedia:[null,null],
            descipcion:"es un asjkdha",
            controles:"askdfjlasd",
            comentarios:["obj1","obj2"],
            precio:12300.70,
            esPago:true,
            likes:7361
        },
        {
            id:"31",
            titulo:"age of tanks",
            frontImg:'static/assets/age-of-tanks.png',
            categoria:"accion",
            multimedia:[null,null],
            descipcion:"es un asjkdha",
            controles:"askdfjlasd",
            comentarios:["obj1","obj2"],
            precio:null,
            esPago:false,
            likes:6452
        },
        {
            id:"32",
            titulo:"mahjongg solitaire",
            frontImg:'static/assets/mahjongg.png',
            categoria:"puzzle",
            multimedia:[null,null],
            descipcion:"es un asjkdha",
            controles:"askdfjlasd",
            comentarios:["obj1","obj2"],
            precio:null,
            esPago:false,
            liikes:4982
        },
        {
            id:"34",
            titulo:"8 ball pool billiards",
            frontImg:'static/assets/8-ball-pool.png',
            categoria:"billar",
            multimedia:[null,null],
            descipcion:"es un asjkdha",
            controles:"askdfjlasd",
            comentarios:["obj1","obj2"],
            precio:5800.70,
            esPago:true,
            likes:9802
            
        },
        {
            id:"35",
            titulo:"asmr beauty homeless",
            frontImg:'static/assets/asmr.png',
            categoria:"belleza",
            multimedia:[null,null],
            descipcion:"es un asjkdha",
            controles:"askdfjlasd",
            comentarios:["obj1","obj2"],
            precio:null,
            esPago:false,
            likes:29821
        },

        {
            id:"37",
            titulo:"dead shot",
            frontImg:'static/assets/dead-shot.png',
            categoria:"disparos",
            multimedia:[null,null],
            descipcion:"es un asjkdha",
            controles:"askdfjlasd",
            comentarios:["obj1","obj2"],
            precio:null,
            esPago:false,
            likes:1231
        },
        {
            id:"39",
            titulo:"solitaire",
            frontImg:'static/assets/soli.png',
            categoria:"puzzle",
            multimedia:[null,null],
            descipcion:"es un asjkdha",
            controles:"askdfjlasd",
            comentarios:["obj1","obj2"],
            precio:null,
            esPago:false,
            likes:90823
        },
        {
            id:"40",
            titulo:"darts club",
            frontImg:'static/assets/darts.png',
            categoria:"casino",
            multimedia:[null,null],
            descipcion:"es un asjkdha",
            controles:"askdfjlasd",
            comentarios:["obj1","obj2"],
            precio:null,
            esPago:false,
            likes:39821
        },
        {
            id:"41",
            titulo:"gym simulator",
            frontImg:'static/assets/gym.png',
            categoria:"belleza",
            multimedia:[null,null],
            descipcion:"es un asjkdha",
            controles:"askdfjlasd",
            comentarios:["obj1","obj2"],
            precio:null,
            esPago:false,
            likes:98312
        },
        {
            id:"42",
            titulo:"hazmob fpb",
            frontImg:'static/assets/hazmob.png',
            categoria:"disparos",
            multimedia:[null,null],
            descipcion:"es un asjkdha",
            controles:"askdfjlasd",
            comentarios:["obj1","obj2"],
            precio:null,
            esPago:false,
            likes:9842
        },
        {
            id:"43",
            titulo:"kiomet",
            frontImg:'static/assets/kiomet.png',
            categoria:"accion",
            multimedia:[null,null],
            descipcion:"es un asjkdha",
            controles:"askdfjlasd",
            comentarios:["obj1","obj2"],
            precio:null,
            esPago:false,
            likes:9823
        },
        {
            id:"50",
            titulo:"seeing things",
            frontImg:'static/assets/seein.png',
            categoria:"terror",
            multimedia:[null,null],
            descipcion:"es un asjkdha",
            controles:"askdfjlasd",
            comentarios:["obj1","obj2"],
            precio:null,
            esPago:false,
            likes:1002
        },
        {
            id:"51",
            titulo:"smash karts",
            frontImg:'static/assets/smash.png',
            categoria:"coches",
            multimedia:[null,null],
            descipcion:"es un asjkdha",
            controles:"askdfjlasd",
            comentarios:["obj1","obj2"],
            precio:null,
            esPago:false,
            likes:10093
        },
        {
            id:"52",
            titulo:"soocer clicker",
            frontImg:'static/assets/soccer.png',
            categoria:"futbol",
            multimedia:[null,null],
            descipcion:"es un asjkdha",
            controles:"askdfjlasd",
            comentarios:["obj1","obj2"],
            precio:null,
            esPago:false,
            likes:10032
        },
        {
            id:"53",
            titulo:"squarun",
            frontImg:'static/assets/squarun.png',
            categoria:"puzzle",
            multimedia:[null,null],
            descipcion:"es un asjkdha",
            controles:"askdfjlasd",
            comentarios:["obj1","obj2"],
            precio:null,
            esPago:false,
            likes:4921
        },
        {
            id:"54",
            titulo:"street life",
            frontImg:'static/assets/street.png',
            categoria:"accion",
            multimedia:[null,null],
            descipcion:"es un asjkdha",
            controles:"askdfjlasd",
            comentarios:["obj1","obj2"],
            precio:null,
            esPago:false,
            likes:19832
        },
    
    ]

    const games4=[
        {
            id:"27",
            titulo:"build & crush",
            frontImg:'static/assets/build.png',
            categoria:"accion",
            multimedia:[null,null],
            descipcion:"es un asjkdha",
            controles:"askdfjlasd",
            comentarios:["obj1","obj2"],
            precio:null,
            esPago:false,
            likes:9283
        },
        {
            id:"38",
            titulo:"CGFC 24",
            frontImg:'static/assets/fc.png',
            categoria:"futbol",
            multimedia:[null,null],
            descipcion:"es un asjkdha",
            controles:"askdfjlasd",
            comentarios:["obj1","obj2"],
            precio:null,
            esPago:false,
            likes:1983
        },
        {
            id:"33",
            titulo:"evowards: new era",
            frontImg:'static/assets/evowards.png',
            categoria:"terror",
            multimedia:[null,null],
            descipcion:"es un asjkdha",
            controles:"askdfjlasd",
            comentarios:["obj1","obj2"],
            precio:15700.50,
            esPago:true,
            liikes:2983
        },
        {
            id:"28",
            titulo:"voxiom: build-craft-shoot",
            frontImg:'static/assets/voxiom.png',
            categoria:"minecraft",
            multimedia:[null,null],
            descipcion:"es un asjkdha",
            controles:"askdfjlasd",
            comentarios:["obj1","obj2"],
            precio:10500.90,
            esPago:true,
            likes:29832
        },
        {
            id:"22",
            titulo:"mini golf club",
            frontImg:'static/assets/mini-golf.png',
            categoria:"deportes",
            multimedia:[null,null],
            descipcion:"es un asjkdha",
            controles:"askdfjlasd",
            comentarios:["obj1","obj2"],
            precio:null,
            esPago:false,
            likes:2093
        },
        {
            id:"21",
            titulo:"mighty action heroes",
            frontImg:'static/assets/mighty-heroes.png',
            categoria:"accion",
            multimedia:[null,null],
            descipcion:"es un asjkdha",
            controles:"askdfjlasd",
            comentarios:["obj1","obj2"],
            precio:null,
            esPago:false,
            likes:9831
        },
        {
            id:"29",
            titulo:"cubes 2048.io",
            frontImg:'static/assets/cube.png',
            categoria:".io",
            multimedia:[null,null],
            descipcion:"es un asjkdha",
            controles:"askdfjlasd",
            comentarios:["obj1","obj2"],
            precio:null,
            esPago:false,
            likes:3298
        },

    ]




    class Constants{
        static root = document.querySelector("#root");

        static colors ={
            primary:"#4C5EC2",
            primary20:"#B7BEE4",
            primary30:"#929DDA",
            primary40:"#6C7BD1",
            primary60:"#3545A3",
            primary70:"#192259",
            primary80:"#1A1B28",
            secondary:"#F14343",
            secondary20:"#F2C9C9",
            secondary30:"#ED7373",
            secondary40:"#EA4747",
            secondary60:"#D52626",
            secondary70:"#AF1F1F",
            secondary80:"#6F1010",
            white:"#FAFAFA",
            black:"#141414",
            primary80Clean:"#4C5EC2",
            transparent:"#D9D9D9",
            blackTransp:"#141414"

        }


        static categories=[
            {
                name:"inicio",
                iconSVG:`<svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 512 512" xml:space="preserve" fill="#000000">
                <g id="SVGRepo_bgCarrier" stroke-width="0"/>    
                <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"/>
                <g id="SVGRepo_iconCarrier"> <polygon style="fill:#00CCB3;" points="478.609,233.739 478.609,200.348 445.217,200.348 445.217,166.957 411.826,166.957 411.826,133.565 378.435,133.565 378.435,100.174 345.043,100.174 345.043,66.783 311.652,66.783 311.652,33.391 278.261,33.391 278.261,0 233.739,0 233.739,33.391 200.348,33.391 200.348,66.783 166.957,66.783 166.957,100.174 133.565,100.174 133.565,133.565 100.174,133.565 100.174,166.957 66.783,166.957 66.783,200.348 33.391,200.348 33.391,233.739 0,233.739 0,512 211.478,512 211.478,300.522 300.522,300.522 300.522,512 512,512 512,233.739 "/> <polygon style="fill:#00AA95;" points="478.609,233.739 478.609,200.348 445.217,200.348 445.217,166.957 411.826,166.957 411.826,133.565 378.435,133.565 378.435,100.174 345.043,100.174 345.043,66.783 311.652,66.783 311.652,33.391 278.261,33.391 278.261,0 256,0 256,300.522 300.522,300.522 300.522,512 512,512 512,233.739 "/> <polygon style="fill:#FFFFFF;" points="233.739,0 233.739,33.391 200.348,33.391 200.348,66.783 166.957,66.783 166.957,100.174 133.565,100.174 133.565,133.565 100.174,133.565 100.174,166.957 66.783,166.957 66.783,200.348 33.391,200.348 33.391,233.739 0,233.739 0,267.13 66.783,267.13 66.783,233.739 100.174,233.739 100.174,200.348 133.565,200.348 133.565,166.957 166.957,166.957 166.957,133.565 200.348,133.565 200.348,100.174 233.739,100.174 233.739,66.783 278.261,66.783 278.261,0 "/> <polygon points="478.609,233.739 478.609,478.609 333.913,478.609 333.913,267.13 178.087,267.13 178.087,478.609 33.391,478.609 33.391,233.739 0,233.739 0,512 211.478,512 211.478,300.522 300.522,300.522 300.522,512 512,512 512,233.739 "/> <rect x="33.391" y="200.348" width="33.391" height="33.391"/> <rect x="445.217" y="200.348" width="33.391" height="33.391"/> <rect x="66.783" y="166.957" width="33.391" height="33.391"/> <rect x="411.826" y="166.957" width="33.391" height="33.391"/> <rect x="100.174" y="133.565" width="33.391" height="33.391"/> <rect x="378.435" y="133.565" width="33.391" height="33.391"/> <rect x="133.565" y="100.174" width="33.391" height="33.391"/> <rect x="345.043" y="100.174" width="33.391" height="33.391"/> <rect x="166.957" y="66.783" width="33.391" height="33.391"/> <rect x="311.652" y="66.783" width="33.391" height="33.391"/> <rect x="200.348" y="33.391" width="33.391" height="33.391"/> <rect x="278.261" y="33.391" width="33.391" height="33.391"/> <rect x="233.739" width="44.522" height="33.391"/> </g>
                </svg>`
            },
            {
                name:"volve a jugarlos",
                iconSVG:`<svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 512 512" xml:space="preserve" fill="#000000">
                <g id="SVGRepo_bgCarrier" stroke-width="0"/>
                <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"/>
                <g id="SVGRepo_iconCarrier"> <path style="fill:#FF3B30;" d="M256.001,512C129.958,512,27.414,409.456,27.414,283.414S129.958,54.828,256.001,54.828 c30.65,0,55.497,24.847,55.497,55.497s-24.847,55.497-55.497,55.497c-64.84,0-117.592,52.751-117.592,117.591 c0,64.841,52.752,117.592,117.592,117.592s117.591-52.751,117.591-117.592c0-30.65,24.847-55.497,55.497-55.497 s55.497,24.847,55.497,55.497C484.586,409.456,382.043,512,256.001,512z"/> <path style="fill:#FF3B30;" d="M249.633,400.832c-61.891-3.319-111.225-54.713-111.225-117.419 c0-62.704,49.335-114.099,111.225-117.418V54.921C126.523,58.305,27.414,159.5,27.414,283.414s99.109,225.11,222.218,228.494 V400.832z"/> <path style="fill:#FF3B30;" d="M404.221,72.392L289.103,5.877C282.452,2.032,274.872,0,267.187,0 c-7.677,0-15.249,2.028-21.898,5.865c-13.516,7.801-21.911,22.339-21.911,37.944v133.032c0,15.605,8.396,30.144,21.911,37.943 c6.65,3.837,14.222,5.865,21.898,5.865c7.685,0,15.264-2.032,21.918-5.877l115.117-66.515c13.503-7.803,21.891-22.338,21.891-37.932 C426.113,94.729,417.724,80.194,404.221,72.392z"/> <path style="fill:#FF3B30;" d="M404.221,72.392L289.103,5.877C282.452,2.032,274.872,0,267.187,0 c-7.677,0-15.249,2.028-21.898,5.865c-13.516,7.801-21.911,22.339-21.911,37.944v66.516h202.736 C426.113,94.729,417.724,80.194,404.221,72.392z"/> </g>
                </svg>`
            },
            {
                name:"tendencias",
                iconSVG:`<svg viewBox="0 0 128 128" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" class="iconify iconify--noto" preserveAspectRatio="xMidYMid meet" fill="#000000">
                <g id="SVGRepo_bgCarrier" stroke-width="0"/><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"/><g id="SVGRepo_iconCarrier">
                <radialGradient id="IconifyId17ecdb2904d178eab8626" cx="68.884" cy="124.296" r="70.587" gradientTransform="matrix(-1 -.00434 -.00713 1.6408 131.986 -79.345)" gradientUnits="userSpaceOnUse">
                <stop offset=".314" stop-color="#ff9800"/><stop offset=".662" stop-color="#ff6d00"/><stop offset=".972" stop-color="#f44336"/></radialGradient><path d="M35.56 40.73c-.57 6.08-.97 16.84 2.62 21.42c0 0-1.69-11.82 13.46-26.65c6.1-5.97 7.51-14.09 5.38-20.18c-1.21-3.45-3.42-6.3-5.34-8.29c-1.12-1.17-.26-3.1 1.37-3.03c9.86.44 25.84 3.18 32.63 20.22c2.98 7.48 3.2 15.21 1.78 23.07c-.9 5.02-4.1 16.18 3.2 17.55c5.21.98 7.73-3.16 8.86-6.14c.47-1.24 2.1-1.55 2.98-.56c8.8 10.01 9.55 21.8 7.73 31.95c-3.52 19.62-23.39 33.9-43.13 33.9c-24.66 0-44.29-14.11-49.38-39.65c-2.05-10.31-1.01-30.71 14.89-45.11c1.18-1.08 3.11-.12 2.95 1.5z" fill="url(#IconifyId17ecdb2904d178eab8626)"/><radialGradient id="IconifyId17ecdb2904d178eab8627" cx="64.921" cy="54.062" r="73.86" gradientTransform="matrix(-.0101 .9999 .7525 .0076 26.154 -11.267)" gradientUnits="userSpaceOnUse">
                <stop offset=".214" stop-color="#fff176"/><stop offset=".328" stop-color="#fff27d"/><stop offset=".487" stop-color="#fff48f"/><stop offset=".672" stop-color="#fff7ad"/><stop offset=".793" stop-color="#fff9c4"/><stop offset=".822" stop-color="#fff8bd" stop-opacity=".804"/><stop offset=".863" stop-color="#fff6ab" stop-opacity=".529"/><stop offset=".91" stop-color="#fff38d" stop-opacity=".209"/>
                <stop offset=".941" stop-color="#fff176" stop-opacity="0"/></radialGradient><path d="M76.11 77.42c-9.09-11.7-5.02-25.05-2.79-30.37c.3-.7-.5-1.36-1.13-.93c-3.91 2.66-11.92 8.92-15.65 17.73c-5.05 11.91-4.69 17.74-1.7 24.86c1.8 4.29-.29 5.2-1.34 5.36c-1.02.16-1.96-.52-2.71-1.23a16.09 16.09 0 0 1-4.44-7.6c-.16-.62-.97-.79-1.34-.28c-2.8 3.87-4.25 10.08-4.32 14.47C40.47 113 51.68 124 65.24 124c17.09 0 29.54-18.9 19.72-34.7c-2.85-4.6-5.53-7.61-8.85-11.88z" fill="url(#IconifyId17ecdb2904d178eab8627)"/></g>
                </svg>`
            },
            {
                name:"nuevos",
                iconSVG:`<svg  version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 512 512" xml:space="preserve" fill="#000000">
                <g id="SVGRepo_bgCarrier" stroke-width="0"/><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"/>
                <g id="SVGRepo_iconCarrier"> <path style="fill:#FFD960;" d="M390.884,224.832c-1.089-3.355-3.99-5.801-7.482-6.309l-82.291-11.958l-36.804-74.567 c-1.559-3.166-4.782-5.169-8.308-5.169c-3.528,0-6.752,2.003-8.312,5.169l-36.803,74.567l-82.291,11.958 c-3.488,0.507-6.392,2.952-7.483,6.309c-1.089,3.352-0.179,7.036,2.347,9.501l59.548,58.041l-14.058,81.959 c-0.598,3.476,0.831,6.99,3.685,9.065c2.853,2.074,6.64,2.348,9.761,0.705L256,345.407l73.6,38.695 c1.357,0.712,2.839,1.064,4.314,1.064c1.921,0,3.836-0.596,5.45-1.769c2.852-2.074,4.281-5.589,3.687-9.065l-5.277-30.767 l-4.339-25.296l-4.442-25.895l59.546-58.041C391.066,231.868,391.975,228.184,390.884,224.832z"/> <g style="opacity:0.1;"> <path style="fill:#231F20;" d="M190.06,377.29c-2.853-2.074-4.284-5.589-3.685-9.065l14.058-81.959l-59.548-58.041 c-2.526-2.465-3.434-6.148-2.347-9.501c0.204-0.626,0.488-1.207,0.811-1.763l-10.753,1.563c-3.488,0.507-6.392,2.952-7.483,6.309 c-1.089,3.352-0.179,7.036,2.347,9.501l59.548,58.041l-14.058,81.959c-0.598,3.476,0.831,6.99,3.685,9.065 c2.853,2.074,6.64,2.348,9.761,0.705l10.402-5.468C191.833,378.339,190.903,377.903,190.06,377.29z"/> </g> <g> <path style="fill:#FFD960;" d="M46.482,264.084H8.084C3.62,264.084,0,260.465,0,256c0-4.465,3.62-8.084,8.084-8.084h38.398 c4.465,0,8.084,3.62,8.084,8.084C54.566,260.465,50.947,264.084,46.482,264.084z"/> <path style="fill:#FFD960;" d="M503.916,264.084h-38.398c-4.465,0-8.084-3.62-8.084-8.084c0-4.465,3.62-8.084,8.084-8.084h38.398 c4.465,0,8.084,3.62,8.084,8.084C512,260.465,508.38,264.084,503.916,264.084z"/> <path style="fill:#FFD960;" d="M80.698,439.387c-2.07,0-4.138-0.789-5.717-2.368c-3.157-3.157-3.157-8.276,0.001-11.432 l27.151-27.15c3.157-3.157,8.276-3.157,11.432,0c3.157,3.157,3.157,8.276-0.001,11.432L86.413,437.02 C84.836,438.598,82.766,439.387,80.698,439.387z"/> <path style="fill:#FFD960;" d="M404.149,115.932c-2.07,0-4.138-0.789-5.717-2.368c-3.157-3.157-3.157-8.276,0-11.433l27.152-27.15 c3.158-3.158,8.277-3.157,11.433,0c3.157,3.157,3.157,8.276,0,11.432l-27.151,27.15 C408.287,115.143,406.218,115.932,404.149,115.932z"/> <path style="fill:#FFD960;" d="M256,511.999c-4.465,0-8.084-3.62-8.084-8.084v-38.397c0-4.465,3.62-8.084,8.084-8.084 c4.465,0,8.084,3.62,8.084,8.084v38.397C264.084,508.379,260.465,511.999,256,511.999z"/> <path style="fill:#FFD960;" d="M256,54.567c-4.465,0-8.084-3.62-8.084-8.084V8.085c0-4.465,3.62-8.084,8.084-8.084 c4.465,0,8.084,3.62,8.084,8.084v38.398C264.084,50.948,260.465,54.567,256,54.567z"/> <path style="fill:#FFD960;" d="M431.301,439.387c-2.068,0-4.138-0.789-5.717-2.368l-27.152-27.151 c-3.157-3.157-3.157-8.276,0-11.432c3.158-3.157,8.276-3.157,11.433,0l27.151,27.15c3.157,3.157,3.157,8.276,0,11.432 C435.439,438.598,433.37,439.387,431.301,439.387z"/> <path style="fill:#FFD960;" d="M107.85,115.934c-2.07,0-4.138-0.789-5.717-2.368L74.982,86.415 c-3.157-3.157-3.157-8.276,0.001-11.432c3.157-3.157,8.275-3.157,11.432,0l27.151,27.152c3.157,3.157,3.157,8.276-0.001,11.433 C111.988,115.145,109.918,115.934,107.85,115.934z"/> </g> </g>
                </svg>`
            },
            {
                name:"fútbol",
                iconSVG:`<svg viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" class="iconify iconify--emojione" preserveAspectRatio="xMidYMid meet" fill="#000000">
                <g id="SVGRepo_bgCarrier" stroke-width="0"/><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"/><g id="SVGRepo_iconCarrier"><circle cx="32" cy="32" fill="#ffffff" r="29.3"/>
                <path d="M61.9 32c0-.7.2-10.9-5.8-17.5c-.3-.6-1.5-3-5.6-5.9C47.8 6.5 45 5 44.7 4.8C44.4 4.6 39.4 2 33.4 2c-.5 0-.9 0-1.4.1c-4.6-.1-8.8 1.1-11.9 2.5c-3.2 1.4-5.3 2.8-5.5 3c-3.4 1.9-9.9 9.5-10.4 13.6c-2.1 2.6-3.8 14.5 0 21.7c2.7 10 12.7 15 13.5 15.4c.5.3 5.9 3.7 12.6 3.7h.9c.6.1 1.1.1 1.7.1c7.2 0 18-5.1 20.2-9.1c6.2-4.6 9.4-16.2 8.8-21M17.8 47.1c-2.9-4.6-4.5-10.7-4.9-12.1c.9-1.4 5.4-8 7.9-10c1.4.3 7.5 1.4 13.2 2.4c.7 1.9 3.9 10 4.8 13.2c-1 1.2-4.9 5.7-8.7 9.2c-4.1.1-11-2.3-12.3-2.7m36-32.5c0 .4-.1 2-.9 3.9c-1.5-.8-5.3-2.4-10.6-2.7c-.8-1.2-3.8-5.3-8.5-8.1c.6-1.3 1.5-2.8 2.1-3.3c.2 0 .4-.1.8-.1c2.5 0 6.9 1.7 7.3 1.8c.4.2 8.3 4.4 9.8 8.5M11.8 34c-3.4-.6-5.5-1.6-6.1-2c-1.3-4.6-.2-9.6-.1-10.3c1.3-2.2 4.8-8 7.2-9.1c2.4-.5 5.5.1 6.7.4c-.1 1.6-.3 6.1.3 10.9c-2.6 2.2-6.9 8.5-8 10.1M31.7 3.5c.8.1 1.9.2 2.7.5c-.8 1-1.6 2.5-1.9 3.3c-1.6.3-7.5 1.4-12.2 4.4c-.9-.2-3.8-.9-6.5-.7c.7-1.3 1.7-2.2 1.8-2.3c.3-.3 7.4-5.3 16.1-5.2m19.1 38.1c-1.2 0-5.7-.3-10.6-1.5c-.9-3.3-4.1-11.4-4.8-13.3c3.1-4.4 6.1-8.5 6.9-9.7c5.7.4 9.7 2.5 10.5 2.9c3.3 5.3 4 10.7 4.1 11.6c-1.8 5.5-5.2 9.2-6.1 10M3.7 28.5c.1 1.3.3 2.6.7 3.9c-.3.9-.6 1.8-.7 2.7c-.3-2.3-.3-4.6 0-6.6M18.5 57l-.4.6l.4-.6c-2.5-1.2-4.4-4-5.2-5.1c1.5-1.5 3.4-2.9 4.1-3.4c1.6.6 8.3 2.8 12.6 2.8c.7 1 3.1 4 6 6.4c-1.8 1.8-4.4 2.6-4.9 2.8c-6.8.2-12.6-3.5-12.6-3.5m16.3 3.4c.9-.5 1.9-1.2 2.7-2.1c1.3-.2 6.9-1.1 11.9-4.8c.3 0 .9.1 1.5.1c-3.1 2.9-10.5 6.2-16.1 6.8M50.2 52c1.8-4.7 1.7-8.3 1.6-9.4c1-1 4.4-4.6 6.3-10.1c1 .2 1.7.4 2 .6c.1.4.3 1.3.2 2.7c-.8 5-3.4 12.6-8.1 15.9c-.5.3-1.3.4-2 .3" fill="#4a4e51"/>
                </g></svg>`
            },
            {
               name:"puzzle",
               iconSVG:`<svg viewBox="0 0 128 128" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" class="iconify iconify--noto" preserveAspectRatio="xMidYMid meet" fill="#000000">
                <g id="SVGRepo_bgCarrier" stroke-width="0"/>
                <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"/><g id="SVGRepo_iconCarrier">
                <path d="M32.74 59.8c-.42-.42-25.99-6.05-25.99-6.05s-1.49 2.39-1.06 3.8c.24.79 5.82 7.28 11.56 13.25c4.53 4.72 9.68 9.52 10.43 12.26c1.15 4.22 1.27 10.99 1.27 10.99l-16.67 10.18s2.04 10.38 15.26 9.97c12.35-.38 12.99-13.46 16.91-13.53c.66-.01 1.57-.24 3.2 1.51c4.04 4.34 11.6 12.72 14.13 15.26c3.38 3.38 5.78 6.76 7.05 6.62c1.27-.14 11.98-9.72 15.08-12.68c3.1-2.96 5.92-6.48 5.92-9.44c0-2.96-4.37-5.21-4.37-5.21l-24.1 2.82L32.74 59.8z" fill="#b0b0af"/>
                <path d="M103.62 21.62c.42 0 11.13-5.35 11.13-5.35s5.5 11.13-1.55 17.47c-7.05 6.34-8.6 2.75-11.98 6.48c-2.58 2.85-1.27 8.74-1.27 8.74L120.9 69.1s1.17 2.13.33 3.68c-.6 1.1-7.65 8.99-13.11 14.66c-2.46 2.55-5.89 3.41-7.75 2.96c-4.65-1.13-5.35-4.79-6.2-11.27c-.85-6.48-6.43-6.38-8.46-6.06c-4.28.68-7.07 3.18-7.07 3.18s-25.2-30.37-24.92-31.22c.28-.85 1.27-7.19-1.69-9.86c-2.96-2.68-8.87-4.04-11.13-5.59c-2.25-1.55-2.55-4.5-2.14-7.36s18.63-2.83 18.63-2.83s31.42 17.33 31.57 16.63c.14-.74 14.66-14.4 14.66-14.4z" fill="#b0b0af"/>
                <radialGradient id="IconifyId17ecdb2904d178eab19790" cx="62.172" cy="-28.3" r="119.225" gradientUnits="userSpaceOnUse"><stop offset=".508" stop-color="#b7d118"/><stop offset=".572" stop-color="#b2d019"/><stop offset=".643" stop-color="#a5cd1d"/><stop offset=".717" stop-color="#8fc922"/><stop offset=".793" stop-color="#70c22a"/><stop offset=".871" stop-color="#48ba34"/>
                <stop offset=".949" stop-color="#18b040"/><stop offset=".981" stop-color="#02ab46"/></radialGradient>
                <path d="M88.12 24.99c.76-2.78-.11-9.61 5.2-14.13s13.57-3.96 18.54.79s5.77 13.68-.11 19.56c-5.88 5.88-8.59 2.6-11.87 5.77c-3.28 3.17-2.71 5.77-.68 7.69c2.04 1.92 22.28 23.07 21.71 24.42s-14.36 16.96-16.62 18.09c-2.26 1.13-6.22 1.02-7.01-2.71s.57-11.19-5.09-13.12c-5.65-1.92-8.14-.34-13.68 5.54c-5.54 5.88-8.03 12.32-3.51 15.6c4.52 3.28 10.18 1.92 12.44 5.77s-1.13 7.35-7.12 12.89c-5.99 5.54-10.63 10.06-11.42 9.5c-.79-.57-17.98-18.77-19.67-20.69c-1.7-1.92-4.98-3.62-8.14-.68c-3.17 2.94-3.73 12.55-17.07 12.55S9.08 97.36 13.83 91.37s15.26-6.56 15.49-10.63c.1-1.87-5.67-6.91-10.85-12.32C12.38 62.05 6.72 55.3 6.48 54.51c-.45-1.47 12.66-14.36 15.15-16.17s5.31-.68 6.67.79c1.36 1.47 1.7 5.99 2.83 8.59c1.13 2.6 6.44 13.91 19.22 1.02c12.66-12.78.68-18.32-3.39-19.45c-4.07-1.13-7-1.5-8.14-5.65c-.9-3.28 4.07-7.12 9.27-12.1s8.25-7.58 9.61-7.58c1.36 0 19.56 19.56 21.94 21.82s3.84 2.83 5.54 2.37c1.69-.44 2.6-1.91 2.94-3.16z" fill="url(#IconifyId17ecdb2904d178eab19790)"/>
                </g></svg>`
            },
            {
                name:"acción",
                iconSVG:`<svg viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg" fill="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"/><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"/>
                <g id="SVGRepo_iconCarrier"> <g id="a"/> <g id="b"/> <g id="c"/> <g id="d"/> <g id="e"/> <g id="f"/> <g id="g"/> <g id="h"/> <g id="i"/> <g id="j"> <path d="M58.16,5.84l-19.48,15.61-11.94,15.8,1.7,1.89,4.28,2.28L58.24,15.91c.52-.52,.79-1.24,.75-1.97l-.43-7.28c-.03-.31-.18-.6-.4-.82Z" fill="#f0f4f6" id="k"/> <path d="M49.79,5.01c-.64,.03-1.24,.3-1.7,.75L22.57,31.28l2,3.81,2.17,2.17L58.16,5.84c-.21-.23-.5-.37-.82-.4l-7.28-.43c-.09-.01-.18-.01-.27,0h0Z" fill="#e2eef2" id="l"/> <path d="M14.59,23.3l1.22,3.74,3.88,1.36,5.03-5.03c.29-.29,.08-.79-.34-.78l-8.99,.32c-.31,.03-.59,.17-.8,.39h0Z" fill="#00bff8" id="m"/> <path d="M11.26,58.96l2.07-4.5-1.59-2.19-1.94-1.84-4.76,2.31c-.02,.31,.09,.62,.3,.85l2.53,2.53,2.53,2.54c.23,.21,.54,.32,.85,.3Z" fill="#62d9fa" id="n"/> <path d="M5.04,52.74l6.69-.47,4.25-1.22,1.7-4.72,.75-2.81-4.1-.54-8.99,8.99c-.19,.21-.3,.49-.3,.78h0Z" fill="#00bff8" id="o"/> <path d="M21.04,49.67l-.27-2.62-3.08-.73-5.95,5.95-.47,6.69c.29,0,.57-.11,.78-.3l8.99-8.99Z" fill="#0acffb" id="p"/> <path d="M27.31,50.1l2.52-5.83-2.18-7.92-7.02-1.34-6.73,1.68-2.11,2.11c-.45,.45-.45,1.18,0,1.63l2.54,2.53,3.35,3.35,3.35,3.35,2.53,2.54c.45,.45,1.18,.45,1.63,0l2.11-2.11Z" fill="#62d9fa" id="q"/> <path d="M13.9,36.69l13.75-.34-5.08-5.08-2.88-2.88-5.1-5.1c-.22,.21-.36,.5-.38,.8l-.31,12.59Z" fill="#0acffb" id="r"/> <path d="M35.61,44.31l.65,3.24,4.45,1.86c.23-.21,.37-.5,.39-.8l.32-8.99c.02-.41-.49-.63-.78-.34l-5.03,5.03Z" fill="#00bff8" id="s"/> <path d="M32.72,41.43l-5.08-5.08-.34,13.75,12.59-.31c.31-.02,.59-.16,.8-.38l-5.1-5.1-2.88-2.88Z" fill="#0acffb" id="t"/> <path d="M40.7,49.41l-2.58-7.61-2.52,2.52,5.1,5.1Z" fill="#00aee2" id="u"/> <path d="M14.59,23.3l7.61,2.58-2.52,2.52-5.1-5.1Z" fill="#00aee2" id="v"/> <path d="M57.4,4.44l-7.28-.43c-1.02-.06-2.02,.32-2.74,1.04L22.57,29.86l-1.47-1.47,4.33-4.33c.56-.57,.56-1.49,0-2.05-.29-.29-.67-.45-1.08-.43l-8.99,.32c-1.18,.04-2.12,1-2.15,2.17l-.3,12.19-1.82,1.82c-.84,.84-.84,2.21,0,3.05l1.83,1.83-8.29,8.29c-.84,.84-.84,2.21,0,3.05l5.07,5.07c.42,.42,.97,.63,1.52,.63s1.1-.21,1.52-.63l8.29-8.29,1.83,1.83c.41,.41,.95,.63,1.52,.63h0c.58,0,1.12-.22,1.52-.63l1.82-1.82,12.19-.3c1.18-.03,2.13-.97,2.17-2.15l.32-8.99c.03-.8-.6-1.48-1.41-1.51-.4,0-.79,.14-1.08,.43l-4.33,4.33-1.47-1.47,24.81-24.81c.72-.72,1.1-1.72,1.04-2.74l-.43-7.28c-.07-1.16-1-2.09-2.16-2.16Zm-8.6,2.02c.32-.32,.75-.49,1.2-.46l6.21,.37-28.57,28.57-3.66-3.66L48.8,6.46Zm-23.51,28.95l-10.36,.25,.26-10.36,10.11,10.11Zm-5.6-8.43l-3.12-3.12,6.47-.23-3.35,3.35Zm-5.36,17.4l1.94,1.94-4.98,4.98-4.17,.29,7.21-7.21Zm-7.55,9.24l3.88-.27-.27,3.88-3.6-3.6Zm5.63,3.26l.29-4.17,4.98-4.98,1.94,1.94-7.21,7.21Zm12.09-5.38s-.08,.05-.11,.05-.07,0-.11-.05l-11.77-11.77c-.06-.06-.06-.16,0-.22l1.82-1.82,12.3-.3-.3,12.3-1.82,1.82Zm15.87-10.53l-.23,6.47-3.12-3.12,3.35-3.35Zm-1.67,7.86l-10.36,.25,.25-10.36,10.11,10.11ZM57.54,15.2l-24.81,24.81-3.66-3.66L57.63,7.79l.37,6.21c.03,.45-.14,.89-.46,1.2Z"/> </g> <g id="w"/> <g id="x"/> <g id="y"/> <g id="a"/> <g id="aa"/> <g id="ab"/> <g id="ac"/> <g id="ad"/> <g id="ae"/> <g id="af"/> <g id="ag"/> <g id="ah"/> <g id="ai"/> <g id="aj"/> <g id="ak"/> <g id="al"/> <g id="am"/> <g id="an"/> <g id="ao"/> <g id="ap"/> <g id="aq"/> <g id="ar"/> <g id="as"/> <g id="at"/> <g id="au"/> <g id="av"/> <g id="aw"/> <g id="ax"/> <g id="ay"/> <g id="b"/> <g id="ba"/> <g id="bb"/> <g id="bc"/> <g id="bd"/> <g id="be"/> <g id="bf"/> <g id="bg"/> <g id="bh"/> <g id="bi"/> <g id="bj"/> </g>
                </svg>`
            },
            {
                name:"basquet",
                iconSVG:`<svg version="1.0" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 64 64" enable-background="new 0 0 64 64" xml:space="preserve" fill="#000000">
                <g id="SVGRepo_bgCarrier" stroke-width="0"/>
                <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"/>
                <g id="SVGRepo_iconCarrier"> <g> <path fill="#394240" d="M54.627,9.372c-12.496-12.494-32.758-12.494-45.254,0c-12.497,12.496-12.497,32.758,0,45.256 c12.496,12.496,32.758,12.496,45.254,0C67.124,42.13,67.124,21.868,54.627,9.372z M53.213,10.786 c4.428,4.428,7.179,9.895,8.261,15.615c-9.549-0.729-19.344,2.539-26.646,9.84c-1.283,1.283-2.437,2.646-3.471,4.066 c-2.487-1.861-4.873-3.926-7.136-6.188c-0.568-0.568-1.106-1.156-1.648-1.74c1.785-2.346,3.748-4.602,5.892-6.744 c7.077-7.078,15.369-12.184,24.198-15.373C52.847,10.437,53.033,10.606,53.213,10.786z M50.973,8.759 c-8.719,3.309-16.901,8.441-23.922,15.463c-2.117,2.117-4.065,4.34-5.845,6.65c-2.224-2.543-4.227-5.211-5.993-7.986 c4.333-5.684,6.633-12.416,6.904-19.217C31.742,0.319,42.732,2.015,50.973,8.759z M10.787,10.786 c2.755-2.756,5.915-4.854,9.285-6.312c-0.395,5.848-2.387,11.605-5.978,16.566c-1.728-2.922-3.208-5.945-4.448-9.047 C10.014,11.585,10.393,11.181,10.787,10.786z M8.193,13.755c1.291,3.084,2.818,6.086,4.582,8.988 c-0.625,0.75-1.285,1.482-1.988,2.186c-2.626,2.625-5.599,4.686-8.766,6.207C2.196,24.985,4.254,18.882,8.193,13.755z M2.031,33.339c3.688-1.645,7.145-3.971,10.17-6.996c0.588-0.588,1.142-1.199,1.678-1.818c1.809,2.777,3.848,5.447,6.104,7.992 c-4.463,6.176-7.752,12.934-9.889,19.967C5.03,47.075,2.34,40.253,2.031,33.339z M11.712,54.093 c2.021-7.07,5.231-13.871,9.654-20.074c0.479,0.506,0.945,1.021,1.441,1.516c2.351,2.352,4.832,4.488,7.419,6.422 c-3.73,5.818-5.498,12.527-5.329,19.193C20.114,59.989,15.563,57.634,11.712,54.093z M53.213,53.212 c-7.156,7.158-17.028,9.934-26.299,8.348c-0.253-6.389,1.382-12.836,4.933-18.424c6.625,4.654,13.896,7.979,21.445,9.994 C53.265,53.157,53.24,53.187,53.213,53.212z M32.979,41.481c0.974-1.336,2.057-2.619,3.263-3.826 c6.99-6.988,16.407-10.049,25.538-9.219c0.961,8.076-1.356,16.463-6.953,23.016C47.13,49.53,39.712,46.212,32.979,41.481z"/> <g> <path fill="#F76D57" d="M22.573,32.38c0.542,0.584,1.08,1.172,1.648,1.74c2.263,2.262,4.648,4.326,7.136,6.188 c1.034-1.42,2.188-2.783,3.471-4.066c7.302-7.301,17.097-10.568,26.646-9.84c-1.082-5.721-3.833-11.188-8.261-15.615 c-0.18-0.18-0.366-0.35-0.55-0.523c-8.829,3.189-17.121,8.295-24.198,15.373C26.321,27.778,24.358,30.034,22.573,32.38z"/> <path fill="#F76D57" d="M21.206,30.872c1.779-2.311,3.728-4.533,5.845-6.65C34.071,17.2,42.254,12.067,50.973,8.759 c-8.24-6.744-19.23-8.439-28.855-5.09c-0.271,6.801-2.571,13.533-6.904,19.217C16.979,25.661,18.982,28.329,21.206,30.872z"/> <path fill="#F76D57" d="M20.072,4.474c-3.37,1.459-6.53,3.557-9.285,6.312c-0.395,0.395-0.773,0.799-1.141,1.207 c1.24,3.102,2.721,6.125,4.448,9.047C17.686,16.079,19.678,10.321,20.072,4.474z"/> <path fill="#F76D57" d="M12.775,22.743c-1.764-2.902-3.291-5.904-4.582-8.988c-3.939,5.127-5.997,11.23-6.172,17.381 c3.167-1.521,6.14-3.582,8.766-6.207C11.49,24.226,12.15,23.493,12.775,22.743z"/> <path fill="#F76D57" d="M13.879,24.524c-0.536,0.619-1.09,1.23-1.678,1.818c-3.025,3.025-6.482,5.352-10.17,6.996 c0.309,6.914,2.999,13.736,8.062,19.145c2.137-7.033,5.426-13.791,9.889-19.967C17.727,29.972,15.688,27.302,13.879,24.524z"/> <path fill="#F76D57" d="M22.808,35.534c-0.496-0.494-0.963-1.01-1.441-1.516c-4.423,6.203-7.633,13.004-9.654,20.074 c3.852,3.541,8.402,5.896,13.186,7.057c-0.169-6.666,1.599-13.375,5.329-19.193C27.64,40.022,25.158,37.886,22.808,35.534z"/> <path fill="#F76D57" d="M26.914,61.56c9.271,1.586,19.143-1.189,26.299-8.348c0.027-0.025,0.052-0.055,0.079-0.082 c-7.549-2.016-14.82-5.34-21.445-9.994C28.296,48.724,26.661,55.171,26.914,61.56z"/> <path fill="#F76D57" d="M61.78,28.437c-9.131-0.83-18.548,2.23-25.538,9.219c-1.206,1.207-2.289,2.49-3.263,3.826 c6.732,4.73,14.15,8.049,21.848,9.971C60.424,44.899,62.741,36.513,61.78,28.437z"/> </g> <path opacity="0.2" fill="#231F20" d="M26.914,61.56c9.271,1.586,19.143-1.189,26.299-8.348c0.027-0.025,0.052-0.055,0.079-0.082 c-7.549-2.016-14.82-5.34-21.445-9.994C28.296,48.724,26.661,55.171,26.914,61.56z"/> <path opacity="0.2" fill="#231F20" d="M61.78,28.437c-9.131-0.83-18.548,2.23-25.538,9.219c-1.206,1.207-2.289,2.49-3.263,3.826 c6.732,4.73,14.15,8.049,21.848,9.971C60.424,44.899,62.741,36.513,61.78,28.437z"/> <g opacity="0.2"> <path fill="#FFFFFF" d="M10.787,10.786c-0.395,0.395-0.773,0.799-1.141,1.207c1.24,3.102,2.721,6.125,4.448,9.047 c3.591-4.961,5.583-10.719,5.978-16.566C16.702,5.933,13.542,8.03,10.787,10.786z"/> <path fill="#FFFFFF" d="M2.021,31.136c3.167-1.521,6.14-3.582,8.766-6.207c0.703-0.703,1.363-1.436,1.988-2.186 c-1.764-2.902-3.291-5.904-4.582-8.988C4.254,18.882,2.196,24.985,2.021,31.136z"/> </g> </g> </g>
                </svg>`
            },
            {
                name:"disparos",
                iconSVG:`<svg  version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 503.607 503.607" xml:space="preserve" fill="#000000">
                <g id="SVGRepo_bgCarrier" stroke-width="0"/><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"/>
                <g id="SVGRepo_iconCarrier"> <g transform="translate(1 1)"> <path style="fill:#FCC309;" d="M477.426,250.803c0-134.295-101.561-243.41-226.623-243.41S24.18,116.508,24.18,250.803 s101.561,243.41,226.623,243.41S477.426,385.938,477.426,250.803"/> <path style="fill:#FFFFFF;" d="M24.18,250.803c0-134.295,101.561-243.41,226.623-243.41c-134.295,0-243.41,109.115-243.41,243.41 s109.115,243.41,243.41,243.41C125.741,494.213,24.18,385.938,24.18,250.803"/> <path style="fill:#FCC309;" d="M250.803,7.393c125.062,0,226.623,109.115,226.623,243.41s-101.561,243.41-226.623,243.41 c134.295,0,243.41-109.115,243.41-243.41S385.098,7.393,250.803,7.393"/> <path style="fill:#FCC309;" d="M238.213,460.639c-109.115,0-197.246-94.007-197.246-209.836S129.098,40.967,238.213,40.967 s197.246,94.007,197.246,209.836S347.328,460.639,238.213,460.639"/> <path style="fill:#FCC309;" d="M250.803,40.967c-2.518,0-4.197,0-6.715,0c105.757,4.197,191.37,96.525,191.37,209.836 s-85.613,206.479-191.37,209.836c2.518,0,4.197,0,6.715,0c115.829,0,209.836-94.007,209.836-209.836S366.633,40.967,250.803,40.967 "/> <path d="M250.803,502.607C112.311,502.607-1,390.134-1,250.803c0-57.075,18.466-111.633,54.557-156.118 c2.518-3.357,8.393-4.197,11.751-1.679c3.357,2.518,4.197,8.393,1.679,11.751c-33.574,41.967-50.361,92.328-50.361,146.046 c0,129.259,105.757,235.016,235.016,235.016s235.016-105.757,235.016-235.016S380.062,15.787,250.803,15.787 c-49.521,0-97.364,15.108-137.652,44.485c-3.357,2.518-9.233,1.679-11.751-1.679c-2.518-3.357-1.679-9.233,1.679-11.751 C146.725,15.787,197.085-1,250.803-1c138.492,0,251.803,113.311,251.803,251.803S389.295,502.607,250.803,502.607z"/> <path d="M91.328,74.541c0-5.036-3.357-8.393-8.393-8.393c-5.036,0-8.393,4.197-8.393,8.393c0,4.197,3.357,8.393,8.393,8.393 C87.97,82.934,91.328,79.577,91.328,74.541"/> <path d="M250.803,469.033c-120.026,0-218.229-97.364-218.229-218.23c0-120.026,98.203-218.229,218.229-218.229 s218.23,98.203,218.23,218.229C469.033,371.669,370.829,469.033,250.803,469.033z M250.803,49.361 c-110.793,0-201.443,90.649-201.443,201.443s90.649,201.443,201.443,201.443s201.443-90.649,201.443-201.443 S361.597,49.361,250.803,49.361z"/> <path d="M250.803,368.311c-64.63,0-117.508-52.879-117.508-117.508s52.879-117.508,117.508-117.508s117.508,52.879,117.508,117.508 S315.433,368.311,250.803,368.311z M250.803,150.082c-55.397,0-100.721,45.325-100.721,100.721s45.325,100.721,100.721,100.721 S351.525,306.2,351.525,250.803S306.2,150.082,250.803,150.082z"/> <path d="M250.803,183.656c-5.036,0-8.393-3.357-8.393-8.393V40.967c0-5.036,3.357-8.393,8.393-8.393s8.393,3.357,8.393,8.393 v134.295C259.197,180.298,255.839,183.656,250.803,183.656z"/> <path d="M250.803,469.033c-5.036,0-8.393-3.357-8.393-8.393V326.344c0-5.036,3.357-8.393,8.393-8.393s8.393,3.357,8.393,8.393 v134.295C259.197,465.675,255.839,469.033,250.803,469.033z"/> <path d="M460.639,259.197H326.344c-5.036,0-8.393-3.357-8.393-8.393s3.357-8.393,8.393-8.393h134.295 c5.036,0,8.393,3.357,8.393,8.393S465.675,259.197,460.639,259.197z"/> <path d="M175.262,259.197H40.967c-5.036,0-8.393-3.357-8.393-8.393s3.357-8.393,8.393-8.393h134.295 c5.036,0,8.393,3.357,8.393,8.393S180.298,259.197,175.262,259.197z"/> <path d="M250.803,292.77c-5.036,0-8.393-3.357-8.393-8.393v-67.148c0-5.036,3.357-8.393,8.393-8.393s8.393,3.357,8.393,8.393 v67.148C259.197,289.413,255.839,292.77,250.803,292.77z"/> <path d="M284.377,259.197h-67.148c-5.036,0-8.393-3.357-8.393-8.393s3.357-8.393,8.393-8.393h67.148 c5.036,0,8.393,3.357,8.393,8.393S289.413,259.197,284.377,259.197z"/> </g> </g>
                </svg>`
            },
            {
                name:"io",
                iconSVG:`<svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 511.996 511.996" xml:space="preserve" fill="#000000">
                <g id="SVGRepo_bgCarrier" stroke-width="0"/><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"/>
                <g id="SVGRepo_iconCarrier"> <path style="fill:#FFC033;" d="M434.198,371.976c-0.892-4.341-3.452-8.125-7.235-10.574L263.792,255.887l162.059-107.519 c3.563-2.449,6.122-6.233,7.012-10.574c0.89-4.452,0-8.904-2.561-12.577C386.672,60.66,311.542,22.26,233.741,22.26h-1.336 c-5.676,0-11.242,0.334-16.696,0.779C94.723,32.278-0.665,134.12,0.003,257.333s97.279,223.943,218.378,231.845 c5.01,0.445,10.129,0.557,15.36,0.557h1.336c78.246-0.445,153.598-39.847,196.786-105.182 C434.198,380.881,435.089,376.43,434.198,371.976z"/> <path style="fill:#FFC033;" d="M431.862,384.554c-43.187,65.335-118.538,104.737-196.786,105.182h-1.336V22.26 c77.801,0,152.931,38.4,196.561,102.956c2.561,3.673,3.452,8.125,2.561,12.577c-0.89,4.341-3.449,8.125-7.012,10.574 L263.791,255.887l163.171,105.516c3.784,2.449,6.343,6.233,7.235,10.574C435.089,376.43,434.198,380.881,431.862,384.554z"/> <g> <circle style="fill:#45C7E6;" cx="361.736" cy="256.108" r="16.696"/> <circle style="fill:#45C7E6;" cx="428.518" cy="256.108" r="16.696"/> <circle style="fill:#45C7E6;" cx="495.3" cy="256.108" r="16.696"/> </g> <circle style="fill:#665247;" cx="283.823" cy="122.544" r="16.696"/> </g>
                </svg>`
            },
            {
                name:"terror",
                iconSVG:`<svg viewBox="0 0 72 72" id="emoji" xmlns="http://www.w3.org/2000/svg" fill="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"/><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"/>
                <g id="SVGRepo_iconCarrier"> <g id="color"> <path fill="#FFFFFF" stroke="none" d="M13.9953,51.377c-0.9623-2.069,3.4028-6.2239,6.017-12.0822c1.1268-2.5251,1.2295-4.7069,0.738-6.384 c-1.2826-2.5697-2.3564-3.62-3.4174-6.1225c-0.8441-1.991,8.174-0.2897,8.3927-0.3765c0.8853-0.7861,3.2644-9.554,5.4268-12.2402 c0.9874-1.2266,3.396-2.6415,5.7808-2.5013c2.0182,0.1187,4.1012,1.3013,4.9603,2.3747c2.171,2.7125,4.7139,12.2063,5.4308,12.3544 c1.9302,0.3988,7.9684-1.8974,8.321,0.4119c0.0771,0.5053-1.9201,5.7746-2.2439,6.1147c-0.5692,1.348-1.1653,3.3725-0.3164,5.4799 c1.2135,3.0123,6.055,8.5856,6.0544,14.0239c0,0.1925-0.9263,5.5194-7.6907,3.6474c-0.1511-0.0418-0.184-0.1383-0.2678-0.2018 c-1.5408-1.1691-4.7131-1.7748-7.61-0.9184c-3.4167,1.01-2.8112,2.9781-6.954,4.7235c-1.0835,0.4565-3.1113,1.2832-5.7731,1.0496 c-0.7152-0.0628-2.7788-0.2675-4.8115-1.6059c-2.9156-1.9198-2.3607-3.9289-4.7879-5.7011 C18.0291,51.0753,14.6921,52.875,13.9953,51.377z"/> <ellipse cx="39.8979" cy="23.2122" rx="1.7074" ry="3.1872" fill="#3F3F3F" stroke="none"/> <ellipse cx="36.5193" cy="30.3411" rx="1.7742" ry="2.1254" fill="#3F3F3F" stroke="none"/> <path fill="#d0cfce" stroke="none" d="M40.1212,56.6767C40.8364,56.614,45,55,46.9277,55.153C50.4076,55.4291,54.5728,57.7723,57,56 c3.2152-2.3476,1.2678-3.0961,1.9646-4.5942c0.9623-2.069-3.4028-6.2239-6.017-12.0822c-1.1268-2.5251-1.2295-4.7069-0.738-6.384 c1.2826-2.5697,2.3564-3.62,3.4174-6.1225c0.8441-1.991-8.174-0.2897-8.3927-0.3765c-0.8853-0.7861-1.102-6.8678-3.2644-9.554"/> <ellipse cx="33.1007" cy="23.2122" rx="1.7074" ry="3.1872" fill="#3F3F3F" stroke="none"/> </g> <g id="hair"/> <g id="skin"/> <g id="skin-shadow"/> <g id="line"> <ellipse cx="39.8778" cy="23.2122" rx="1.7074" ry="3.1872" fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="2"/> <path fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="2" d="M13.9753,51.377c-0.9623-2.069,3.4028-6.2239,6.017-12.0822c1.1268-2.5251,1.2295-4.7069,0.738-6.384 c-1.2826-2.5697-2.3564-3.62-3.4174-6.1225c-0.8441-1.991,8.174-0.2897,8.3927-0.3765c0.8853-0.7861,3.2644-9.554,5.4268-12.2402 c0.9874-1.2266,3.396-2.6415,5.7808-2.5013c2.0182,0.1187,4.1012,1.3013,4.9603,2.3747c2.171,2.7125,4.7139,12.2063,5.4308,12.3544 c1.9302,0.3988,7.9684-1.8974,8.321,0.4119c0.0771,0.5053-1.9201,5.7746-2.2439,6.1147c-0.5692,1.348-1.1653,3.3725-0.3164,5.4799 c1.2135,3.0123,6.055,8.5856,6.0544,14.0239c0,0.1925-0.9263,5.5194-7.6907,3.6474c-0.1511-0.0418-4.9809-1.9766-7.8778-1.1202 c-3.4167,1.01-2.8112,2.9781-6.954,4.7235c-1.0835,0.4565-3.1113,1.2832-5.7731,1.0496c-0.7152-0.0628-2.7788-0.2675-4.8115-1.6059 c-2.9156-1.9198-2.3607-3.9289-4.7879-5.7011C18.009,51.0753,14.672,52.875,13.9753,51.377z"/> <ellipse cx="36.4993" cy="30.3411" rx="1.7742" ry="2.1254" fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="2"/> <ellipse cx="33.0806" cy="23.2122" rx="1.7074" ry="3.1872" fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="2"/> </g> </g>
                </svg>`
            },
            {
                name:"coches",
                iconSVG:`<svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 512 512" xml:space="preserve" fill="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"/>
                <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"/><g id="SVGRepo_iconCarrier"> <rect x="71.111" y="231.111" style="fill:#F2F2F4;" width="85.333" height="71.111"/> <rect x="355.556" y="231.111" style="fill:#DFDFE1;" width="85.333" height="71.111"/> <polygon style="fill:#B4D8F1;" points="85.333,216.889 85.333,188.444 170.667,103.111 341.333,103.111 433.778,195.556 433.778,216.889 "/> <polygon style="fill:#98C8ED;" points="433.778,195.556 341.333,103.111 327.111,103.111 213.333,216.889 433.778,216.889 "/> <rect x="35.556" y="344.889" style="fill:#88888F;" width="85.333" height="85.333"/> <rect x="391.111" y="344.889" style="fill:#56545A;" width="85.333" height="85.333"/> <path style="fill:#FF6643;" d="M471.059,202.667L350.17,81.778H161.83L40.942,202.667H0v42.667h35.556v113.778h440.889V245.333H512 v-42.667H471.059z M179.503,124.444h152.993l78.222,78.222H101.281L179.503,124.444z M142.222,288H85.333v-42.667h56.889V288z M426.667,288h-56.889v-42.667h56.889V288z"/> <path style="fill:#FF4F19;" d="M471.059,202.667L350.17,81.778H256v42.667h76.497l78.222,78.222H256v156.444h220.444V245.333H512 v-42.667H471.059z M426.667,288h-56.889v-42.667h56.889V288z"/> </g>
                </svg>`
            },
            {
                name:"billar",
                iconSVG:`<svg viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" class="iconify iconify--emojione" preserveAspectRatio="xMidYMid meet" fill="#000000">
                <g id="SVGRepo_bgCarrier" stroke-width="0"/><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"/><g id="SVGRepo_iconCarrier"><circle cx="32" cy="32" r="30" fill="#333"/>
                <ellipse transform="rotate(-39.592 36.265 24.268)" cx="36.3" cy="24.3" rx="13.1" ry="13.9" fill="#f5f5f5"/>
                <path d="M45.3 23.2c1.8 2.9.8 6.3-2.9 8.6s-7.2 1.7-9-1.2c-1.1-1.8-1.1-3.8 0-5.6c-1.7 0-3.1-.7-4.1-2.2c-1.7-2.7-.7-6 2.5-7.9c3.1-1.9 6.5-1.4 8.2 1.3c1 1.6 1 3.2.2 4.6c2.1-.3 3.9.6 5.1 2.4m-3.1 1.6c-.9-1.5-2.9-1.9-4.6-.8c-1.8 1.1-2.3 3-1.4 4.5c1 1.6 2.9 2 4.7.9c1.7-1.1 2.2-3.1 1.3-4.6M32 21.3c.9 1.4 2.7 1.9 4.3.8c1.6-1 2-2.8 1.1-4.2c-.9-1.4-2.7-1.8-4.3-.8c-1.5 1-1.9 2.7-1.1 4.2" fill="#3e4347"/></g>
                </svg>`
            },
            {
                name:"deportes",
                iconSVG:`<svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 512 512" xml:space="preserve" fill="#000000">
                <g id="SVGRepo_bgCarrier" stroke-width="0"/><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"/>
                <g id="SVGRepo_iconCarrier"> <path style="fill:#F7B239;" d="M232.404,395.957c-19.646,10.425-41.76,16.825-65.221,18.112c-2.928,0.165-5.88,0.248-8.855,0.248 c-2.975,0-5.927-0.083-8.855-0.248c-36.979-2.031-70.569-16.754-96.497-39.907c-2.208-1.948-4.368-3.979-6.458-6.069 c-2.09-2.09-4.132-4.239-6.092-6.435C17.12,335.684,2.291,301.975,0.248,264.855C0.083,261.927,0,258.975,0,256 c0-2.975,0.083-5.927,0.248-8.855c2.043-37.12,16.872-70.829,40.178-96.804c1.96-2.196,4.002-4.345,6.092-6.435 c2.09-2.09,4.25-4.121,6.458-6.069c25.928-23.153,59.518-37.876,96.497-39.907c2.928-0.165,5.88-0.248,8.855-0.248 c2.975,0,5.927,0.083,8.855,0.248c36.967,2.031,70.557,16.754,96.485,39.907c2.208,1.948,4.368,3.979,6.458,6.069 c2.09,2.078,4.121,4.227,6.104,6.423c13.637,15.219,24.381,33.083,31.359,52.741C278.923,204.806,213.679,387.858,232.404,395.957z"/> <path style="fill:#E09B2D;" d="M116.626,256c0-66.843,41.426-124.008,100.004-147.228c-18.047-7.154-37.72-11.089-58.312-11.089 C70.881,97.683,0,168.564,0,256s70.881,158.317,158.317,158.317c20.593,0,40.266-3.935,58.312-11.089 C158.052,380.008,116.626,322.843,116.626,256z"/> <g> <path style="fill:#B27214;" d="M276.231,150.33c-20.615,20.626-34.653,46.53-40.603,74.926l-1.818,8.666l-17.332-3.636l1.818-8.666 c6.647-31.748,22.338-60.722,45.373-83.781c2.208,1.948,4.368,3.979,6.458,6.069C272.217,145.985,274.247,148.133,276.231,150.33z"/> <path style="fill:#B27214;" d="M245.38,247.145v17.71h-78.196v149.214c-2.928,0.165-5.88,0.248-8.855,0.248 c-2.975,0-5.927-0.083-8.855-0.248V264.855h-47.817c-2.149,41.3-19.221,79.825-48.679,109.307 c-2.208-1.948-4.368-3.979-6.458-6.069c-2.09-2.09-4.132-4.239-6.092-6.435c26.117-26.128,41.359-60.214,43.484-96.804H0.248 C0.083,261.927,0,258.975,0,256c0-2.975,0.083-5.927,0.248-8.855h83.663c-2.125-36.589-17.368-70.675-43.484-96.804 c1.96-2.196,4.002-4.345,6.092-6.435c2.09-2.09,4.25-4.121,6.458-6.069c29.458,29.481,46.53,68.007,48.679,109.307h47.817V97.931 c2.928-0.165,5.88-0.248,8.855-0.248c2.975,0,5.927,0.083,8.855,0.248v149.214H245.38z"/> </g> <g> <path style="fill:#995C0D;" d="M512,308.481c-11.287,18.088-25.078,34.464-40.887,48.608c-2.881,2.598-5.833,5.101-8.855,7.533 V252.34c3.023,2.432,5.974,4.935,8.855,7.533C486.922,274.017,500.713,290.393,512,308.481z"/> <path style="fill:#995C0D;" d="M180.608,252.34v112.282c-3.023-2.432-5.974-4.935-8.855-7.533 c-15.809-14.145-29.6-30.52-40.887-48.608c11.287-18.088,25.078-34.464,40.887-48.608 C174.634,257.275,177.585,254.772,180.608,252.34z"/> </g> <path style="fill:#B27214;" d="M462.258,252.328v112.306c-2.893,2.337-5.844,4.605-8.855,6.777 c-37.038,26.99-82.635,42.906-131.964,42.906c-31.642,0-61.738-6.553-89.035-18.359c-15.266-6.6-29.659-14.853-42.941-24.534 c-3.011-2.184-5.962-4.452-8.855-6.789V252.328c2.893-2.338,5.844-4.605,8.855-6.789c11.701-8.524,24.251-15.939,37.498-22.102 c24.759-11.5,51.962-18.631,80.628-20.367c4.581-0.283,9.197-0.425,13.849-0.425c49.329,0,94.926,15.915,131.964,42.906 C456.414,247.723,459.365,249.99,462.258,252.328z"/> <g> <path style="fill:#844908;" d="M432.989,299.626h-17.096v-12.314c0-4.89-3.965-8.855-8.855-8.855s-8.855,3.965-8.855,8.855v12.314 h-25.089v-12.314c0-4.89-3.965-8.855-8.855-8.855c-4.89,0-8.855,3.965-8.855,8.855v12.314h-25.089v-12.314 c0-4.89-3.965-8.855-8.855-8.855c-4.89,0-8.855,3.965-8.855,8.855v12.314h-25.101v-12.314c0-4.89-3.965-8.855-8.855-8.855 s-8.855,3.965-8.855,8.855v12.314h-25.089v-12.314c0-4.89-3.965-8.855-8.855-8.855s-8.855,3.965-8.855,8.855v12.314h-17.096 c-4.89,0-8.855,3.965-8.855,8.855c0,4.89,3.965,8.855,8.855,8.855h17.096v12.314c0,4.89,3.965,8.855,8.855,8.855 s8.855-3.965,8.855-8.855v-12.314h25.089v12.314c0,4.89,3.965,8.855,8.855,8.855s8.855-3.965,8.855-8.855v-12.314h25.101v12.314 c0,4.89,3.965,8.855,8.855,8.855c4.89,0,8.855-3.965,8.855-8.855v-12.314h25.089v12.314c0,4.89,3.965,8.855,8.855,8.855 c4.89,0,8.855-3.965,8.855-8.855v-12.314h25.089v12.314c0,4.89,3.965,8.855,8.855,8.855s8.855-3.965,8.855-8.855v-12.314h17.096 c4.89,0,8.855-3.965,8.855-8.855C441.844,303.591,437.88,299.626,432.989,299.626z"/> <path style="fill:#844908;" d="M189.463,245.539v125.884c-3.011-2.184-5.962-4.452-8.855-6.789v-0.012 c-3.023-2.432-5.974-4.935-8.855-7.533v-97.217c2.881-2.598,5.833-5.101,8.855-7.533v-0.012 C183.501,249.99,186.452,247.723,189.463,245.539z"/> <path style="fill:#844908;" d="M471.113,259.873v97.217c-2.881,2.598-5.833,5.101-8.855,7.533v0.012 c-2.893,2.337-5.844,4.605-8.855,6.777v-125.86c3.011,2.172,5.962,4.439,8.855,6.777v0.012 C465.281,254.772,468.232,257.275,471.113,259.873z"/> </g> </g>
                </svg>`
            },
            {
                name:"motos",
                iconSVG:`<svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 511.99 511.99" xml:space="preserve" fill="#000000">
                <g id="SVGRepo_bgCarrier" stroke-width="0"/><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"/>
                <g id="SVGRepo_iconCarrier"> <g> <path style="fill:#434A54;" d="M95.998,242.668c-1.461,0-2.914-0.312-4.273-0.906l-42.671-18.657 c-3.883-1.703-6.391-5.531-6.391-9.781v-28.796c0-5.891,4.781-10.672,10.672-10.672s10.664,4.781,10.664,10.672l71.483,23.952 c5.625-1.75,11.609,1.375,13.367,7c1.75,5.625-1.383,11.609-7,13.359l-42.671,13.344C98.139,242.496,97.068,242.668,95.998,242.668 z"/> <path style="fill:#434A54;" d="M353.993,175.997c-1.094,0-68.186,10.5-69.264,10.156c-5.609-1.812-8.703-7.812-6.891-13.422 c6.25-19.452,20.905-35.812,42.342-47.312c15.688-8.422,29.641-11.359,30.219-11.484c5.781-1.188,11.422,2.531,12.625,8.297 C364.212,127.998,358.493,175.997,353.993,175.997z"/> </g> <path style="fill:#E6E9ED;" d="M148.481,317.446c-0.312,0-0.617,0-0.93-0.031c-5.875-0.516-10.218-5.672-9.71-11.545l5.765-66.796 c0.508-5.859,5.672-10.203,11.547-9.703c5.867,0.5,10.21,5.672,9.703,11.547l-5.765,66.78 C158.614,313.259,153.958,317.446,148.481,317.446z"/> <g> <path style="fill:#434A54;" d="M85.334,261.323C38.28,261.323,0,299.604,0,346.665c0,47.047,38.28,85.326,85.334,85.326 c47.046,0,85.326-38.279,85.326-85.326C170.661,299.604,132.38,261.323,85.334,261.323z"/> <path style="fill:#434A54;" d="M426.647,261.323c-47.029,0-85.311,38.281-85.311,85.342c0,47.047,38.281,85.326,85.311,85.326 c47.062,0,85.343-38.279,85.343-85.326C511.99,299.604,473.71,261.323,426.647,261.323z"/> </g> <g> <path style="fill:#CCD1D9;" d="M85.334,309.321c-20.586,0-37.335,16.75-37.335,37.344c0,20.578,16.75,37.328,37.335,37.328 s37.327-16.75,37.327-37.328C122.662,326.071,105.92,309.321,85.334,309.321z"/> <path style="fill:#CCD1D9;" d="M426.647,309.321c-20.577,0-37.311,16.75-37.311,37.344c0,20.578,16.733,37.328,37.311,37.328 c20.594,0,37.344-16.75,37.344-37.328C463.991,326.071,447.241,309.321,426.647,309.321z"/> </g> <path style="fill:#E6E9ED;" d="M85.342,357.321c-3.539,0-7-1.75-9.031-4.969c-3.141-4.984-1.656-11.562,3.328-14.719l101.326-63.998 c4.984-3.141,11.57-1.656,14.718,3.328c3.141,4.984,1.656,11.578-3.328,14.719L91.029,355.681 C89.256,356.79,87.287,357.321,85.342,357.321z"/> <path d="M274.214,290.198c-4.172,4.172-10.93,4.172-15.094,0c-4.164-4.156-4.164-10.906,0-15.078s10.922-4.172,15.094,0 C278.37,279.292,278.37,286.042,274.214,290.198z"/> <path style="fill:#4A89DC;" d="M483.366,187.216l-64-21.344c-1.094-0.359-2.218-0.547-3.374-0.547h-46.405 c-5.891,0-10.656,4.781-10.656,10.672s4.766,10.672,10.656,10.672h44.687l62.343,20.78c1.125,0.375,2.25,0.547,3.375,0.547 c4.469,0,8.625-2.827,10.125-7.296C491.975,195.122,488.96,189.075,483.366,187.216z"/> <path style="fill:#CCD1D9;" d="M309.338,314.665H202.66c-3.352,0-6.516-1.594-8.531-4.266l-62.202-82.95L28.038,185.903 c-4.75-1.906-7.484-6.906-6.516-11.922s5.359-8.656,10.477-8.656h254.527l73.139-20.608c5.484-1.531,11.203,1.484,13.016,6.891 l7.031,21.015c0.859,2.594,0.688,5.438-0.469,7.922l-60.266,127.996C317.212,312.274,313.463,314.665,309.338,314.665z"/> <g> <path style="fill:#E6E9ED;" d="M223.995,229.324c-17.648,0-32,14.359-32,31.999c0,17.656,14.352,32,32,32c17.648,0,32-14.344,32-32 C255.995,243.683,241.643,229.324,223.995,229.324z"/> <path style="fill:#E6E9ED;" d="M270.175,203.513c-5.789-1.109-11.375,2.703-12.477,8.483c-1.102,5.781,2.695,11.375,8.484,12.469 c17.031,3.25,30.546,16.875,40.202,40.499c7.766,18.984,9.843,37.328,9.89,37.719c0.25,2.312,1.219,4.359,2.656,5.967 c0-0.047,0.031-0.078,0.047-0.109l14.234-30.248C326.399,252.058,309.588,211.027,270.175,203.513z"/> </g> <path style="fill:#5D9CEC;" d="M131.927,227.449L28.038,185.903c-4.75-1.906-7.484-6.906-6.516-11.922s5.359-8.656,10.477-8.656 h254.527l73.139-20.608c5.484-1.531,11.203,1.484,13.016,6.891l7.031,21.015c0.859,2.594,0.688,5.438-0.469,7.922l-11.25,23.875 C367.993,204.419,306.322,246.668,131.927,227.449z"/> <path style="fill:#4A89DC;" d="M105.764,165.325H31.999c-5.117,0-9.508,3.641-10.477,8.656c-0.969,5.015,1.766,10.016,6.516,11.922 l103.889,41.546c26.335,2.906,50.101,4.406,71.475,4.859C177.77,188.388,128.88,169.325,105.764,165.325z"/> <path style="fill:#E6E9ED;" d="M426.647,357.337c-4.469,0-8.625-2.828-10.108-7.297l-82.89-248.713h-24.312 c-5.906,0-10.688-4.766-10.688-10.656s4.781-10.672,10.688-10.672h31.999c4.578,0,8.656,2.938,10.109,7.297l85.326,255.994 c1.875,5.578-1.156,11.625-6.75,13.484C428.913,357.149,427.772,357.337,426.647,357.337z"/> </g>
                </svg>`
            },
            {
                name:"belleza",
                iconSVG:`<svg version="1.1" id="flowers" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 41.3632 60" enable-background="new 0 0 41.3632 60" xml:space="preserve" fill="#000000">
                <g id="SVGRepo_bgCarrier" stroke-width="0"/><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"/>
                <g id="SVGRepo_iconCarrier"> <g id="flowers-colors"> <polygon fill="#FDE3E3" points="38.1816,24.3008 20.6816,59 3.1816,24.3008 "/> <path fill="#F16061" d="M6.207,14.9102c-0.2832-0.7383-0.624-1.4004-1.0117-1.9688l-0.334-0.4922l0.3183-0.6133l1.9649-4.4043 l1.9512,4.293c0.0195,0.0254,0.0371,0.0527,0.0537,0.0801l0.3379,0.5547l-0.3692,0.5342 c-0.4004,0.5791-0.7519,1.2578-1.0439,2.0175l-0.9336,2.4248L6.207,14.9102z"/> <path fill="#F16061" d="M5.8925,20.5684c-1.6679-0.3799-4.5185-2.0704-4.8584-9.125l-0.0839-1.75L2.5,10.5107 c1.5927,0.8409,4.3105,3.1309,4.6132,9.0303l0.0674,1.3203L5.8925,20.5684z"/> <path fill="#F16061" d="M7.1679,19.5391c0.3028-5.9219,3.0225-8.2041,4.6172-9.0371l1.5488-0.8086l-0.0878,1.7451 c-0.1749,3.5068-0.9766,6.0732-2.3848,7.6299c-0.8711,0.9628-1.8223,1.3447-2.4668,1.4951l-1.294,0.3017L7.1679,19.5391z"/> <path fill="#F16061" d="M33.29,14.9111c-0.2842-0.7402-0.625-1.4033-1.0117-1.9707l-0.335-0.4912l0.3194-0.6152l1.9628-4.4024 l1.9512,4.293c0.0195,0.0264,0.0371,0.0527,0.0547,0.0811l0.3369,0.5537l-0.3681,0.5342c-0.4004,0.58-0.751,1.2587-1.043,2.0166 l-0.9336,2.4257L33.29,14.9111z"/> <path fill="#F16061" d="M32.9755,20.5684c-1.6689-0.3799-4.5185-2.0704-4.8584-9.125l-0.0839-1.75l1.5498,0.8173 c1.5927,0.8409,4.3105,3.1319,4.6132,9.0303l0.0674,1.3203L32.9755,20.5684z"/> <path fill="#F16061" d="M34.2509,19.5391c0.3018-5.9219,3.0205-8.2032,4.6153-9.0362l1.5488-0.8095l-0.0869,1.7461 c-0.1758,3.5058-0.9785,6.0722-2.3838,7.6289c-0.8721,0.9628-1.8223,1.3447-2.4668,1.4951l-1.2939,0.3017L34.2509,19.5391z"/> <path fill="#F16061" d="M19.748,8.4785c-0.2842-0.7402-0.625-1.4023-1.0117-1.9707l-0.334-0.4902l0.3174-0.6133L20.6845,1 l1.9532,4.293c0.0185,0.0254,0.0361,0.0527,0.0527,0.08l0.3379,0.5547l-0.3701,0.5332c-0.4004,0.5791-0.751,1.2578-1.043,2.0176 l-0.9336,2.4268L19.748,8.4785z"/> <path fill="#F16061" d="M19.4336,14.1357c-1.669-0.3798-4.5186-2.0712-4.8584-9.1259l-0.084-1.75l1.5498,0.8183 c1.5927,0.8399,4.3105,3.1309,4.6133,9.0313l0.0673,1.3203L19.4336,14.1357z"/> <path fill="#F16061" d="M20.7089,13.1064c0.3018-5.9228,3.0215-8.2041,4.6163-9.0361l1.5488-0.8086l-0.0869,1.7451 c-0.1758,3.5069-0.9785,6.0733-2.3838,7.628c-0.8721,0.9648-1.8242,1.3457-2.4688,1.4961l-1.292,0.3007L20.7089,13.1064z"/> </g> <g id="flowers-line"> <g> <path fill="#393939" d="M20.6816,60c-0.377,0-0.7227-0.2129-0.8926-0.5498L2.289,24.751 c-0.1562-0.3096-0.1406-0.6787,0.041-0.9746c0.1817-0.2959,0.5039-0.4756,0.8516-0.4756h35c0.3477,0,0.6699,0.1797,0.8516,0.4756 c0.1816,0.2959,0.1972,0.665,0.041,0.9746l-17.5,34.6992C21.4043,59.7871,21.0586,60,20.6816,60L20.6816,60z M4.8066,25.3008 l15.875,31.4785l15.875-31.4785H4.8066L4.8066,25.3008z"/> </g> <g> <path fill="#393939" d="M5.1425,12.917c-0.1357,0-0.2734-0.0274-0.4062-0.0869c-0.5039-0.2246-0.7305-0.8164-0.5059-1.3203 l2.001-4.4854c0.1611-0.3603,0.5049-0.6406,0.9131-0.5928c0.3926,0,0.748,0.2295,0.9101,0.586l1.9932,4.3857 c0.2285,0.5029,0.0068,1.0957-0.4971,1.3242c-0.5,0.2295-1.0957,0.0069-1.3232-0.4961L7.1523,9.8672l-1.0957,2.457 C5.8906,12.6963,5.5254,12.917,5.1425,12.917L5.1425,12.917z"/> </g> <g> <path fill="#393939" d="M6.8037,21.6729C5.207,21.6729,0,20.8291,0,9.9658c0-0.291,0.1269-0.5674,0.3466-0.7568 c0.2207-0.1904,0.5127-0.2725,0.7998-0.2324c0.2852,0.042,6.9942,1.1552,6.9942,11.6767c0,0.4863-0.3662,0.9043-0.8447,0.9883 C7.2959,21.6416,7.1152,21.6729,6.8037,21.6729L6.8037,21.6729z M2.0332,11.3945c0.3076,6.3897,2.6855,7.8809,4.081,8.1983 C5.8398,14.2344,3.498,12.168,2.0332,11.3945L2.0332,11.3945z"/> </g> <g> <path fill="#393939" d="M7.4785,21.6729c0,0,0,0-0.001,0c-0.3105,0-0.4922-0.0313-0.4922-0.0313 c-0.4785-0.084-0.8447-0.502-0.8447-0.9883c0-10.5215,6.709-11.6347,6.9951-11.6767c0.2861-0.0401,0.5791,0.042,0.7998,0.2324 c0.2207,0.1894,0.3467,0.4658,0.3467,0.7568c0,4.5196-0.9014,7.8076-2.6787,9.7735C10.0254,21.4844,8.1933,21.6729,7.4785,21.6729 L7.4785,21.6729z M12.248,11.3887c-1.4678,0.7666-3.8066,2.8252-4.081,8.2011c0.5478-0.1279,1.2744-0.4414,1.9531-1.1923 C11.3593,17.0273,12.0859,14.6201,12.248,11.3887L12.248,11.3887z"/> </g> <g> <path fill="#393939" d="M7.1406,25.0078c-0.5527,0-1-0.4473-1-1v-3.3545c0-0.5527,0.4473-1,1-1c0.5527,0,1,0.4473,1,1v3.3545 C8.1406,24.5605,7.6933,25.0078,7.1406,25.0078L7.1406,25.0078z"/> </g> <g> <path fill="#393939" d="M32.2246,12.917c-0.1358,0-0.2735-0.0274-0.4063-0.0869c-0.5039-0.2246-0.7304-0.8164-0.5058-1.3203 l2.0009-4.4854c0.1602-0.3594,0.5166-0.5918,0.9092-0.5928c0.002,0,0.0029,0,0.0039,0c0.3926,0,0.7481,0.2295,0.9102,0.587 l1.9922,4.3847c0.2285,0.5029,0.0058,1.0957-0.4961,1.3242c-0.5049,0.2305-1.0967,0.0049-1.3242-0.4961l-1.0743-2.3632 l-1.0957,2.456C32.9726,12.6963,32.6074,12.917,32.2246,12.917L32.2246,12.917z"/> </g> <g> <path fill="#393939" d="M33.8867,21.6729c-1.5957,0-6.8037-0.8438-6.8037-11.7071c0-0.291,0.1259-0.5674,0.3466-0.7568 c0.2198-0.1904,0.5127-0.2725,0.7999-0.2324c0.2861,0.042,6.9941,1.1552,6.9941,11.6767c0,0.4863-0.3662,0.9043-0.8447,0.9883 C34.3789,21.6416,34.1972,21.6729,33.8867,21.6729L33.8867,21.6729z M29.1162,11.3945c0.3076,6.3897,2.6845,7.8809,4.081,8.1983 C32.9228,14.2344,30.582,12.168,29.1162,11.3945L29.1162,11.3945z"/> </g> <g> <path fill="#393939" d="M34.5605,21.6729L34.5605,21.6729c-0.3105,0-0.4922-0.0313-0.4922-0.0313 c-0.4785-0.084-0.8447-0.502-0.8447-0.9883c0-10.5215,6.708-11.6347,6.9932-11.6767c0.2851-0.0401,0.58,0.042,0.7998,0.2324 c0.2197,0.1894,0.3466,0.4658,0.3466,0.7568c0,4.5196-0.9003,7.8076-2.6777,9.7725 C37.1074,21.4844,35.2754,21.6729,34.5605,21.6729L34.5605,21.6729z M39.3291,11.3887c-1.4678,0.7666-3.8057,2.8252-4.0791,8.2011 c0.5468-0.1279,1.2734-0.4414,1.9511-1.1923C38.4404,17.0273,39.1679,14.6211,39.3291,11.3887L39.3291,11.3887z"/> </g> <g> <path fill="#393939" d="M34.2236,25.0078c-0.5518,0-1-0.4473-1-1v-3.3545c0-0.5527,0.4482-1,1-1c0.5518,0,1,0.4473,1,1v3.3545 C35.2236,24.5605,34.7754,25.0078,34.2236,25.0078L34.2236,25.0078z"/> </g> <g> <path fill="#393939" d="M18.6836,6.4854c-0.1368,0-0.2754-0.0274-0.4073-0.087c-0.5049-0.2246-0.7314-0.8164-0.5058-1.3203 l2.0009-4.4853C19.9316,0.2334,20.2871,0.001,20.6816,0c0,0,0.002,0,0.0029,0c0.3916,0,0.7481,0.2295,0.9102,0.5859l1.9941,4.3848 c0.2295,0.5029,0.0069,1.0957-0.4961,1.3242c-0.5029,0.2295-1.0966,0.0059-1.3242-0.4961l-1.0752-2.3642l-1.0967,2.458 C19.4306,6.2646,19.0654,6.4854,18.6836,6.4854L18.6836,6.4854z"/> </g> <g> <path fill="#393939" d="M20.3437,15.2402c-1.5957,0-6.8027-0.8437-6.8027-11.707c0-0.291,0.1269-0.5674,0.3467-0.7568 c0.2197-0.1905,0.5146-0.2705,0.7998-0.2325c0.2851,0.042,6.9941,1.1553,6.9941,11.6768c0,0.4863-0.3652,0.9043-0.8447,0.9883 C20.8369,15.209,20.6552,15.2402,20.3437,15.2402L20.3437,15.2402z M15.5742,4.9619c0.3076,6.3906,2.6855,7.8809,4.081,8.1983 C19.3808,7.8018,17.039,5.7354,15.5742,4.9619L15.5742,4.9619z"/> </g> <g> <path fill="#393939" d="M21.0195,15.2402L21.0195,15.2402c-0.3115,0-0.4932-0.0312-0.4932-0.0312 c-0.4785-0.084-0.8447-0.502-0.8447-0.9883c0-10.5215,6.709-11.6348,6.9941-11.6768c0.2872-0.039,0.5801,0.042,0.7998,0.2325 c0.2198,0.1894,0.3467,0.4658,0.3467,0.7568c0,4.5186-0.9004,7.8066-2.6777,9.7725 C23.5664,15.0518,21.7343,15.2402,21.0195,15.2402L21.0195,15.2402z M25.788,4.9561c-1.4677,0.7666-3.8056,2.8251-4.08,8.2011 c0.5478-0.1279,1.2744-0.4414,1.9531-1.1924C24.8994,10.5947,25.6269,8.1875,25.788,4.9561L25.788,4.9561z"/> </g> <g> <path fill="#393939" d="M20.6816,25.0078c-0.5527,0-1-0.4473-1-1v-9.7871c0-0.5527,0.4473-1,1-1c0.5527,0,1,0.4473,1,1v9.7871 C21.6816,24.5605,21.2343,25.0078,20.6816,25.0078L20.6816,25.0078z"/> </g> </g> </g>
                </svg>`
            },
            {
                name:"escape",
                iconSVG:`<svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 512 512" xml:space="preserve" fill="#000000">
                <g id="SVGRepo_bgCarrier" stroke-width="0"/><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"/>
                <g id="SVGRepo_iconCarrier"> <polygon style="fill:#B3592B;" points="256,0 235.085,24.608 256,48.507 420.417,48.507 420.417,512 468.924,512 468.924,0 "/> <polygon style="fill:#C75214;" points="377.296,91.628 234.44,70.068 213.525,282.949 234.44,495.829 377.296,479.659 "/> <polygon style="fill:#E37E31;" points="91.583,48.507 70.669,282.949 91.583,512 234.44,495.829 234.44,70.068 "/> <rect x="307.722" y="246.868" style="fill:#B3592B;" width="31.347" height="66.762"/> <polygon style="fill:#C75214;" points="43.076,0 43.076,512 91.583,512 91.583,48.507 256,48.507 256,0 "/> </g>
                </svg>`
            },
            {
                name:"casino",
                iconSVG:`<svg viewBox="0 0 73 73" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" fill="#000000">
                <g id="SVGRepo_bgCarrier" stroke-width="0"/><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"/>
                <g id="SVGRepo_iconCarrier"> <desc>Created with Sketch.</desc> <defs> <rect id="path-1" x="0" y="0" width="69" height="69" rx="14"> </rect> </defs> <g id="web-components/slots" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"> <g id="container" transform="translate(2.000000, 2.000000)"> <rect id="mask" stroke="#AE2318" stroke-width="2" fill="#ED6D7D" fill-rule="nonzero" x="-1" y="-1" width="71" height="71" rx="14"> </rect> <g id="slot-machine-(2)"> <mask id="mask-2" fill="white"> <use xlink:href="#path-1"> </use> </mask> <rect stroke="#AE2318" stroke-width="2" x="-1" y="-1" width="71" height="71" rx="14"> </rect> <g mask="url(#mask-2)"> <g transform="translate(-2.000000, -4.000000)"> <path d="M64.3027344,21.3867188 L8.69726562,21.3867188 C7.51614844,21.3867188 6.55859375,20.4291641 6.55859375,19.2480469 C6.55859375,8.63467383 15.3325664,0 26.1171758,0 L46.8826816,0 C57.6674336,0 66.4414062,8.63467383 66.4414062,19.2480469 C66.4414062,20.4291641 65.4838516,21.3867188 64.3027344,21.3867188 Z" id="Shape" fill="#FDF16C" fill-rule="nonzero"> </path> <path d="M46.8826816,0 L36.5,0 L36.5,21.3867188 L64.3027344,21.3867188 C65.4838516,21.3867188 66.4414062,20.4291641 66.4414062,19.2480469 C66.4414062,8.63467383 57.6674336,0 46.8826816,0 Z" id="Shape" fill="#FAE168" fill-rule="nonzero"> </path> <circle id="Oval" fill="#ED6D7D" fill-rule="nonzero" cx="32.2226562" cy="10.6933594" r="2.13867188"> </circle> <circle id="Oval" fill="#ED6D7D" fill-rule="nonzero" cx="23.6679688" cy="10.6933594" r="2.13867188"> </circle> <circle id="Oval" fill="#D44854" fill-rule="nonzero" cx="40.7773438" cy="10.6933594" r="2.13867188"> </circle> <circle id="Oval" fill="#D44854" fill-rule="nonzero" cx="49.3320312" cy="10.6933594" r="2.13867188"> </circle> <path d="M65.1582031,73 L7.84179688,73 C3.51783008,73 0,69.4821699 0,65.1582031 L0,24.9511719 C0,20.6272051 3.51783008,17.109375 7.84179688,17.109375 L65.1582031,17.109375 C69.4821699,17.109375 73,20.6272051 73,24.9511719 L73,65.1582031 C73,69.4821699 69.4821699,73 65.1582031,73 Z" id="Shape" fill="#ED6D7D" fill-rule="nonzero"> </path> <path d="M65.1582031,17.109375 L36.5,17.109375 L36.5,73 L65.1582031,73 C69.4821699,73 73,69.4821699 73,65.1582031 L73,24.9511719 C73,20.6272051 69.4821699,17.109375 65.1582031,17.109375 Z" id="Shape" fill="#D44854" fill-rule="nonzero"> </path> <polygon id="Shape" fill="#FFFFFF" fill-rule="nonzero" points="10.8359375 27.9524414 62.1640625 27.9524414 62.1640625 53.6165039 10.8359375 53.6165039"> </polygon> <polygon id="Shape" fill="#E4DFD9" fill-rule="nonzero" points="36.5 27.9524414 62.1640625 27.9524414 62.1640625 53.6165039 36.5 53.6165039"> </polygon> <path d="M27.9453125,27.1386055 C26.7641953,27.1386055 25.8066406,28.0113262 25.8066406,29.0880762 L25.8066406,52.4808691 C25.8066406,53.5574766 26.7641953,54.4303398 27.9453125,54.4303398 C29.1264297,54.4303398 30.0839844,53.5576191 30.0839844,52.4808691 L30.0839844,29.0880762 C30.0839844,28.0114688 29.1264297,27.1386055 27.9453125,27.1386055 Z" id="Shape" fill="#D44854" fill-rule="nonzero"> </path> <path d="M45.0546875,27.1386055 C43.8735703,27.1386055 42.9160156,28.0113262 42.9160156,29.0880762 L42.9160156,52.4808691 C42.9160156,53.5574766 43.8735703,54.4303398 45.0546875,54.4303398 C46.2358047,54.4303398 47.1933594,53.5576191 47.1933594,52.4808691 L47.1933594,29.0880762 C47.1933594,28.0114688 46.2358047,27.1386055 45.0546875,27.1386055 Z" id="Shape" fill="#AE2318" fill-rule="nonzero"> </path> <path d="M62.1640625,55.7551758 L10.8359375,55.7551758 C9.65482031,55.7551758 8.69726562,54.7976211 8.69726562,53.6165039 L8.69726562,27.9524414 C8.69726562,26.7713242 9.65482031,25.8137695 10.8359375,25.8137695 L62.1640625,25.8137695 C63.3451797,25.8137695 64.3027344,26.7713242 64.3027344,27.9524414 L64.3027344,53.6165039 C64.3027344,54.7976211 63.3451797,55.7551758 62.1640625,55.7551758 Z M12.9746094,51.477832 L60.0253906,51.477832 L60.0253906,30.0911133 L12.9746094,30.0911133 L12.9746094,51.477832 Z" id="Shape" fill="#D44854" fill-rule="nonzero"> </path> <polygon id="Shape" fill="none" points="36.5 30.0911133 60.0253906 30.0911133 60.0253906 51.477832 36.5 51.477832"> </polygon> <polygon id="Shape" fill="none" points="12.9746094 30.0911133 36.5 30.0911133 36.5 51.477832 12.9746094 51.477832"> </polygon> <path d="M62.1640625,25.8137695 L36.5,25.8137695 L36.5,30.0911133 L60.0253906,30.0911133 L60.0253906,51.477832 L36.5,51.477832 L36.5,55.7551758 L62.1640625,55.7551758 C63.3451797,55.7551758 64.3027344,54.7976211 64.3027344,53.6165039 L64.3027344,27.9524414 C64.3027344,26.7713242 63.3451797,25.8137695 62.1640625,25.8137695 Z" id="Shape" fill="#AE2318" fill-rule="nonzero"> </path> <path d="M22.1449492,37.1364687 C22.0519883,36.9337227 21.8495273,36.803834 21.6265352,36.803834 L16.7155742,36.803834 C16.4006191,36.803834 16.1452617,37.0591914 16.1452617,37.3741465 L16.1452617,38.6118672 C16.1452617,38.9268223 16.4006191,39.1821797 16.7155742,39.1821797 L19.3767949,39.1821797 L16.801834,43.9921953 C16.7071621,44.1688496 16.7122949,44.3822891 16.8153789,44.5543809 C16.9184629,44.7263301 17.1040996,44.8315527 17.304707,44.8315527 L19.0015293,44.8315527 C19.2148262,44.8315527 19.4103008,44.7125 19.5081094,44.5231562 L22.572541,38.5941875 C22.6530977,38.4383496 22.6575176,38.2539961 22.584375,38.0945937 L22.1449492,37.1364687 Z" id="Shape" fill="#5A5555" fill-rule="nonzero"> </path> <path d="M39.2543242,37.1364687 C39.1613633,36.9338652 38.9589023,36.803834 38.7357676,36.803834 L33.8248066,36.803834 C33.5098516,36.803834 33.2544941,37.0591914 33.2544941,37.3741465 L33.2544941,38.6118672 C33.2544941,38.9268223 33.5098516,39.1821797 33.8248066,39.1821797 L36.4858848,39.1821797 L33.9109238,43.9921953 C33.816252,44.1688496 33.8213848,44.3822891 33.9244687,44.5543809 C34.0275527,44.7263301 34.2131895,44.8315527 34.4137969,44.8315527 L36.1106191,44.8315527 C36.323916,44.8315527 36.5193906,44.7125 36.6171992,44.5231562 L39.6816309,38.5941875 C39.7620449,38.4383496 39.7664648,38.2541387 39.6934648,38.0945937 L39.2543242,37.1364687 Z" id="Shape" fill="#5A5555" fill-rule="nonzero"> </path> <path d="M39.6934648,38.0947363 L39.2543242,37.1364687 C39.1613633,36.9338652 38.9589023,36.803834 38.7357676,36.803834 L36.5,36.803834 L36.5,44.6762852 C36.546623,44.6326563 36.5869727,44.5817559 36.6173418,44.5231562 L39.6817734,38.5941875 C39.7621875,38.4384922 39.7664648,38.2542812 39.6934648,38.0947363 Z" id="Shape" fill="#453F3F" fill-rule="nonzero"> </path> <path d="M56.8028398,38.0947363 L56.3636992,37.1364687 C56.2707383,36.9338652 56.0682773,36.803834 55.8451426,36.803834 L50.9343242,36.803834 C50.6193691,36.803834 50.3640117,37.0591914 50.3640117,37.3741465 L50.3640117,38.6118672 C50.3640117,38.9268223 50.6193691,39.1821797 50.9343242,39.1821797 L53.5952598,39.1821797 L51.0204414,43.9921953 C50.9257695,44.1688496 50.9309023,44.3822891 51.0339863,44.5543809 C51.1370703,44.7263301 51.322707,44.8315527 51.5233145,44.8315527 L53.2199941,44.8315527 C53.433291,44.8315527 53.628623,44.7125 53.7267168,44.5231562 L56.7910059,38.5941875 C56.8715625,38.4384922 56.8758398,38.2542812 56.8028398,38.0947363 Z" id="Shape" fill="#453F3F" fill-rule="nonzero"> </path> <path d="M62.1640625,64.5878906 L10.8359375,64.5878906 C9.65482031,64.5878906 8.69726562,63.6303359 8.69726562,62.4492188 C8.69726562,61.2681016 9.65482031,60.3105469 10.8359375,60.3105469 L62.1640625,60.3105469 C63.3451797,60.3105469 64.3027344,61.2681016 64.3027344,62.4492188 C64.3027344,63.6303359 63.3451797,64.5878906 62.1640625,64.5878906 Z" id="Shape" fill="#D44854" fill-rule="nonzero"> </path> <path d="M62.1640625,60.3105469 L36.5,60.3105469 L36.5,64.5878906 L62.1640625,64.5878906 C63.3451797,64.5878906 64.3027344,63.6303359 64.3027344,62.4492188 C64.3027344,61.2681016 63.3451797,60.3105469 62.1640625,60.3105469 Z" id="Shape" fill="#AE2318" fill-rule="nonzero"> </path> </g> </g> </g> </g> </g> </g>
                </svg>`
            },
            {
                name:"minecraft",
                iconSVG:`<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-label="Minecraft" role="img" viewBox="0 0 512 512" stroke-linecap="square" fill="none">
                <g id="SVGRepo_bgCarrier" stroke-width="0"/><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"/>
                <g id="SVGRepo_iconCarrier"> <rect width="512" height="512" rx="15%" fill="#111"/> <g id="a" transform="matrix(19 11 0 22 76 142)"> <path fill="#432" d="M.5.5h9v9h-9"/> <path stroke="#864" d="M2 8v1h2V8h5V7 H7V5"/> <path stroke="#643" d="M1 5zM2 9zM1 8V7h2V6h1M5 9h2V8H6V4M7 6h1v1M9 9zM9 4v1"/> <path stroke="#a75" d="M1 7h1M4 7h1M9 6z"/> <path stroke="#555" d="M5 5z"/> <path stroke="#593" d="M4 4V1h4v2H7V2H4v1H2v1"/> <path stroke="#6a4" d="M2 1h1M6 1zM7 2zM9 1v1"/> <path stroke="#7c5" d="M5 3zM3 2h1"/> <path stroke="#9c6" d="M1 1v1h1M8 1z"/> </g> <use xlink:href="#a" transform="matrix(-1 0 0 1 513 0)" opacity=".5"/> <g transform="matrix(-19 11-19-11 447 159)"> <path fill="#7b4" d="M.5.5h9v9h-9"/> <path stroke="#8c5" d="M1 1zM3 1zM4 7zM3 4v2H1v2h3v1h2V7M2 3h4V1H5v1h3M7 4v1H4M9 4v2H8v3"/> <path stroke="#ad7" d="M1 3v2M1 7zM1 9zM3 3zM4 4zM5 1zM5 3zM5 5v1M5 8v1M7 2v1M8 7h1"/> </g> </g>
                </svg>`
            },
            {
                name:"clasicos",
                iconSVG:`<svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 511.983 511.983" xml:space="preserve" fill="#000000">
                <g id="SVGRepo_bgCarrier" stroke-width="0"/><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"/>
                <g id="SVGRepo_iconCarrier"> <rect x="341.321" y="277.342" style="fill:#FC6E51;" width="159.99" height="170.65"/> <path style="fill:#E9573F;" d="M501.311,266.66H341.317c-5.891,0-10.656,4.781-10.656,10.68v170.65 c0,5.906,4.766,10.656,10.656,10.656h159.994c5.891,0,10.672-4.75,10.672-10.656V277.34 C511.983,271.441,507.202,266.66,501.311,266.66z M490.655,319.994h-21.344v-32h21.344V319.994z M394.659,319.994v-32h53.326v32 H394.659z M410.657,341.338v42.654h-58.67v-42.654H410.657z M447.985,405.334v32h-53.326v-32H447.985z M431.985,383.992v-42.654 h58.67v42.654H431.985z M373.315,287.994v32h-21.328v-32H373.315z M351.987,405.334h21.328v32h-21.328V405.334z M469.311,437.334 v-32h21.344v32H469.311z"/> <rect x="10.671" y="277.342" style="fill:#FC6E51;" width="160" height="170.65"/> <path style="fill:#E9573F;" d="M170.666,266.66H10.671C4.781,266.66,0,271.441,0,277.34v170.65c0,5.906,4.781,10.656,10.671,10.656 h159.995c5.89,0,10.656-4.75,10.656-10.656V277.34C181.322,271.441,176.556,266.66,170.666,266.66z M159.994,319.994h-21.327v-32 h21.327V319.994z M63.997,319.994v-32h53.326v32H63.997z M79.997,341.338v42.654h-58.67v-42.654H79.997z M117.324,405.334v32H63.997 v-32H117.324z M101.324,383.992v-42.654h58.67v42.654H101.324z M42.67,287.994v32H21.327v-32H42.67z M21.327,405.334H42.67v32 H21.327V405.334z M138.667,437.334v-32h21.327v32H138.667z"/> <rect x="202.661" y="187.661" style="fill:#CCD1D9;" width="106.65" height="89.68"/> <path style="fill:#ED5564;" d="M355.659,150.303c-12.547-70.576-76.902-96.903-99.668-96.966 c-22.765,0.062-87.122,26.39-99.668,96.966c-6.328,35.624,5.156,74.545,19.921,74.545c14.781,0,28.937-7.844,44.186-9.656 c15.25-1.797,53.593-1.797,68.841,0c15.25,1.812,31.688,9.656,46.469,9.656C350.503,224.848,361.987,185.928,355.659,150.303z"/> <g> <path style="fill:#E6E9ED;" d="M356.331,154.617c-0.031,0-55.092,10.812-55.232,62.904l0,0c11.672,2.969,23.625,7.328,34.641,7.328 C349.909,224.848,361.065,188.99,356.331,154.617z"/> <path style="fill:#E6E9ED;" d="M156.323,150.303c117.309,8.484,59.842-83.841,59.779-83.95 C191.04,80.541,163.994,107.149,156.323,150.303z"/> </g> <path style="fill:#FFCE54;" d="M341.317,266.66H170.666c-5.891,0-10.672,4.781-10.672,10.68v170.65 c0,5.906,4.781,10.656,10.672,10.656h170.651c5.889,0,10.67-4.75,10.67-10.656V277.34 C351.987,271.441,347.206,266.66,341.317,266.66z"/> <g> <path style="fill:#F6BB42;" d="M210.196,316.869c-4.156,4.156-10.906,4.156-15.078,0s-4.172-10.906,0-15.094 c4.172-4.156,10.921-4.156,15.078,0C214.367,305.963,214.367,312.713,210.196,316.869z"/> <path style="fill:#F6BB42;" d="M316.864,316.869c-4.172,4.156-10.922,4.156-15.078,0c-4.172-4.156-4.172-10.906,0-15.094 c4.156-4.156,10.906-4.156,15.078,0C321.036,305.963,321.036,312.713,316.864,316.869z"/> <path style="fill:#F6BB42;" d="M210.196,423.521c-4.156,4.188-10.906,4.188-15.078,0c-4.172-4.156-4.172-10.906,0-15.062 c4.172-4.186,10.921-4.186,15.078,0C214.367,412.615,214.367,419.365,210.196,423.521z"/> <path style="fill:#F6BB42;" d="M316.864,423.521c-4.172,4.188-10.922,4.188-15.078,0c-4.172-4.156-4.172-10.906,0-15.062 c4.156-4.186,10.906-4.186,15.078,0C321.036,412.615,321.036,419.365,316.864,423.521z"/> </g> <g style="opacity:0.2;"> <path style="fill:#FFFFFF;" d="M355.659,150.303c-12.547-70.576-76.902-96.903-99.668-96.966c-1.578,0-3.375,0.141-5.328,0.406 c26.141,3.547,82.654,30.89,94.324,96.56c5.875,33.062-3.594,68.951-16.779,73.951c2.547,0.375,5.062,0.594,7.531,0.594 C350.503,224.848,361.987,185.928,355.659,150.303z"/> </g> </g>
                </svg>`
            }
        ]
    }

    class Utils{
        static SVGTemplate=(content, customClass='',customId='')=> (`<div class='container-svg ${customClass}' ${customId != '' ?`id=${customId}`:''}>${content}</div>`);

        static LinksTemplate=(content,customClass)=>{
           
           return `<a class="${customClass}"> ${content}</a>`;
        }

        //los svg si no le determinas el tamaño, se adaptan a su contenedor
        static customSVG = (name, color)=>{

            const SVGS = {
                SVG_PROFILE : `<svg viewBox="0 0 36 36" xmlns="http://www.w3.org/2000/svg" stroke="${color}" fill="none" stroke-width="2">
                <g id="SVGRepo_bgCarrier" stroke-width="0"/>
                <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"/>
                <g id="SVGRepo_iconCarrier">
                   <path d="M18,17a7,7,0,1,0-7-7A7,7,0,0,0,18,17Z" stroke-linecap="round" stroke-linejoin="round"/>
                   <path d="M30.47,24.37a17.16,17.16,0,0,0-24.93,0A2,2,0,0,0,5,25.74V31a2,2,0,0,0,2,2H29a2,2,0,0,0,2-2V25.74A2,2,0,0,0,30.47,24.37Z" stroke-linecap="round" stroke-linejoin="round"/>
                </g>
                </svg>`,
    
                SVG_CART : `<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="${color}" stroke-width="1.5">
                <g id="SVGRepo_bgCarrier" stroke-width="0"/>
                <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"/>
                <g id="SVGRepo_iconCarrier">
                    <path d="M6.29977 5H21L19 12H7.37671M20 16H8L6 3H3M9 20C9 20.5523 8.55228 21 8 21C7.44772 21 7 20.5523 7 20C7 19.4477 7.44772 19 8 19C8.55228 19 9 19.4477 9 20ZM20 20C20 20.5523 19.5523 21 19 21C18.4477 21 18 20.5523 18 20C18 19.4477 18.4477 19 19 19C19.5523 19 20 19.4477 20 20Z" stroke-linecap="round" stroke-linejoin="round"/>
                </g>
                </svg>`,
                
                SVG_HAMBUR: `<svg fill="${color}" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <g id="SVGRepo_bgCarrier" stroke-width="0"/>
                <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"/>
                <g id="SVGRepo_iconCarrier">
                <path d="M2,4A1,1,0,0,1,3,3H21a1,1,0,0,1,0,2H3A1,1,0,0,1,2,4Zm1,9H21a1,1,0,0,0,0-2H3a1,1,0,0,0,0,2Zm0,8H21a1,1,0,0,0,0-2H3a1,1,0,0,0,0,2Z"/>
                </g>
                </svg>`,

                SVG_CLOSE: `<svg viewBox="-0.5 0 25 25" fill=${color} xmlns="http://www.w3.org/2000/svg" stroke=${color}>
                            <g id="SVGRepo_bgCarrier" strokeWidth="0" />
                            <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round" />
                            <g id="SVGRepo_iconCarrier">
                            <path d="M3 21.32L21 3.32001" stroke=${color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M3 3.32001L21 21.32" stroke=${color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                            </g>
                            </svg>`,

                SVG_EDIT:`<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g id="SVGRepo_bgCarrier" stroke-width="0"/>
                        <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"/>
                        <g id="SVGRepo_iconCarrier"> <path d="M12 3.99997H6C4.89543 3.99997 4 4.8954 4 5.99997V18C4 19.1045 4.89543 20 6 20H18C19.1046 20 20 19.1045 20 18V12M18.4142 8.41417L19.5 7.32842C20.281 6.54737 20.281 5.28104 19.5 4.5C18.7189 3.71895 17.4526 3.71895 16.6715 4.50001L15.5858 5.58575M18.4142 8.41417L12.3779 14.4505C12.0987 14.7297 11.7431 14.9201 11.356 14.9975L8.41422 15.5858L9.00257 12.6441C9.08001 12.2569 9.27032 11.9013 9.54951 11.6221L15.5858 5.58575M18.4142 8.41417L15.5858 5.58575" stroke=${color} stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/> </g>
                        </svg>`,

                SVG_CONFIG:`<svg viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g id="SVGRepo_bgCarrier" stroke-width="0"/>
                            <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"/>
                            <g id="SVGRepo_iconCarrier">
                            <path clip-rule="evenodd" d="M14 20C17.3137 20 20 17.3137 20 14C20 10.6863 17.3137 8 14 8C10.6863 8 8 10.6863 8 14C8 17.3137 10.6863 20 14 20ZM18 14C18 16.2091 16.2091 18 14 18C11.7909 18 10 16.2091 10 14C10 11.7909 11.7909 10 14 10C16.2091 10 18 11.7909 18 14Z" fill=${color} fill-rule="evenodd"/>
                            <path clip-rule="evenodd" d="M0 12.9996V14.9996C0 16.5478 1.17261 17.822 2.67809 17.9826C2.80588 18.3459 2.95062 18.7011 3.11133 19.0473C2.12484 20.226 2.18536 21.984 3.29291 23.0916L4.70712 24.5058C5.78946 25.5881 7.49305 25.6706 8.67003 24.7531C9.1044 24.9688 9.55383 25.159 10.0163 25.3218C10.1769 26.8273 11.4511 28 12.9993 28H14.9993C16.5471 28 17.8211 26.8279 17.9821 25.3228C18.4024 25.175 18.8119 25.0046 19.2091 24.8129C20.3823 25.6664 22.0344 25.564 23.0926 24.5058L24.5068 23.0916C25.565 22.0334 25.6674 20.3813 24.814 19.2081C25.0054 18.8113 25.1757 18.4023 25.3234 17.9824C26.8282 17.8211 28 16.5472 28 14.9996V12.9996C28 11.452 26.8282 10.1782 25.3234 10.0169C25.1605 9.55375 24.9701 9.10374 24.7541 8.66883C25.6708 7.49189 25.5882 5.78888 24.5061 4.70681L23.0919 3.29259C21.9846 2.18531 20.2271 2.12455 19.0485 3.1103C18.7017 2.94935 18.3459 2.80441 17.982 2.67647C17.8207 1.17177 16.5468 0 14.9993 0H12.9993C11.4514 0 10.1773 1.17231 10.0164 2.6775C9.60779 2.8213 9.20936 2.98653 8.82251 3.17181C7.64444 2.12251 5.83764 2.16276 4.70782 3.29259L3.2936 4.7068C2.16377 5.83664 2.12352 7.64345 3.17285 8.82152C2.98737 9.20877 2.82199 9.60763 2.67809 10.0167C1.17261 10.1773 0 11.4515 0 12.9996ZM15.9993 3C15.9993 2.44772 15.5516 2 14.9993 2H12.9993C12.447 2 11.9993 2.44772 11.9993 3V3.38269C11.9993 3.85823 11.6626 4.26276 11.2059 4.39542C10.4966 4.60148 9.81974 4.88401 9.18495 5.23348C8.76836 5.46282 8.24425 5.41481 7.90799 5.07855L7.53624 4.70681C7.14572 4.31628 6.51256 4.31628 6.12203 4.7068L4.70782 6.12102C4.31729 6.51154 4.31729 7.14471 4.70782 7.53523L5.07958 7.90699C5.41584 8.24325 5.46385 8.76736 5.23451 9.18395C4.88485 9.8191 4.6022 10.4963 4.39611 11.2061C4.2635 11.6629 3.85894 11.9996 3.38334 11.9996H3C2.44772 11.9996 2 12.4474 2 12.9996V14.9996C2 15.5519 2.44772 15.9996 3 15.9996H3.38334C3.85894 15.9996 4.26349 16.3364 4.39611 16.7931C4.58954 17.4594 4.85042 18.0969 5.17085 18.6979C5.39202 19.1127 5.34095 19.6293 5.00855 19.9617L4.70712 20.2632C4.3166 20.6537 4.3166 21.2868 4.70712 21.6774L6.12134 23.0916C6.51186 23.4821 7.14503 23.4821 7.53555 23.0916L7.77887 22.8483C8.11899 22.5081 8.65055 22.4633 9.06879 22.7008C9.73695 23.0804 10.4531 23.3852 11.2059 23.6039C11.6626 23.7365 11.9993 24.1411 11.9993 24.6166V25C11.9993 25.5523 12.447 26 12.9993 26H14.9993C15.5516 26 15.9993 25.5523 15.9993 25V24.6174C15.9993 24.1418 16.3361 23.7372 16.7929 23.6046C17.5032 23.3985 18.1809 23.1157 18.8164 22.7658C19.233 22.5365 19.7571 22.5845 20.0934 22.9208L20.2642 23.0916C20.6547 23.4821 21.2879 23.4821 21.6784 23.0916L23.0926 21.6774C23.4831 21.2868 23.4831 20.6537 23.0926 20.2632L22.9218 20.0924C22.5855 19.7561 22.5375 19.232 22.7669 18.8154C23.1166 18.1802 23.3992 17.503 23.6053 16.7931C23.7379 16.3364 24.1425 15.9996 24.6181 15.9996H25C25.5523 15.9996 26 15.5519 26 14.9996V12.9996C26 12.4474 25.5523 11.9996 25 11.9996H24.6181C24.1425 11.9996 23.7379 11.6629 23.6053 11.2061C23.3866 10.4529 23.0817 9.73627 22.7019 9.06773C22.4643 8.64949 22.5092 8.11793 22.8493 7.77781L23.0919 7.53523C23.4824 7.14471 23.4824 6.51154 23.0919 6.12102L21.6777 4.7068C21.2872 4.31628 20.654 4.31628 20.2635 4.7068L19.9628 5.00748C19.6304 5.33988 19.1137 5.39096 18.6989 5.16979C18.0976 4.84915 17.4596 4.58815 16.7929 4.39467C16.3361 4.2621 15.9993 3.85752 15.9993 3.38187V3Z" fill=${color} fill-rule="evenodd"/></g>
                            </svg>`,

                SVG_LOGOUT:`<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g id="SVGRepo_bgCarrier" stroke-width="0"/>
                            <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"/>
                            <g id="SVGRepo_iconCarrier"> <path d="M21 12L13 12" stroke=${color} stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/> <path d="M18 15L20.913 12.087V12.087C20.961 12.039 20.961 11.961 20.913 11.913V11.913L18 9" stroke=${color} stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/> <path d="M16 5V4.5V4.5C16 3.67157 15.3284 3 14.5 3H5C3.89543 3 3 3.89543 3 5V19C3 20.1046 3.89543 21 5 21H14.5C15.3284 21 16 20.3284 16 19.5V19.5V19" stroke=${color} stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/> </g>
                            </svg>`,

                INSTAGRAM: `<svg fill="${color}" viewBox="0 0 32 32" version="1.1" xmlns="http://www.w3.org/2000/svg" stroke="${color}" stroke-width="0.5"> <!-- Cambié stroke-width a 0.5 -->
                            <g id="SVGRepo_bgCarrier" stroke-width="0"/>
                            <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"/>
                            <g id="SVGRepo_iconCarrier">
                            <title>instagram</title>
                            <path d="M25.805 7.996c0 0 0 0.001 0 0.001 0 0.994-0.806 1.799-1.799 1.799s-1.799-0.806-1.799-1.799c0-0.994 0.806-1.799 1.799-1.799v0c0.993 0.001 1.798 0.805 1.799 1.798v0zM16 20.999c-2.761 0-4.999-2.238-4.999-4.999s2.238-4.999 4.999-4.999c2.761 0 4.999 2.238 4.999 4.999v0c0 0 0 0.001 0 0.001 0 2.76-2.237 4.997-4.997 4.997-0 0-0.001 0-0.001 0h0zM16 8.3c0 0 0 0-0 0-4.253 0-7.7 3.448-7.7 7.7s3.448 7.7 7.7 7.7c4.253 0 7.7-3.448 7.7-7.7v0c0-0 0-0 0-0.001 0-4.252-3.447-7.7-7.7-7.7-0 0-0 0-0.001 0h0zM16 3.704c4.003 0 4.48 0.020 6.061 0.089 1.003 0.012 1.957 0.202 2.84 0.538l-0.057-0.019c1.314 0.512 2.334 1.532 2.835 2.812l0.012 0.034c0.316 0.826 0.504 1.781 0.516 2.778l0 0.005c0.071 1.582 0.087 2.057 0.087 6.061s-0.019 4.48-0.092 6.061c-0.019 1.004-0.21 1.958-0.545 2.841l0.019-0.058c-0.258 0.676-0.64 1.252-1.123 1.726l-0.001 0.001c-0.473 0.484-1.049 0.866-1.692 1.109l-0.032 0.011c-0.829 0.316-1.787 0.504-2.788 0.516l-0.005 0c-1.592 0.071-2.061 0.087-6.072 0.087-4.013 0-4.481-0.019-6.072-0.092-1.008-0.019-1.966-0.21-2.853-0.545l0.059 0.019c-0.676-0.254-1.252-0.637-1.722-1.122l-0.001-0.001c-0.489-0.47-0.873-1.047-1.114-1.693l-0.010-0.031c-0.315-0.828-0.506-1.785-0.525-2.785l-0-0.008c-0.056-1.575-0.076-2.061-0.076-6.053 0-3.994 0.020-4.481 0.076-6.075 0.019-1.007 0.209-1.964 0.544-2.85l-0.019 0.059c0.247-0.679 0.632-1.257 1.123-1.724l0.002-0.002c0.468-0.492 1.045-0.875 1.692-1.112l0.031-0.010c0.823-0.318 1.774-0.509 2.768-0.526l0.007-0c1.593-0.056 2.062-0.075 6.072-0.075zM16 1.004c-4.074 0-4.582 0.019-6.182 0.090-1.315 0.028-2.562 0.282-3.716 0.723l0.076-0.025c-1.040 0.397-1.926 0.986-2.656 1.728l-0.001 0.001c-0.745 0.73-1.333 1.617-1.713 2.607l-0.017 0.050c-0.416 1.078-0.67 2.326-0.697 3.628l-0 0.012c-0.075 1.6-0.090 2.108-0.090 6.182s0.019 4.582 0.090 6.182c0.028 1.315 0.282 2.562 0.723 3.716l-0.025-0.076c0.796 2.021 2.365 3.59 4.334 4.368l0.052 0.018c1.078 0.415 2.326 0.669 3.628 0.697l0.012 0c1.6 0.075 2.108 0.090 6.182 0.090s4.582-0.019 6.182-0.090c1.315-0.029 2.562-0.282 3.716-0.723l-0.076 0.026c2.021-0.796 3.59-2.365 4.368-4.334l0.018-0.052c0.416-1.078 0.669-2.326 0.697-3.628l0-0.012c0.075-1.6 0.090-2.108 0.090-6.182s-0.019-4.582-0.090-6.182c-0.029-1.315-0.282-2.562-0.723-3.716l0.026 0.076c-0.398-1.040-0.986-1.926-1.729-2.656l-0.001-0.001c-0.73-0.745-1.617-1.333-2.607-1.713l-0.050-0.017c-1.078-0.416-2.326-0.67-3.628-0.697l-0.012-0c-1.6-0.075-2.108-0.090-6.182-0.090z"/></g>
                            </svg>`,

                TIKTOK:`<svg viewBox="-3 0 164 164" fill=${color} xmlns="http://www.w3.org/2000/svg">
                        <g id="SVGRepo_bgCarrier" stroke-width="0"/>
                        <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"/>
                        <g id="SVGRepo_iconCarrier"> <g clip-path="url(#clip0)"> <path d="M123.953 54.1511C132.152 56.842 138.958 57.868 145.383 57.3883C153.467 56.7818 157.753 52.1538 157.78 44.0061C157.791 40.3082 157.616 36.556 157.447 32.9278C157.398 31.9044 157.352 30.8813 157.308 29.8582C157.312 28.6956 156.928 27.5646 156.218 26.6445C155.507 25.7244 154.509 25.0676 153.383 24.778C151.854 24.3186 150.299 23.9459 148.728 23.6621C132.049 20.6463 119.212 14.1998 109.482 3.95374C107.83 2.24696 105.601 1.21739 103.23 1.06592H103.16C98.1428 1.13155 93.0654 1.66496 88.154 2.1815L85.6599 2.43948C82.7996 2.73155 81.078 4.60545 80.9382 7.57865C80.8726 8.94842 80.845 9.99679 80.8457 10.9767C80.849 17.8827 80.8582 24.7886 80.8733 31.6946C80.9028 48.0879 80.9336 65.0396 80.8326 81.7075C80.7853 89.5336 80.3685 97.4235 79.5921 105.157C79.4201 107.13 78.8511 109.048 77.9204 110.796C76.9897 112.544 75.7151 114.086 74.1747 115.33C72.4977 116.63 70.5766 117.578 68.5256 118.119C66.4745 118.66 64.335 118.782 62.2356 118.477C53.8102 117.413 49.2113 112.408 47.7608 102.725C46.9554 97.3526 48.0234 92.5042 50.8561 88.7021C53.6403 84.9609 57.8749 82.5876 63.1 81.8394C67.971 81.1417 69.4582 79.2449 68.9922 74.321C68.5945 70.1257 67.9578 65.891 67.3422 61.7967C66.9412 59.13 66.5264 56.3715 66.1824 53.6582C65.833 50.895 64.156 49.2543 61.1979 48.7824C59.3582 48.4967 57.4871 48.4779 55.6421 48.727C33.2151 51.7508 16.7212 63.378 6.61884 83.286C-0.666505 97.6368 -1.54137 114.11 4.21077 128.482C9.79555 142.439 20.99 152.996 35.7307 158.208C44.7922 161.472 54.3474 163.155 63.9789 163.183C74.2968 163.183 84.7476 161.218 95.486 157.289C108.174 152.644 115.621 143.16 117.616 129.102C120.399 109.497 120.84 93.0181 119.003 77.2411C118.338 71.5244 118.101 65.7664 117.851 59.6703C117.748 57.1546 117.641 54.5626 117.502 51.9097C118.217 52.1604 118.875 52.3927 119.492 52.6099C121.207 53.2164 122.561 53.6949 123.953 54.1511ZM106.363 59.346C106.486 70.8221 106.614 82.69 106.464 94.3551L106.455 95.0167C106.324 105.565 106.183 116.472 104.158 127.068C102.305 136.77 97.2968 142.877 88.8471 145.737C70.9691 151.786 54.5342 151.827 38.6003 145.859C16.3694 137.531 9.66757 117.031 12.8876 100.408C17.115 78.5886 29.4273 64.6906 49.483 59.0986C51.5833 58.5138 54.0774 57.8292 56.6129 57.1873C57.2192 57.0512 57.8327 56.9496 58.4505 56.8828C58.7018 56.8493 58.9757 56.8126 59.2789 56.7706L60.1714 72.9073C59.9365 73.0254 59.7178 73.1416 59.5104 73.2512C59.0502 73.5288 58.5555 73.7441 58.0389 73.8925C43.7747 76.995 35.6053 90.589 38.1723 106.95C38.8984 111.686 40.8773 116.144 43.904 119.859C46.9306 123.575 50.8951 126.415 55.3873 128.084C60.0838 129.881 65.171 130.411 70.1369 129.618C75.1027 128.825 79.7726 126.738 83.6758 123.567C89.2179 119.031 91.9175 113.367 91.483 107.188C90.9828 100.061 91.3123 92.8344 91.632 85.8457C91.8341 81.4049 92.0441 76.8138 92.0395 72.2844C92.029 60.6363 91.9831 48.7942 91.9385 37.3417C91.9168 31.9344 91.8971 26.5276 91.8787 21.1211C91.8722 19.152 91.8741 17.183 91.8787 15.1621V12.7165C94.4542 11.7432 96.9824 11.9118 99.4319 12.0772C100.351 12.1389 101.295 12.2019 102.223 12.2019H102.238L102.975 12.9332C112.699 22.5813 114.765 24.6285 145.992 34.9205L145.545 43.6221C145.348 43.7199 145.169 43.8189 145 43.9121C144.735 44.0818 144.444 44.2064 144.138 44.281C134.874 43.5879 124.193 42.3936 114.669 36.969C113.321 36.2751 111.898 35.7367 110.429 35.3647C109.621 35.1238 108.784 34.8744 107.87 34.56C107.775 34.5273 107.675 34.516 107.575 34.527C107.476 34.5379 107.38 34.5709 107.295 34.6234C107.21 34.6759 107.138 34.7468 107.083 34.8308C107.029 34.9147 106.994 35.0099 106.982 35.1089C106.862 36.0107 106.734 36.7997 106.617 37.5157C106.381 38.7276 106.245 39.9567 106.213 41.191C106.231 47.243 106.297 53.3957 106.361 59.346H106.363Z" fill=${color}/> </g> <defs> <clipPath id="clip0"> <rect width="157.521" height="162.772" fill=${color} transform="translate(0.313965 0.73999)"/> </clipPath> </defs> </g>
                        </svg>`,

                FACEBOOK:`<svg fill="${color}" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="-337 273 123.5 256" xml:space="preserve" preserveAspectRatio="xMinYMin meet" style="width: 100%; height: 100%;">
                        <g id="SVGRepo_bgCarrier" stroke-width="0"/>
                        <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"/>
                        <g id="SVGRepo_iconCarrier">
                        <path d="M-260.9,327.8c0-10.3,9.2-14,19.5-14c10.3,0,21.3,3.2,21.3,3.2l6.6-39.2c0,0-14-4.8-47.4-4.8c-20.5,0-32.4,7.8-41.1,19.3c-8.2,10.9-8.5,28.4-8.5,39.7v25.7H-337V396h26.5v133h49.6V396h39.3l2.9-38.3h-42.2V327.8z"/></g>
                        </svg>`,

                SVG_PRICE:`<svg fill=${color} viewBox="-2 0 19 19" xmlns="http://www.w3.org/2000/svg" class="cf-icon-svg" transform="rotate(90)">
                        <g id="SVGRepo_bgCarrier" stroke-width="0"/><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round" stroke="#CCCCCC" stroke-width="0.49400000000000005"/><g id="SVGRepo_iconCarrier">
                        <path d="m13.842 11.52-4.389 4.388a1.112 1.112 0 0 1-1.567 0l-6.28-6.28a3.027 3.027 0 0 1-.771-1.892l.043-3.681A1.141 1.141 0 0 1 2 2.935L5.67 2.9a3.04 3.04 0 0 1 1.892.773l6.28 6.28a1.112 1.112 0 0 1 0 1.567zM3.826 5.133a.792.792 0 1 0-.792.792.792.792 0 0 0 .792-.792zm6.594 7.348a.554.554 0 0 0 0-.784l-.401-.401a2.53 2.53 0 0 0 .35-.83 1.565 1.565 0 0 0-.397-1.503 1.59 1.59 0 0 0-1.017-.46 2.14 2.14 0 0 0-.75.085h-.002a2.444 2.444 0 0 0-.59.277H7.61a2.677 2.677 0 0 0-.438.357 2.043 2.043 0 0 1-.259.22 1.29 1.29 0 0 1-.329.17h-.002a.835.835 0 0 1-.338.038h-.002a.53.53 0 0 1-.314-.136.539.539 0 0 1-.106-.534 1.54 1.54 0 0 1 .41-.71 1.632 1.632 0 0 1 .23-.165l.03-.019a1.783 1.783 0 0 1 .322-.155.942.942 0 0 1 .325-.06.554.554 0 0 0 0-1.108h-.001a2.058 2.058 0 0 0-.717.132 2.846 2.846 0 0 0-.529.26l-.01.006-.398-.4a.554.554 0 1 0-.784.785l.388.387a2.513 2.513 0 0 0-.347.803 1.644 1.644 0 0 0 .404 1.561 1.622 1.622 0 0 0 .983.456 1.922 1.922 0 0 0 .805-.089 2.372 2.372 0 0 0 .624-.319 3.142 3.142 0 0 0 .398-.339 1.569 1.569 0 0 1 .256-.208 1.381 1.381 0 0 1 .32-.151 1.023 1.023 0 0 1 .348-.038.485.485 0 0 1 .308.139c.05.049.165.165.097.488a1.558 1.558 0 0 1-.413.729 2.476 2.476 0 0 1-.28.219 1.727 1.727 0 0 1-.306.157.687.687 0 0 1-.32.042.554.554 0 1 0-.08 1.106c.052.004.103.005.152.005a1.723 1.723 0 0 0 .685-.134 2.678 2.678 0 0 0 .507-.27l.01-.007.397.398a.555.555 0 0 0 .783 0z"/></g>
                        </svg>`,

                ADD_CART:`<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke=${color}>
                        <g id="SVGRepo_bgCarrier" stroke-width="0"/><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"/>
                        <g id="SVGRepo_iconCarrier"> <path d="M21 5L19 12H7.37671M20 16H8L6 3H3M16 5.5H13.5M13.5 5.5H11M13.5 5.5V8M13.5 5.5V3M9 20C9 20.5523 8.55228 21 8 21C7.44772 21 7 20.5523 7 20C7 19.4477 7.44772 19 8 19C8.55228 19 9 19.4477 9 20ZM20 20C20 20.5523 19.5523 21 19 21C18.4477 21 18 20.5523 18 20C18 19.4477 18.4477 19 19 19C19.5523 19 20 19.4477 20 20Z" stroke=${color} stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/> </g>
                        </svg>`,

                IN_CART:`<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke=${color}>
                        <g id="SVGRepo_bgCarrier" stroke-width="0"/>
                        <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"/>
                        <g id="SVGRepo_iconCarrier"> <path d="M21 5L19 12H7.37671M20 16H8L6 3H3M11 6L13 8L17 4M9 20C9 20.5523 8.55228 21 8 21C7.44772 21 7 20.5523 7 20C7 19.4477 7.44772 19 8 19C8.55228 19 9 19.4477 9 20ZM20 20C20 20.5523 19.5523 21 19 21C18.4477 21 18 20.5523 18 20C18 19.4477 18.4477 19 19 19C19.5523 19 20 19.4477 20 20Z" stroke=${color} stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/> </g>
                        </svg>`,

                PLAY_GAME:`<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke=${color}>
                        <g id="SVGRepo_bgCarrier" stroke-width="0"/>
                        <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"/>
                        <g id="SVGRepo_iconCarrier"> <g id="Media / Play_Circle"> <g id="Vector"> <path d="M3 12C3 16.9706 7.02944 21 12 21C16.9706 21 21 16.9706 21 12C21 7.02944 16.9706 3 12 3C7.02944 3 3 7.02944 3 12Z" stroke=${color} stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/> <path d="M10 15V9L15 12L10 15Z" stroke=${color} stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/> </g> </g> </g>
                        </svg>`,

                ARROW_NEXT:`<svg viewBox="0 0 24 24" fill=${color} xmlns="http://www.w3.org/2000/svg" stroke=${color}>
                            <g id="SVGRepo_bgCarrier" stroke-width="0"/>
                            <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"/>
                            <g id="SVGRepo_iconCarrier"> <path d="M9.71069 18.2929C10.1012 18.6834 10.7344 18.6834 11.1249 18.2929L16.0123 13.4006C16.7927 12.6195 16.7924 11.3537 16.0117 10.5729L11.1213 5.68254C10.7308 5.29202 10.0976 5.29202 9.70708 5.68254C9.31655 6.07307 9.31655 6.70623 9.70708 7.09676L13.8927 11.2824C14.2833 11.6729 14.2833 12.3061 13.8927 12.6966L9.71069 16.8787C9.32016 17.2692 9.32016 17.9023 9.71069 18.2929Z" fill=${color}/> </g>
                            </svg>`,

                ARROW_PREV:`<svg viewBox="0 0 24 24" fill=${color} xmlns="http://www.w3.org/2000/svg" stroke=${color}>
                            <g id="SVGRepo_bgCarrier" stroke-width="0"/>
                            <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"/>
                            <g id="SVGRepo_iconCarrier"> <path d="M14.2893 5.70708C13.8988 5.31655 13.2657 5.31655 12.8751 5.70708L7.98768 10.5993C7.20729 11.3805 7.2076 12.6463 7.98837 13.427L12.8787 18.3174C13.2693 18.7079 13.9024 18.7079 14.293 18.3174C14.6835 17.9269 14.6835 17.2937 14.293 16.9032L10.1073 12.7175C9.71678 12.327 9.71678 11.6939 10.1073 11.3033L14.2893 7.12129C14.6799 6.73077 14.6799 6.0976 14.2893 5.70708Z" fill=${color}/> </g>
                            </svg>`,

                SVG_SHARE:`<svg viewBox="0 0 24 24" fill=${color} xmlns="http://www.w3.org/2000/svg" stroke=${color}>
                            <g id="SVGRepo_bgCarrier" stroke-width="0"/>
                            <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"/>
                            <g id="SVGRepo_iconCarrier"> <path fill-rule="evenodd" clip-rule="evenodd" d="M16.5 2.25C14.7051 2.25 13.25 3.70507 13.25 5.5C13.25 5.69591 13.2673 5.88776 13.3006 6.07412L8.56991 9.38558C8.54587 9.4024 8.52312 9.42038 8.50168 9.43939C7.94993 9.00747 7.25503 8.75 6.5 8.75C4.70507 8.75 3.25 10.2051 3.25 12C3.25 13.7949 4.70507 15.25 6.5 15.25C7.25503 15.25 7.94993 14.9925 8.50168 14.5606C8.52312 14.5796 8.54587 14.5976 8.56991 14.6144L13.3006 17.9259C13.2673 18.1122 13.25 18.3041 13.25 18.5C13.25 20.2949 14.7051 21.75 16.5 21.75C18.2949 21.75 19.75 20.2949 19.75 18.5C19.75 16.7051 18.2949 15.25 16.5 15.25C15.4472 15.25 14.5113 15.7506 13.9174 16.5267L9.43806 13.3911C9.63809 12.9694 9.75 12.4978 9.75 12C9.75 11.5022 9.63809 11.0306 9.43806 10.6089L13.9174 7.4733C14.5113 8.24942 15.4472 8.75 16.5 8.75C18.2949 8.75 19.75 7.29493 19.75 5.5C19.75 3.70507 18.2949 2.25 16.5 2.25ZM14.75 5.5C14.75 4.5335 15.5335 3.75 16.5 3.75C17.4665 3.75 18.25 4.5335 18.25 5.5C18.25 6.4665 17.4665 7.25 16.5 7.25C15.5335 7.25 14.75 6.4665 14.75 5.5ZM6.5 10.25C5.5335 10.25 4.75 11.0335 4.75 12C4.75 12.9665 5.5335 13.75 6.5 13.75C7.4665 13.75 8.25 12.9665 8.25 12C8.25 11.0335 7.4665 10.25 6.5 10.25ZM16.5 16.75C15.5335 16.75 14.75 17.5335 14.75 18.5C14.75 19.4665 15.5335 20.25 16.5 20.25C17.4665 20.25 18.25 19.4665 18.25 18.5C18.25 17.5335 17.4665 16.75 16.5 16.75Z" fill=${color}/> </g>
                            </svg>`,

                SVG_LIKE:`<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke=${color}>
                            <g id="SVGRepo_bgCarrier" stroke-width="0"/>
                            <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"/>
                            <g id="SVGRepo_iconCarrier"> <path d="M7.47998 18.35L10.58 20.75C10.98 21.15 11.88 21.35 12.48 21.35H16.28C17.48 21.35 18.78 20.45 19.08 19.25L21.48 11.95C21.98 10.55 21.08 9.34997 19.58 9.34997H15.58C14.98 9.34997 14.48 8.84997 14.58 8.14997L15.08 4.94997C15.28 4.04997 14.68 3.04997 13.78 2.74997C12.98 2.44997 11.98 2.84997 11.58 3.44997L7.47998 9.54997" stroke=${color} stroke-width="1.5" stroke-miterlimit="10"/> <path d="M2.38 18.35V8.55002C2.38 7.15002 2.98 6.65002 4.38 6.65002H5.38C6.78 6.65002 7.38 7.15002 7.38 8.55002V18.35C7.38 19.75 6.78 20.25 5.38 20.25H4.38C2.98 20.25 2.38 19.75 2.38 18.35Z" stroke=${color} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/> </g>
                            </svg>`,

                SVG_UNLIKE:`<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke=${color} transform="rotate(180)">
                            <g id="SVGRepo_bgCarrier" stroke-width="0"/>
                            <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"/>
                            <g id="SVGRepo_iconCarrier"> <path d="M7.47998 18.35L10.58 20.75C10.98 21.15 11.88 21.35 12.48 21.35H16.28C17.48 21.35 18.78 20.45 19.08 19.25L21.48 11.95C21.98 10.55 21.08 9.34997 19.58 9.34997H15.58C14.98 9.34997 14.48 8.84997 14.58 8.14997L15.08 4.94997C15.28 4.04997 14.68 3.04997 13.78 2.74997C12.98 2.44997 11.98 2.84997 11.58 3.44997L7.47998 9.54997" stroke=${color} stroke-width="1.5" stroke-miterlimit="10"/> <path d="M2.38 18.35V8.55002C2.38 7.15002 2.98 6.65002 4.38 6.65002H5.38C6.78 6.65002 7.38 7.15002 7.38 8.55002V18.35C7.38 19.75 6.78 20.25 5.38 20.25H4.38C2.98 20.25 2.38 19.75 2.38 18.35Z" stroke=${color} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/> </g>
                            </svg>`,

                SVG_CTRL: `<svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 496.8 496.8" xml:space="preserve" fill="#000000">
                            <g id="SVGRepo_bgCarrier" stroke-width="0"/><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"/>
                            <g id="SVGRepo_iconCarrier"> <path style="fill:#ffffff;" d="M326.4,226c0,8.8-7.2,16.8-16.8,16.8h-124c-8.8,0-16.8-7.2-16.8-16.8V102c0-8.8,7.2-16.8,16.8-16.8 h124c8.8,0,16.8,7.2,16.8,16.8V226z"/> <g> <path style="fill:#ffffff;" d="M326.4,226c0,8.8-7.2,16.8-16.8,16.8h-124c-8.8,0-16.8-7.2-16.8-16.8"/> <path style="fill:#ffffff;" d="M169.6,102c0-8.8,7.2-16.8,16.8-16.8h124c8.8,0,16.8,7.2,16.8,16.8v124c0,8.8-7.2,16.8-16.8,16.8"/> </g> <path style="fill:#ffffff;" d="M169.6,102c0-8.8,7.2-16.8,16.8-16.8h124c8.8,0,16.8,7.2,16.8,16.8"/> <path style="fill:#000000;" d="M274.4,196.4l-23.2-36c-1.6-2.4-5.6-2.4-7.2,0l-22.4,36.8c-0.8,1.6-0.8,3.2,0,4 c0.8,1.6,2.4,2.4,4,2.4h44.8c1.6,0,3.2-0.8,4-2.4C275.2,199.6,274.4,198,274.4,196.4z"/> <path style="fill:#000000;" d="M251.2,174.8c-1.6-2.4-5.6-2.4-7.2,0l-16.8,28h41.6L251.2,174.8z"/> <path style="fill:#ffffff;" d="M326.4,394.8c0,8.8-7.2,16.8-16.8,16.8h-124c-8.8,0-16.8-7.2-16.8-16.8v-124 c0-8.8,7.2-16.8,16.8-16.8h124c8.8,0,16.8,7.2,16.8,16.8V394.8z"/> <g> <path style="fill:#ffffff;" d="M326.4,394.8c0,8.8-7.2,16.8-16.8,16.8h-124c-8.8,0-16.8-7.2-16.8-16.8"/> <path style="fill:#ffffff;" d="M169.6,270.8c0-8.8,7.2-16.8,16.8-16.8h124c8.8,0,16.8,7.2,16.8,16.8v124c0,8.8-7.2,16.8-16.8,16.8"/> </g> <path style="fill:#ffffff;" d="M169.6,270.8c0-8.8,7.2-16.8,16.8-16.8h124c8.8,0,16.8,7.2,16.8,16.8"/> <path style="fill:#000000;" d="M221.6,332.4l22.4,36.8c1.6,2.4,5.6,2.4,7.2,0l22.4-36.8c0.8-1.6,0.8-3.2,0-4c-0.8-1.6-2.4-2.4-4-2.4 h-44.8c-1.6,0-3.2,0.8-4,2.4C220.8,330,221.6,331.6,221.6,332.4z"/> <path style="fill:#000000;" d="M244.8,354c1.6,2.4,5.6,2.4,7.2,0l16.8-28h-41.6L244.8,354z"/> <path style="fill:#ffffff;" d="M156.8,394.8c0,8.8-7.2,16.8-16.8,16.8H16.8C8,411.6,0,404.4,0,394.8v-124C0,262,7.2,254,16.8,254 h124c8.8,0,16.8,7.2,16.8,16.8v124H156.8z"/> <g> <path style="fill:#ffffff;" d="M156.8,394.8c0,8.8-7.2,16.8-16.8,16.8H16.8C8,411.6,0,404.4,0,394.8"/> <path style="fill:#ffffff;" d="M0,270.8C0,262,7.2,254,16.8,254h124c8.8,0,16.8,7.2,16.8,16.8v124c0,8.8-7.2,16.8-16.8,16.8"/> </g> <path style="fill:#ffffff;" d="M0,270.8C0,262,7.2,254,16.8,254h124c8.8,0,16.8,7.2,16.8,16.8"/> <path style="fill:#000000;" d="M94.4,322.8l-36.8,22.4c-2.4,1.6-2.4,5.6,0,7.2l36.8,22.4c1.6,0.8,3.2,0.8,4,0 c1.6-0.8,2.4-2.4,2.4-3.2v-44.8c0-1.6-0.8-3.2-2.4-4C97.6,322,96,322,94.4,322.8z"/> <path style="fill:#000000;" d="M72.8,345.2c-2.4,1.6-2.4,5.6,0,7.2l28,16.8v-41.6L72.8,345.2z"/> <path style="fill:#ffffff;" d="M496,394.8c0,8.8-7.2,16.8-16.8,16.8h-124c-8.8,0-16.8-7.2-16.8-16.8v-124c0-8.8,7.2-16.8,16.8-16.8 h124c8.8,0,16.8,7.2,16.8,16.8V394.8z"/> <g> <path style="fill:#ffffff;" d="M496,394.8c0,8.8-7.2,16.8-16.8,16.8h-124c-8.8,0-16.8-7.2-16.8-16.8"/> <path style="fill:#ffffff;" d="M339.2,270.8c0-8.8,7.2-16.8,16.8-16.8h124c8.8,0,16.8,7.2,16.8,16.8v124c0,8.8-7.2,16.8-16.8,16.8"/> </g> <path style="fill:#ffffff;" d="M339.2,270.8c0-8.8,7.2-16.8,16.8-16.8h124c8.8,0,16.8,7.2,16.8,16.8"/> <path style="fill:#000000;" d="M401.6,374.8l36.8-22.4c2.4-1.6,2.4-5.6,0-7.2l-36.8-22.4c-1.6-0.8-3.2-0.8-4,0s-2.4,2.4-2.4,4v44.8 c0,1.6,0.8,3.2,2.4,4S400,375.6,401.6,374.8z"/> <path style="fill:#000000;" d="M423.2,352.4c2.4-1.6,2.4-5.6,0-7.2l-28-16.8V370L423.2,352.4z"/> </g>
                            </svg>`,
                            
                SVG_EXPAND: `<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke=${color}>
                            <g id="SVGRepo_bgCarrier" stroke-width="0"/><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"/>
                            <g id="SVGRepo_iconCarrier"> <path d="M4.75 9.233C4.75 9.64721 5.08579 9.983 5.5 9.983C5.91421 9.983 6.25 9.64721 6.25 9.233H4.75ZM6.25 5.5C6.25 5.08579 5.91421 4.75 5.5 4.75C5.08579 4.75 4.75 5.08579 4.75 5.5H6.25ZM5.5 4.75C5.08579 4.75 4.75 5.08579 4.75 5.5C4.75 5.91421 5.08579 6.25 5.5 6.25V4.75ZM9.233 6.25C9.64721 6.25 9.983 5.91421 9.983 5.5C9.983 5.08579 9.64721 4.75 9.233 4.75V6.25ZM6.03033 4.96967C5.73744 4.67678 5.26256 4.67678 4.96967 4.96967C4.67678 5.26256 4.67678 5.73744 4.96967 6.03033L6.03033 4.96967ZM9.96967 11.0303C10.2626 11.3232 10.7374 11.3232 11.0303 11.0303C11.3232 10.7374 11.3232 10.2626 11.0303 9.96967L9.96967 11.0303ZM15.767 18.75C15.3528 18.75 15.017 19.0858 15.017 19.5C15.017 19.9142 15.3528 20.25 15.767 20.25V18.75ZM19.5 20.25C19.9142 20.25 20.25 19.9142 20.25 19.5C20.25 19.0858 19.9142 18.75 19.5 18.75V20.25ZM18.75 19.5C18.75 19.9142 19.0858 20.25 19.5 20.25C19.9142 20.25 20.25 19.9142 20.25 19.5H18.75ZM20.25 15.767C20.25 15.3528 19.9142 15.017 19.5 15.017C19.0858 15.017 18.75 15.3528 18.75 15.767H20.25ZM18.9697 20.0303C19.2626 20.3232 19.7374 20.3232 20.0303 20.0303C20.3232 19.7374 20.3232 19.2626 20.0303 18.9697L18.9697 20.0303ZM15.0303 13.9697C14.7374 13.6768 14.2626 13.6768 13.9697 13.9697C13.6768 14.2626 13.6768 14.7374 13.9697 15.0303L15.0303 13.9697ZM6.25 15.767C6.25 15.3528 5.91421 15.017 5.5 15.017C5.08579 15.017 4.75 15.3528 4.75 15.767H6.25ZM4.75 19.5C4.75 19.9142 5.08579 20.25 5.5 20.25C5.91421 20.25 6.25 19.9142 6.25 19.5H4.75ZM5.5 18.75C5.08579 18.75 4.75 19.0858 4.75 19.5C4.75 19.9142 5.08579 20.25 5.5 20.25V18.75ZM9.233 20.25C9.64721 20.25 9.983 19.9142 9.983 19.5C9.983 19.0858 9.64721 18.75 9.233 18.75V20.25ZM4.96967 18.9697C4.67678 19.2626 4.67678 19.7374 4.96967 20.0303C5.26256 20.3232 5.73744 20.3232 6.03033 20.0303L4.96967 18.9697ZM11.0303 15.0303C11.3232 14.7374 11.3232 14.2626 11.0303 13.9697C10.7374 13.6768 10.2626 13.6768 9.96967 13.9697L11.0303 15.0303ZM15.767 4.75C15.3528 4.75 15.017 5.08579 15.017 5.5C15.017 5.91421 15.3528 6.25 15.767 6.25V4.75ZM19.5 6.25C19.9142 6.25 20.25 5.91421 20.25 5.5C20.25 5.08579 19.9142 4.75 19.5 4.75V6.25ZM20.25 5.5C20.25 5.08579 19.9142 4.75 19.5 4.75C19.0858 4.75 18.75 5.08579 18.75 5.5H20.25ZM18.75 9.233C18.75 9.64721 19.0858 9.983 19.5 9.983C19.9142 9.983 20.25 9.64721 20.25 9.233H18.75ZM20.0303 6.03033C20.3232 5.73744 20.3232 5.26256 20.0303 4.96967C19.7374 4.67678 19.2626 4.67678 18.9697 4.96967L20.0303 6.03033ZM13.9697 9.96967C13.6768 10.2626 13.6768 10.7374 13.9697 11.0303C14.2626 11.3232 14.7374 11.3232 15.0303 11.0303L13.9697 9.96967ZM6.25 9.233V5.5H4.75V9.233H6.25ZM5.5 6.25H9.233V4.75H5.5V6.25ZM4.96967 6.03033L9.96967 11.0303L11.0303 9.96967L6.03033 4.96967L4.96967 6.03033ZM15.767 20.25H19.5V18.75H15.767V20.25ZM20.25 19.5V15.767H18.75V19.5H20.25ZM20.0303 18.9697L15.0303 13.9697L13.9697 15.0303L18.9697 20.0303L20.0303 18.9697ZM4.75 15.767V19.5H6.25V15.767H4.75ZM5.5 20.25H9.233V18.75H5.5V20.25ZM6.03033 20.0303L11.0303 15.0303L9.96967 13.9697L4.96967 18.9697L6.03033 20.0303ZM15.767 6.25H19.5V4.75H15.767V6.25ZM18.75 5.5V9.233H20.25V5.5H18.75ZM18.9697 4.96967L13.9697 9.96967L15.0303 11.0303L20.0303 6.03033L18.9697 4.96967Z" fill=${color}/> </g>
                            </svg>`,

                COPY_LINK:`<svg fill="#000000" viewBox="0 0 32 32" id="icon" xmlns="http://www.w3.org/2000/svg">
                            <g id="SVGRepo_bgCarrier" stroke-width="0"/><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"/>
                            <g id="SVGRepo_iconCarrier"> <defs> <style> .cls-1 { fill: none; } </style> </defs> <path d="M11.9474,19a4.9476,4.9476,0,0,1-3.4991-8.4465l5.1053-5.1043a4.9482,4.9482,0,0,1,6.9981,6.9976l-.5523.5526-1.4158-1.4129.5577-.5579a2.95,2.95,0,0,0-.0039-4.1653,3.02,3.02,0,0,0-4.17,0l-5.1047,5.104a2.9474,2.9474,0,0,0,0,4.1692,3.02,3.02,0,0,0,4.17,0l1.4143,1.4145A4.9176,4.9176,0,0,1,11.9474,19Z"/> <path d="M19.9474,17a4.9476,4.9476,0,0,1-3.4991-8.4465l.5526-.5526,1.4143,1.4146-.5526.5523a2.9476,2.9476,0,0,0,0,4.1689,3.02,3.02,0,0,0,4.17,0c.26-.26,4.7293-4.7293,5.1053-5.1045a2.951,2.951,0,0,0,0-4.1687,3.02,3.02,0,0,0-4.17,0L21.5536,3.449a4.9483,4.9483,0,0,1,6.9981,6.9978c-.3765.376-4.844,4.8428-5.1038,5.1035A4.9193,4.9193,0,0,1,19.9474,17Z"/> <path d="M24,30H4a2.0021,2.0021,0,0,1-2-2V8A2.0021,2.0021,0,0,1,4,6H8V8H4V28H24V18h2V28A2.0021,2.0021,0,0,1,24,30Z"/> <rect id="_Transparent_Rectangle_" data-name="&lt;Transparent Rectangle&gt;" class="cls-1" width="32" height="32"/> </g>
                            </svg>`,
                
                WSP:`<svg fill="#000000"  viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
                    <g id="SVGRepo_bgCarrier" stroke-width="0"/><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"/><g id="SVGRepo_iconCarrier">
                    <path d="M11.42 9.49c-.19-.09-1.1-.54-1.27-.61s-.29-.09-.42.1-.48.6-.59.73-.21.14-.4 0a5.13 5.13 0 0 1-1.49-.92 5.25 5.25 0 0 1-1-1.29c-.11-.18 0-.28.08-.38s.18-.21.28-.32a1.39 1.39 0 0 0 .18-.31.38.38 0 0 0 0-.33c0-.09-.42-1-.58-1.37s-.3-.32-.41-.32h-.4a.72.72 0 0 0-.5.23 2.1 2.1 0 0 0-.65 1.55A3.59 3.59 0 0 0 5 8.2 8.32 8.32 0 0 0 8.19 11c.44.19.78.3 1.05.39a2.53 2.53 0 0 0 1.17.07 1.93 1.93 0 0 0 1.26-.88 1.67 1.67 0 0 0 .11-.88c-.05-.07-.17-.12-.36-.21z"/>
                    <path d="M13.29 2.68A7.36 7.36 0 0 0 8 .5a7.44 7.44 0 0 0-6.41 11.15l-1 3.85 3.94-1a7.4 7.4 0 0 0 3.55.9H8a7.44 7.44 0 0 0 5.29-12.72zM8 14.12a6.12 6.12 0 0 1-3.15-.87l-.22-.13-2.34.61.62-2.28-.14-.23a6.18 6.18 0 0 1 9.6-7.65 6.12 6.12 0 0 1 1.81 4.37A6.19 6.19 0 0 1 8 14.12z"/></g>
                    </svg>`,

                DETAILS:`<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke=${color}>
                        <g id="SVGRepo_bgCarrier" stroke-width="0"/><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"/>
                        <g id="SVGRepo_iconCarrier"> <path d="M12 4V20M4 12L20 12" stroke=${color} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/> </g>
                        </svg>`
                    
            }
           
            
            return SVGS[name];
        }

        static capitalizeAndFormatter = (str)=>{
           let text = this.capitalizeFirst(str);

            if (text.length > 35) {
                return text.slice(0, 32) + '...'; 
            }
            return text; 
         
        }
        static capitalizeFirst = (str) =>{
            if(!str) return '';
            return str.charAt(0).toUpperCase()+str.slice(1).toLowerCase();
        }

        static replaceSpaces = (str) =>{
            return str.replaceAll(' ','-');
        }
        static unReplaceSpaces = (str) =>{
            return str.replaceAll('-',' ');
        }

        static customButton=(className, content,id)=>{
            return `<button id="${id}" class="btn p-m p-bold ${className}">${content}</button>`;
        }

    }

    class Header {
        #userLogin;
        #sessionCard;
        #scrollPositionSidebar;
        #parentElement;
        #sectionActive;
       
        constructor(userLogin,parentElement,sectionActive){
            this.#userLogin=userLogin;
            this.#sessionCard=new SessionCard(userLogin);
            this.#parentElement=parentElement;
            this.#sectionActive=sectionActive;
        }
    
        getComponent(){
            const header=document.createElement("header");
    
            const template = `${Utils.SVGTemplate(Utils.customSVG("SVG_HAMBUR",Constants.colors.primary20),'hambur-menu')}
                             <h1 class="logo"><span class="flaming">Flaming</span><span class="games">Games</span></h1>
                            <ul class="navbar-list">
                                <li>${Utils.SVGTemplate(Utils.customSVG("SVG_CART",Constants.colors.primary20))}</li>
                                <li class="avatar-login">${this.#userLogin? Utils.SVGTemplate(this.#userLogin.avatar) : Utils.SVGTemplate(Utils.customSVG("SVG_PROFILE",Constants.colors.primary20))}</li>
                            </ul>`;
    
            header.innerHTML=template;
    
           
            return header;
        }
        listenEvents(){
            this.#handleClickAvatar();
            this.#handleClickHamburMenu();
            this.#handleClickLogo();
            
        }
        #handleClickLogo(){
            const logo = document.querySelector(".logo");
            logo.addEventListener("click",()=>{
                showContent('inicio',this.#userLogin);
            })
        }
      
        #handleClickAvatar(){
            const avatar = document.querySelector(".avatar-login");
          
            if(!this.#userLogin){
                avatar.addEventListener("click", ()=>{
                    showContent("login",null,this.#sectionActive);
                })

                return
            }

            this.#handleClickSessionCard(avatar);
        }

        #handleClickSessionCard(clickElement){
            let isFirstOpen = true;
            const navbarList= document.querySelector(".navbar-list");
            const profileCard= this.#sessionCard.getComponent();
            const overlay = document.createElement("div");
            overlay.id="overlay";
            
            clickElement.addEventListener("click", (e)=>{
                e.stopPropagation();
    
                navbarList.appendChild(profileCard);
                navbarList.appendChild(overlay);
              
                this.#sessionCard.handleClickWindow(profileCard);
    
                //si es el primer acceso a la funcion, debo cargarle los eventos a la card session
                if(isFirstOpen){
                    this.#sessionCard.listenEvents(); 
                    isFirstOpen=false;     
                }
               
            })

        }

        #handleClickHamburMenu(){
            let isRender=false;
            const hambur = document.querySelector(".hambur-menu");
            const sidebarObj = new SidebarCategory(Constants.categories,this.#sectionActive,this.#userLogin);
            
            hambur.addEventListener("click", ()=>{

                if(isRender){
                    document.querySelector(".sidebar-categories").remove();
                  
                    isRender=false;

                }else{
                    this.#parentElement.appendChild(sidebarObj.getComponent());

                    this.#savePositionScrollSidebar();
                    sidebarObj.listenEvents(this.#scrollPositionSidebar);

                    isRender=true;
                }
            })
        }
        //esta funcion se encarga de guardar en un atributo de clase la posicion en la que el usuario deja el scroll de la sidebar antes de hacer click en el menu
        //hamburguesa para ocultar el menu de categorias
        #savePositionScrollSidebar(){
            const sidebarElement = document.querySelector(".sidebar-categories");

            sidebarElement.addEventListener("scroll", () => {
                this.#scrollPositionSidebar = sidebarElement.scrollTop; 
            });

        }
    
    }

    class SidebarCategory {
        #categoriesList; /*esto deberian ser objetos que contengan nombre de la categoria y el emoji apropiado */
        #scrollPosition=0;
        #activeCateg=null;
        #sectionActive;
        #user;

        constructor(categoriesList,sectionActive,user){
            this.#categoriesList= categoriesList;
            this.#sectionActive= sectionActive;
            this.#user=user;
        }


        getComponent(){
            const sidebar = document.createElement("sidebar");
            const viewAll = document.createElement("a");
            viewAll.id='view-all-categories';
            viewAll.innerHTML="Ver todas las categorias";
            viewAll.className="category p-link"
            sidebar.className="sidebar-categories";
            const hr = document.createElement("hr");
            hr.className="separator-categories";

            //por cada elemento en la lista creo un div (category-item) y se lo agrego/apendo al sidebar
            
            this.#categoriesList.forEach(categ => {
                sidebar.appendChild( this.#getCategoryItem(categ) );
            });
           
            sidebar.insertBefore(hr,sidebar.children[4]);
            sidebar.appendChild(viewAll);

           
            return sidebar;
        }

        listenEvents(position){
            this.#handleScrollPositionSidebar(position);
            this.#handleMouseEnterLeave();
        }
        //esta funcion se encarga de recibir del elemento padre la posicion del scroll en la que se debe renderizar la lista de categorias
        #handleScrollPositionSidebar(position){
            const sidebar = document.querySelector(".sidebar-categories");

            this.#scrollPosition=position;
            sidebar.scrollTop=position;
        }
        //crea el contenedor de cada categoria solo con el icono y le asigna los eventos para que al ser clickeado pueda ser identificado con data-value
        #getCategoryItem(categoryObj){
            const catContainer= document.createElement("a");
          
            
            catContainer.className=`category-item c-${Utils.replaceSpaces(categoryObj.name)} ${
                this.#activeCateg === null && categoryObj.name === this.#sectionActive ? "c-active":
                categoryObj.name == this.#activeCateg ? "c-active":''}`;
                
            catContainer.href=`#${Utils.replaceSpaces(categoryObj.name)}`;
                
                
            const template = `${Utils.SVGTemplate( categoryObj.iconSVG,"category-svg" )}
                              ${this.#getCategoryName(`category p-m p-bold `,`${Utils.capitalizeAndFormatter(categoryObj.name)}`,`${Utils.replaceSpaces(categoryObj.name)}`)}`;
                
            catContainer.innerHTML=template;
           

            catContainer.addEventListener("click", (e)=>{
                e.preventDefault();
                this.#handleClickCategory(catContainer);
            });

            return catContainer;
            
        }
        #getCategoryName(classname, content){
            const io= content === 'Io' ? '.io' : false;
            return`<p class=${classname}>${ io || content}</p>`;
        }
        //al pasar el mouse por el sidebar se crean y renderizan los nombres de las categorias
        #handleMouseEnterLeave(){
            const sidebar = document.querySelector(".sidebar-categories");
            
            sidebar.addEventListener("mouseenter", () => {
                const namesCategories = document.querySelectorAll(".category");

                namesCategories.forEach((t)=>{
                    t.style.display="flex";
                    
                })
          
                sidebar.classList.add("sidebar-expands");
            
                this.#scrollPosition=sidebar.scrollTop;
                sidebar.style.overflow = 'auto';
                

                this.#handleScrollSidebar(sidebar);
                
            });

            sidebar.addEventListener("mouseleave", () => {
                const namesCategories = document.querySelectorAll(".category");
                namesCategories.forEach((t)=>{
                    t.style.display="none";
                    
                })
                sidebar.classList.remove("sidebar-expands");
               
                sidebar.scrollTop=this.#scrollPosition;
                sidebar.style.overflow = 'hidden';

            });
        }
        //esta funcion se encarga de escuchar y mantener actualizado la posicion de la sidebar una vez desplegada
        #handleScrollSidebar(sidebarElement){
            sidebarElement.addEventListener("scroll", ()=>{
                this.#scrollPosition=sidebarElement.scrollTop;
            })
        }
        //captura en la categoria que se clickea a traves del data-value
        #handleClickCategory(element){
            const hrefValue= element.getAttribute("href");
            const active = document.querySelector(".c-active");
            const displaceSection= document.querySelector(`${hrefValue}`);
            if(active){
                active.classList.remove("c-active");
            }

            this.#activeCateg=Utils.unReplaceSpaces(hrefValue.slice(1));

            element.classList.add("c-active");
            
            if(displaceSection){
                displaceSection.scrollIntoView({ behavior: "smooth" });
            }else if (hrefValue == "#inicio"){
                showContent("inicio",this.#user);
            }else{
                console.log("clickeaste en seccion: "+hrefValue);
            }
           
        }
    }
    
    //este controla los eventos de la tarjeta, no los del avatar (porque avatar es del header)
    //aca ya asumis que el usuario esta logueado. no hace falta controlar la sesion
    class SessionCard {
        static singleton = null;
        #user;
        #profileCard;
       

        constructor(user){
            if(SessionCard.singleton){
                return SessionCard.singleton;
            }
            this.#user=user;

            SessionCard.singleton=this;
        }

        getComponent(){
            const card = document.createElement("section");
            card.className="session-card";

            const template = `
                            <div class="container-session">
                              <div class="btn-close-info">${Utils.customSVG("SVG_CLOSE",Constants.colors.white)}</div>
                              ${this.#getUserDetail()}
                              ${this.#getConfigList()}
                              ${this.#getSocial()}
                            </div>`;

            card.innerHTML=template;

            return card;
        }

        listenEvents(){
            this.#handleClickBtnClose();
            this.#handleClickLogOut();
           
        }

        handleClickWindow(profileCard) {
            this.#profileCard = profileCard;
            const overlay = document.getElementById("overlay");
        
            overlay.addEventListener("click", (e) => this.#handleClickRemoveOverlay(e));
        }


        #getUserDetail(){
            const userDetailTemplate = `
                            <div class="user-info-card" >
                                <div class="container-info-session">
                                    <div class="avatar-session">${this.#user.avatar}</div>
                                    <h2 class="p-xl p-bold" >${this.#user.nick}</h2>
                                    <h4 class="p-m p-bold email-session" >${this.#user.email}</h4>
                                </div>
                            </div>`;

            return userDetailTemplate;  
        }

        #getConfigList(){
            
            const itemList = (svg_name, textContent, customClass) => (
                `<li class="item-config p-m p-bold">
                    <div class="svg-config-item"> 
                        ${Utils.customSVG(svg_name ,Constants.colors.primary)} 
                    </div>
                    ${Utils.LinksTemplate(textContent,customClass)}
                </li>`);
           
            const configListTemplate = `
                            <div class="container-session-config">
                              <ul class="list-config">
                                ${itemList("SVG_PROFILE","Mi perfil","my-profile")}
                                ${itemList("SVG_EDIT","Editar perfil","edit-profile")}
                                ${itemList("SVG_CONFIG","Configuración de la cuenta","config-account")}
                                ${itemList("SVG_LOGOUT","Cerrar sesión","log-out")}
                              </ul>
                            </div>`;
           
            return configListTemplate;        
        }

        #getSocial(){
            const svgContainer = (svg_name)=>(`<div class="sm-social-item">${Utils.customSVG(svg_name,Constants.colors.white)} </div>`)

            const socialTemplate =
                            `<div class="session-social">
                                <div class="sm-social-container">
                                    <a href='https://www.facebook.com' target='_blank'>${svgContainer("FACEBOOK")}</a>
                                    <a href='https://www.instagram.com' target='_blank'>${svgContainer("INSTAGRAM")}</a>
                                    <a href='https://www.tiktok.com/es' target='_blank'>${svgContainer("TIKTOK")}</a>
                                </div>
                            </div>`;

            return socialTemplate;
        }

        #handleClickBtnClose(){
            const btn = document.querySelector(".btn-close-info");
         
            
            btn.addEventListener("click", ()=>{
                const card = document.querySelector(".session-card");
                const overlay= document.getElementById("overlay");
                overlay.remove();
                card.remove();               
            })
           
        }

        #handleClickRemoveOverlay = (e) => {
            if (!this.#profileCard || !this.#profileCard.contains(e.target)) {
                const overlay = document.getElementById("overlay");
                if (overlay) {
                    this.#profileCard.remove();
                    overlay.remove();
                    overlay.removeEventListener('click', this.#handleClickRemoveOverlay);
                }
            }
        };

        #handleClickLogOut(){
            document.querySelector(".log-out").addEventListener("click", () => {
                showContent("inicio",null);
            })
        }
    }

    class Home {
        #user;
        #content=[];

        constructor(user = null){
            this.#user=user;
            this.#content.push(new Carousel(games1,this.#user));
            this.#content.push(new Carousel(games2,this.#user));
            this.#content.push(new Carousel(games3,this.#user));
            this.#content.push(new Carousel(games4,this.#user));
        }
       

        getComponent(){
            let container = document.createElement("div");
            container.id="inicio";

            this.#renderAllCarousel(container);
         
            return container;
        }

        listenEvents(){
            
            this.#content.forEach((carousel)=>{
                carousel.listenEvents();
            })
          
        }

        #renderAllCarousel(container){
            let sizes=["xl","s","s","m"]
            let sectionUser= this.#user != null ? "continuar jugando": "nuevos";
            let categories=["mejor valoración",`${sectionUser}`,"top jugados de la semana","tendencias"];
            let pos=0;

            this.#content.forEach((carousel)=>{
                container.appendChild(carousel.getComponent(categories[pos],sizes[pos]));
                pos++
            })
        }
    }

    class Card{
        #game;
        #inCart;
        #size;
        #user;

        constructor(game,user){
            this.#game=game;
            this.#inCart=false;
            this.#user=user;
        }

        getComponent(size){return this.#getArticle(size)}

        listenEvents(){
            this.#handleMouseEnterLeave();
        }


        #getArticle(size){
            this.#size=size;
            const isPay= this.#game.esPago;
            const article = document.createElement("article");
            article.className=`card-${size} item-carousel-${size}`;
            article.style.backgroundImage=`url(${this.#game.frontImg})`;
            article.style.backgroundSize='cover';
            article.style.backgroundPosition='center';
            article.id=`game-${this.#game.id}`;
           
            
            const template = `${isPay ? this.#getPrice():''}`;
            
            article.innerHTML=template;

            return article;
        }

        #getPrice(){
            const priceTemplate = `<div class="price">
                                ${Utils.SVGTemplate(Utils.customSVG("SVG_PRICE",`${Constants.colors.white}`))}
                                ${this.#priceStyle(this.#game.precio)}
                              </div>`;

            return priceTemplate;
        }

        #getArticleDetails(){
            //ocupa todo el tamaño de la card 
            const isSmall= this.#size == 's';

            const detailsTemplate = `<div class="container-game-details" id="link-${this.#game.id}">
            <h2 class="game-title p-xl p-bold">${isSmall? Utils.capitalizeAndFormatter(this.#game.titulo) : Utils.capitalizeFirst(this.#game.titulo)}</h2>
            ${this.#getCartButtons()}</div>`;

            return detailsTemplate;
        }

        #getCartButtons(){
            const isPay=this.#game.esPago;

            const templateButton = `${isPay && !this.#inCart ? 
                Utils.customButton("btn-add-cart btn btn-card", `Al carrito ${ Utils.SVGTemplate( Utils.customSVG("ADD_CART",`${Constants.colors.white}`) )}`, `btn-${this.#game.id}`) :
                this.#inCart ? 
                Utils.customButton("btn-in-cart btn btn-card", `En el carrito ${ Utils.SVGTemplate( Utils.customSVG("IN_CART",`${Constants.colors.white}`))}`, `btn-${this.#game.id}`) :
                Utils.customButton("btn-play-game btn btn-card", `<span class="p-bold" >Jugar</span> ${ Utils.SVGTemplate( Utils.customSVG("PLAY_GAME",`${Constants.colors.white}`))}`, `btn-${this.#game.id}`)
            }`;

            return templateButton;                   
        }

        #priceStyle(price){
            let str = this.#convertPrice(price);
   
            let templatePrice= `<p class='p-m p-bold'> ${str[0]}<span class='p-s'>,${str[1]}</span></p>`;

            return templatePrice;
        }

        #convertPrice(price) {
            let num=parseFloat(price);

            let formattedNum = num.toFixed(2);
        
            let [integerPart, decimalPart] = formattedNum.split('.');
        
            integerPart = integerPart.replace(/\B(?=(\d{3})+(?!\d))/g, ".");
        
            
            return [integerPart,decimalPart];
        }

        #handleMouseEnterLeave(){
            const art=document.getElementById(`game-${this.#game.id}`);
            let isDetailsRendered=false;
            
            art.addEventListener("mouseenter", (e)=>{  
                if (!isDetailsRendered) { 
                    const element = document.querySelector(`#${e.target.id}`);
                    element.innerHTML += this.#getArticleDetails();
                        
                    isDetailsRendered = true; 
                    
                    
                    this.#handleClickButton();
                }
                    
            })

            art.addEventListener("mouseleave", (e)=>{
                const value = e.target.id.slice(5); //esto quita el prefijo "game-" del id del articulo
                const element = document.querySelector(`#link-${value}`);
                   
                element.remove();
                isDetailsRendered = false; 
                    
                    
            })

        }

        #handleClickButton(){
            const button = document.getElementById(`btn-${this.#game.id.toString()}`);  
            const isPay= button.classList.contains("btn-add-cart") || button.classList.contains("btn-in-cart");                         

           
            button.addEventListener("click", (e)=> {
                let isMyGame = this.#game.id == "20";
                if(isPay){
                    this.#toggleStateCart(button)
                }else if(isMyGame){
                    // showContent(`game/${this.#game.id}`);
                    showContent("game",this.#user);
                    
                }else{
                    console.log("CLICK EN JUGAR ");
                }
              
               
            })
            
        }

        #toggleStateCart(btn){
            this.#inCart=!this.#inCart;
            btn.classList.toggle("btn-add-cart");
            btn.classList.toggle("btn-in-cart");
            btn.innerHTML='';

            if(this.#inCart){
                btn.innerHTML+=`En el carrito ${Utils.SVGTemplate(Utils.customSVG("IN_CART",`${Constants.colors.white}`))}`;
            }else{
                btn.innerHTML+=`Al carrito ${Utils.SVGTemplate(Utils.customSVG("ADD_CART",`${Constants.colors.white}`))}`;
            }

        }
    }

    class Carousel {
        #id;
        #listData;
        #cardsList;
        #user;

        constructor(listData,user){
            this.#listData=listData;
            this.#cardsList=[];
            this.#user=user;
        }

        getComponent(sectionId,size){
            this.#id=`${Utils.replaceSpaces(sectionId)}`;
            const section= document.createElement("section");
            const carrousel = this.#getCarousel(size);
            const titleSection=this.#getTittleSection();
            section.id=`${this.#id}`;
            section.className="container-carousel";

            section.appendChild(titleSection);
            section.appendChild(carrousel);


            return section;
        }

        listenEvents(){
            this.#cardsList.forEach((card)=>{
                card.listenEvents();
            })

            this.#handleScroll();
            this.#handleHoverArrowsPrevNext();
        }

        #getTittleSection(){
            const isPersonalizated= this.#id == "continuar-jugando";
            const container = document.createElement("div");
            container.className="section-title";
            const title= `${Utils.unReplaceSpaces(this.#id)}`;
           
            const template=`<h4 class="subtitle-m">${Utils.capitalizeAndFormatter(title)}</h4>
                            ${isPersonalizated ? `<button class='p-link' id="edit-section">Editar</button>`: `<a href='#${this.#id}' class="p-link">Ver más</a>`}
                            `;

            container.innerHTML=template;

            return container;
        }

        #getCarousel(size){
            this.#getCards();
            const container = document.createElement("div");
            container.className="carousel";
            container.id=`carousel-${this.#id}`;
            const btnPrev = this.#getDisplaceBtn("prev");
            const btnNext = this.#getDisplaceBtn("next");

            container.appendChild(btnPrev);
            this.#cardsList.forEach((card)=>{
                container.appendChild(card.getComponent(size));
            })
            container.appendChild(btnNext);

            return container;

        }

        #getCards(){
            this.#listData.forEach((obj)=>{
                this.#cardsList.push(new Card(obj,this.#user));
            })
            
        }

        #getDisplaceBtn(type){
            const container = document.createElement("button");
            container.className =`btn-displace btn-${type}`;
            container.id=`btn-${type}-${this.#id}`;
         
            
            if(type=='prev'){
                container.style.display="none";
            }

            const template = `${Utils.SVGTemplate( Utils.customSVG(`ARROW_${type.toUpperCase()}`,"transparent"))}`;

            container.innerHTML=template;

            return container;

        }

        #handleScroll(){
            const carousel = document.getElementById(`carousel-${this.#id}`);
            const scrollAmount = carousel.offsetWidth * 0.95;
            
            document.getElementById(`btn-next-${this.#id}`).addEventListener("click", ()=> {
                this.#displaceScrollPosition(scrollAmount); 
            });
         
            document.getElementById(`btn-prev-${this.#id}`).addEventListener("click", ()=> {
                this.#displaceScrollPosition(-scrollAmount); 
            });

            carousel.addEventListener("scroll", this.#dismountArrowsPrevNext); 
        }

        #dismountArrowsPrevNext = () => {
            const carousel = document.getElementById(`carousel-${this.#id}`);
            const btnPrev = document.getElementById(`btn-prev-${this.#id}`);
            const btnNext = document.getElementById(`btn-next-${this.#id}`);
            const scrollEnd = carousel.scrollWidth - carousel.clientWidth;
           
            
            if (carousel.scrollLeft <= 6) {
                btnPrev.style.display="none";
                
            }else if(carousel.scrollLeft >= scrollEnd - 6){               
                btnNext.style.display = "none"; 
                
            }else{
                btnNext.style.display = "flex";
                btnPrev.style.display = "flex"; 
            }
        };

        #displaceScrollPosition(amount){
            const carousel = document.getElementById(`carousel-${this.#id}`);
            carousel.scrollBy({
              left: amount, 
              behavior: "smooth" 
            });
        }

        #handleHoverArrowsPrevNext(){
            const next = document.getElementById(`btn-next-${this.#id}`);
            const prev = document.getElementById(`btn-prev-${this.#id}`);
        
            const updateButtonIcon = (button, type, color) => {
                button.innerHTML = Utils.SVGTemplate(Utils.customSVG(type, color));
            };
        
            const addHoverEffect = (button, type) => {
                button.addEventListener("mouseenter", () => updateButtonIcon(button, type, `${Constants.colors.white}`));
                button.addEventListener("mouseleave", () => updateButtonIcon(button, type, "transparent"));
            };
        
            addHoverEffect(next, "ARROW_NEXT");
            addHoverEffect(prev, "ARROW_PREV");
        }

        
    }

    class SectionGame {
        #gameData;
        #user;          /*el obejto user deberia tener su arreglo de juegos jugados recientemente */
        #multimedia;
        #isLiked=false;
        #game= new Game();

        constructor(gameData,user){
            this.#gameData=gameData;
            this.#user=user;
            this.#multimedia=new Multimedia(this.#gameData);
        }


        getComponent(){
            const container = document.createElement("div");
            container.id="game-eject";

            container.appendChild(this.#getBreadcrum());
            container.appendChild(this.#getShareSection());
            container.appendChild(this.#getSectionGameExect());
            container.appendChild(this.#getTextSection("Descripción",this.#gameData.descipcion));
            container.appendChild(this.#getTextSection("Controles",this.#gameData.controles));
            container.appendChild(this.#getMultimediaSection());
            container.appendChild(this.#getCommentSection());
            container.appendChild(this.#getListComments());

            return container;
        }
        listenEvents(){
            this.#multimedia.listenEvents();
            this.#handleClickShareButton();
            this.#handleClickLikeGame();
            this.#handleClickPostComment();
            this.#handleInputTextArea();
            this.#handleClickLikeComment();
            this.#handleClickBtnPlayGame();

            
        }

        #loadGame(){
            this.#game.loadGame();
           
        }


        #getBreadcrum(){
            const container = document.createElement("div");
            container.className="breadcrum";
            const sectionName= "Jugados recientemente";     /*para hacer esto dinamico seria util tener los juegos como arreglo del usuario */
            const category = this.#gameData.categoria;
            const name= this.#gameData.titulo;

            const template = `<h4 class="p-m">
                                ${Utils.capitalizeFirst(sectionName)}<span class="p-bold"> > </span> 
                                ${Utils.capitalizeFirst(category)}<span class="p-bold"> > </span>
                                ${Utils.capitalizeFirst(name)}.
                            </h4>`;
            container.innerHTML=template;
            
            return container;
        }

        #getShareSection(){
            const container = document.createElement("div");
            container.className="container-share";

            const template = `<h2>${Utils.capitalizeFirst(this.#gameData.titulo)}</h2>
                              <div class="share-elements"><button id="btn-share" class="btn">${Utils.SVGTemplate( Utils.customSVG("SVG_SHARE",Constants.colors.white) )} Compartir</button></div>`;
            
            container.innerHTML=template;

            return container;
        }

        #getSocialShare(){
            const container = document.createElement("div");
            container.className='social-share-container';

            const template = `${Utils.SVGTemplate(Utils.customSVG("COPY_LINK"),"social-share")}
                              ${Utils.SVGTemplate(Utils.customSVG("WSP"),"social-share")}
                              ${Utils.SVGTemplate(Utils.customSVG("INSTAGRAM","#000000"),"social-share")}
                              ${Utils.SVGTemplate(Utils.customSVG("FACEBOOK","#000000"),"social-share")}`;
            container.innerHTML=template;

            return container;
        }




        #getSectionGameExect(){
            const container = document.createElement("section");
            container.className="container-execution";

            const template = `<div class="execution-game">
                                <div class="img-game"><img  src=${this.#gameData.frontImg} src="batman vs guason"></div>
                                <button id='btn-eject-game' class="btn-play-game btn-eject btn"><span class='p-bold'>Jugar</span> ${Utils.SVGTemplate(Utils.customSVG("PLAY_GAME",Constants.colors.white))}</button>
                            </div>`;
            container.innerHTML=template;
            container.appendChild(this.#getBarExect());

            return container;
        }

        #getBarExect(){
            const bar = document.createElement("div");
            bar.classList='bar-game-exec';
            const customLi = (content='',className='') =>{
                return `<li class=${className}>
                            ${content}
                        </li>`
            }            
            const template = `<h2>${Utils.capitalizeFirst(this.#gameData.titulo)}</h2>
                                    <ul>
                                        ${customLi(`${Utils.SVGTemplate(Utils.customSVG("SVG_LIKE",Constants.colors.white),"btn-like-game")}<span class='count-likes'>${this.#convertLikes(this.#gameData.likes)}<span>`,"likes")}
                                        ${customLi(Utils.SVGTemplate(Utils.customSVG("SVG_CTRL",Constants.colors.white),"controls"))}
                                        ${customLi(Utils.SVGTemplate(Utils.customSVG("SVG_EXPAND",Constants.colors.white),"expand"))}
                                    </ul>`;
            bar.innerHTML=template;

            return bar;
        }

        #getSectionControls(title,content,className=''){
            const container = document.createElement("section");
            container.className=`text-section ${className}`;

            const template = `<h3 class="p-l p-bold">${title}</h3>
                                <p class="p-m"> ${content}</p>`

            container.innerHTML=template;

            return container;
        }
          
        #getTextSection(title,content,className=''){
            const container = document.createElement("section");
            container.className=`text-section ${className}`;

            const template = `<h3 class="p-l p-bold">${title}</h3>
                                <p class="p-m"> ${content}</p>`

            container.innerHTML=template;

            return container;
        }

        #getMultimediaSection(){
            const container = document.createElement("section");
            const title = document.createElement("h3");
            title.className=`p-l p-bold`;
            title.innerText="Multimedia";
            container.id="multimedia";
            container.className="multimedia-section";

            container.appendChild(title);
            container.appendChild(this.#multimedia.getComponent());

            return container;

        }

        #getCommentSection(){
            const container = document.createElement("section");
            container.className="section-comment";

            const template = `<h3 class="p-l p-bold">Dejanos tu comentario</h3>
                              <div class="container-form-comment">
                                    <form id="form-comment" action="">
                                        <textarea placeholder="  Escribe un comentario" rows="5" required maxlength="480"></textarea>
                                        <button type="submit" ${this.#user == null ? 'disabled':''} class="btn" id="post-comment">Comentar</button>
                                    </form>
                              </div>`;
            container.innerHTML=template;

            return container;
        }

        #getListComments(){
            const container = document.createElement("section");
            container.className="section-all-comments";
            this.#getAllComments(container, this.#gameData.comentarios);
           

            return container;

        }

        #getAllComments(parent,listComments){
            const viewAll = document.createElement("a");
            viewAll.className="view-all-comments p-s p-bold";
            viewAll.textContent="Ver más comentarios";

            listComments.sort((c1,c2)=>{
                const [dayA, monthA, yearA] = c1.fecha.split("-");
                const [dayB, monthB, yearB] = c2.fecha.split("-");
                
                const dateA = new Date(`${yearA}-${monthA}-${dayA}`);
                const dateB = new Date(`${yearB}-${monthB}-${dayB}`);
            
                return dateB - dateA;
            })

            parent.innerHTML='';
            
            listComments.forEach((c)=>{
                const container= document.createElement("div");
                container.className="box-comment";

                const template =`<div class='comment-header'>
                                    <h4 class="p-m p-bold">${Utils.capitalizeFirst(c.usuario)}</h4>
                                    <p class='p-s'>${this.#convertDate(c.fecha)}</p>
                                </div>
                                <div class='comment-content'><p class='p-s'>${Utils.capitalizeFirst(c.comentario)}</p></div>
                                <div class='comment-likes'>
                                    <div class='comment-like-container'>
                                        ${Utils.SVGTemplate(Utils.customSVG("SVG_LIKE",Constants.colors.secondary20),`like-comment`,`like-${c.id}`)}
                                        <p class='str-like p-s'>${this.#convertLikes(c.likes)}</p>
                                    </div>
                                    <div class='comment-like-container'>
                                        ${Utils.SVGTemplate(Utils.customSVG("SVG_UNLIKE",Constants.colors.secondary20),`unlike-comment`,`unlike-${c.id}`)}
                                        <p class='str-like p-s'>${this.#convertLikes(c.unlikes)}</p>
                                    </div>
                                </div>`;

                container.innerHTML=template;

                parent.appendChild(container);
                parent.appendChild(viewAll);
            })

        }

        #handleClickBtnPlayGame(){
            const btn = document.querySelector("#btn-eject-game");

            btn.addEventListener("click", ()=>{
                const container = document.querySelector(".container-execution");
                const bar = document.querySelector(".bar-game-exec");
                const containerGame = document.createElement("div");

                while(bar.previousSibling){
                    bar.previousSibling.remove();
                }

                containerGame.classList='execution-game';
                containerGame.appendChild(this.#game.getCanvas());
                container.insertBefore(containerGame,bar);
               
                Config.loadImages().then(()=>{
                    this.#loadGame();
                })
            })
        }

        #handleClickShareButton(){
            const btn = document.getElementById("btn-share");

            btn.addEventListener("click",()=>{
                const parentElement = document.querySelector(".share-elements");
                if(parentElement.querySelector(".social-share-container")){
                    const share=document.querySelector(".social-share-container");
                    share.remove();
                }else{
                    parentElement.appendChild(this.#getSocialShare());
                }
            })
        }

        #handleClickLikeGame(){
            const btn = document.querySelector(".btn-like-game");
            
            btn.addEventListener("click", ()=>{
                const count = document.querySelector(".count-likes");
                this.#isLiked = !this.#isLiked;
                btn.innerHTML='';
                count.innerHTML='';

                if(this.#isLiked){
                    this.#gameData.likes=this.#gameData.likes+1;
                    btn.innerHTML=`${Utils.customSVG("SVG_LIKE",Constants.colors.secondary)}`;
                }else{
                    this.#gameData.likes=this.#gameData.likes-1;
                    btn.innerHTML=`${Utils.customSVG("SVG_LIKE",Constants.colors.white)}`;
                }
                count.innerHTML=`${this.#convertLikes(this.#gameData.likes)}`;
            })
        }

        #handleClickPostComment(){
            const form = document.querySelector("#form-comment");
            const error = document.createElement("p");
            error.className="empty-comment";
            error.textContent="El comentario no puede estar vacío.";

            form.addEventListener("submit",(e)=>{
                e.preventDefault();
                const textarea = e.target.querySelector("textarea");
                if(textarea.value == ''){
                    textarea.classList.toggle("textarea-empty");
                    if(!document.querySelector(".empty-comment")){
                        textarea.insertAdjacentElement('afterend',error);
                    }
                    
                }else{
                    const container = document.querySelector(".section-all-comments");
                    const btn = document.querySelector("#post-comment");
                    const newComment = {
                        id:`9`,
                        usuario:`${this.#user.nick}`,
                        comentario:`${textarea.value}`,
                        fecha:`${this.#getFormattedDate()}`,
                        likes:0,
                        unlikes:0
                    }
                    this.#gameData.comentarios.push(newComment);
                    this.#getAllComments(container, this.#gameData.comentarios);
                    textarea.value='';
                    btn.disabled = true;
                }    
            })
        }

        #handleClickLikeComment(){
            const likesBtn = document.querySelectorAll(".like-comment");
            const unlikesBtn=document.querySelectorAll(".unlike-comment");
            
            likesBtn.forEach((like)=>{
                like.addEventListener("click",(e)=>{
                    like.innerHTML='';
                    if(like.classList.contains("like-active")){
                        like.classList.remove("like-active");
                        like.innerHTML=`${Utils.customSVG("SVG_LIKE",Constants.colors.white)}`
                    }else{
                        like.classList.add("like-active");
                        like.innerHTML=`${Utils.customSVG("SVG_LIKE",Constants.colors.secondary)}`
                    }
                      
                })
            })
            unlikesBtn.forEach((unlike) =>{
                unlike.addEventListener("click",(e)=>{
                    unlike.innerHTML='';
                    if(unlike.classList.contains("unlike-active")){
                        unlike.classList.remove("unlike-active");
                        unlike.innerHTML=`${Utils.customSVG("SVG_UNLIKE",Constants.colors.white)}`
                    }else{
                        unlike.classList.add("unlike-active");
                        unlike.innerHTML=`${Utils.customSVG("SVG_UNLIKE",Constants.colors.secondary)}`
                    }    
                })
            })
        }

        #getFormattedDate() {
            const date = new Date(); 
            const day = String(date.getDate()).padStart(2, '0'); 
            const month = String(date.getMonth() + 1).padStart(2, '0'); 
            const year = date.getFullYear(); 
        
            return `${day}-${month}-${year}`; 
        }

        #handleInputTextArea(){
            const textarea = document.querySelector("textarea");
            const error = document.createElement("p");
            error.className="empty-comment";
            error.textContent="El comentario no puede estar vacío.";

            textarea.addEventListener("input", (e) => {
                if(e.target.value == ''){
                    textarea.classList.add("textarea-empty");
                    textarea.insertAdjacentElement('afterend',error);
                }else{
                    textarea.classList.remove("textarea-empty");
                    if(document.querySelector(".empty-comment")){
                        const p = document.querySelector(".empty-comment");
                        p.remove();
                    }
                }
                
            });
            textarea.addEventListener("click",(e)=>{
                if(e.target.value == ''){
                    textarea.insertAdjacentElement('afterend',error);
                }
                
            })

            textarea.addEventListener("focus", ()=>{
               
                if(document.querySelector(".empty-comment")){
                    textarea.classList.toggle("textarea-empty");
                    const p = document.querySelector(".empty-comment");
                    p.remove();
                }
            });

            textarea.addEventListener("blur", (e)=>{
                if(e.target.value === ''){
                    textarea.classList.add("textarea-empty");
                    textarea.insertAdjacentElement('afterend',error);
                }else{
                    if(document.querySelector(".empty-comment")){
                        textarea.classList.remove("textarea-empty");
                        const p = document.querySelector(".empty-comment");
                        p.remove();
                    }
                }
                
            });
        }

        #convertDate(date){
            const [d,m,a]=date.split("-");
            const format = new Date(`${a}-${m}-${d}`);
            const formatDate= new Intl.DateTimeFormat('es-Es',{
                day:'numeric',
                month:'short',
                year:'numeric'
            }).format(format);

            return formatDate;
        }

        #convertLikes(likes){
            const isBig = likes > 999;

            if(isBig){
                const like= likes/1000;
                const format = Number.isInteger(like) ? like : like.toFixed(1);
                return `${format} MIL`;
            }

            return likes;
        }


    }

    class Multimedia{
        #game;
        #isRenderMain=false;
        #isScrolling;

        constructor(game){
            this.#game=game;
        }

        getComponent(){
            const container = document.createElement("div");
            container.className="container-multimedia";
            container.id=`container-media-${this.#game.id}`;


            container.appendChild(this.#getMainMedia(this.#game.multimedia[0],0));
            container.appendChild(this.#getCarouselMultimedia());

            return container;
        }

        listenEvents(){
            this.#handleScroll();
            this.#handleHoverArrowsPrevNext();
            this.#handleClickPlayVideo();
            this.#handleClickCardCarrousel();
        }

        #getMainMedia(urlMedia,posInMediaList){
            let main='';
            const isVideo= urlMedia.slice(-4) == '.mp4';

            if(!this.#isRenderMain){
                main = document.createElement("div");
                main.id=`reprod-container`;
            }else{
                main=document.querySelector("#reprod-container");
            }
            
            
            if(isVideo){
                main.style.backgroundImage=`url(${this.#game.frontImg})`;
                main.style.backgroundSize='cover';
                main.style.backgroundPosition='center';
                const btnPlay = `</div><button id="${posInMediaList}" class="btn btn-play-game btn-play-video">Reproducir ${Utils.SVGTemplate(Utils.customSVG("PLAY_GAME",Constants.colors.white))}</button>`;

                main.innerHTML=btnPlay;
            }else{
                const container =document.createElement("div")
                container.className="container-media-main";
                const img = document.createElement("img");
                img.src=`${urlMedia}`;

                container.appendChild(img)

                main.appendChild(container);
            }

            this.#isRenderMain=true;
            
            return main;
        }

        #getCarouselMultimedia(){
            const container = document.createElement("div");
            container.className="carousel-multimedia";
            const btnPrev = this.#getDisplaceBtn("prev");
            const btnNext = this.#getDisplaceBtn("next");
            let pos =0;

            container.appendChild(btnPrev);

            this.#game.multimedia.forEach((urlMultimedia)=>{
                
                container.appendChild(this.#getCard(urlMultimedia,pos));
                
                pos++;
            })

            container.appendChild(btnNext);

            return container;
        }

    
        #getCard(urlMedia,index){
            const isVideo= urlMedia.slice(-4) == '.mp4';
           
            return this.#getCardMultimedia(isVideo,index);
            
        }

        #getCardMultimedia(isVideo, index){
            const container = document.createElement("div");
            container.className="card-carousel-media";
            container.setAttribute("data-value",`${index}`);
            let template ='';

            if(isVideo){
                container.style.backgroundImage=`url(${this.#game.frontImg})`;
                container.style.backgroundSize='cover';
                container.style.backgroundPosition='center';
                container.classList.add("card-video");
                template = `<button class="btn-play-game btn">${Utils.SVGTemplate(Utils.customSVG("PLAY_GAME",Constants.colors.white))}</button>`;
            }else{
                template = `<img src=${this.#game.multimedia[index]}>`;
            }

            container.innerHTML=template;

            return container;
        }

        #getVideoPlayer(pos){
            const urlVideo= this.#game.multimedia[pos];
            const container = document.createElement("div");
            const video= document.createElement("video");
            container.className="container-media-main";
            video.src=`${urlVideo}`;
            video.controls=true;
            video.play();
            container.appendChild(video);

            return container;
        }


        #getDisplaceBtn(type){
            const container = document.createElement("button");
            container.className =`btn-displace btn-${type}`;
         
            if(type=='prev'){
                container.style.display="none";
            }

            const template = `${Utils.SVGTemplate( Utils.customSVG(`ARROW_${type.toUpperCase()}`,"transparent"))}`;

            container.innerHTML=template;

            return container;

        }
        #addAnimationCards(){
            const cards = document.querySelectorAll(".card-carousel-media");
            cards.forEach((card)=>{
                card.classList.add("animation-item-right");
            })

        }
        #disableAnimation(){
            const cards = document.querySelectorAll(".card-carousel-media");
            cards.forEach((card)=>{
                card.classList.remove("animation-item-right");
            })
        }

        #handleScroll(){
            const carousel = document.querySelector(`.carousel-multimedia`);
            const scrollAmount = carousel.offsetWidth * 0.4;
          
            
            document.querySelector(`.btn-next`).addEventListener("click", ()=> {
                this.#displaceScrollPosition(scrollAmount); 
            });
         
            document.querySelector(`.btn-prev`).addEventListener("click", ()=> {
                this.#displaceScrollPosition(-scrollAmount); 
            });

            carousel.addEventListener("scroll", this.#dismountArrowsPrevNext); 
        }

        #dismountArrowsPrevNext = () => {
            const carousel = document.querySelector(`.carousel-multimedia`);
            const btnPrev = document.querySelector(`.btn-prev`);
            const btnNext = document.querySelector(`.btn-next`);
            const scrollEnd = carousel.scrollWidth - carousel.clientWidth;
       
          
            clearTimeout(this.#isScrolling);
            this.#addAnimationCards();
            this.#isScrolling=setTimeout(() => {
                setTimeout(() => {
                    this.#disableAnimation();
                }, 1200);
            }, 54);
           
            
            if (carousel.scrollLeft <= 6) {
                btnPrev.style.display="none";
                
            }else if(carousel.scrollLeft >= scrollEnd - 6){   
                
                            
                btnNext.style.display = "none"; 
                
            }else{
                btnNext.style.display = "flex";
                btnPrev.style.display = "flex"; 
            }
        };
        
    

        #displaceScrollPosition(amount){
          
     
            const carousel = document.querySelector(`.carousel-multimedia`);
            
            
            carousel.scrollBy({
              left: amount, 
              behavior: "smooth" 
            });
        }

        #handleHoverArrowsPrevNext(){
            const next = document.querySelector(`.btn-next`);
            const prev = document.querySelector(`.btn-prev`);
        
            const updateButtonIcon = (button, type, color) => {
                button.innerHTML = Utils.SVGTemplate(Utils.customSVG(type, color));
            };
        
            const addHoverEffect = (button, type) => {
                button.addEventListener("mouseenter", () => updateButtonIcon(button, type, `${Constants.colors.white}`));
                button.addEventListener("mouseleave", () => updateButtonIcon(button, type, "transparent"));
            };
        
            addHoverEffect(next, "ARROW_NEXT");
            addHoverEffect(prev, "ARROW_PREV");
        }

        #handleClickPlayVideo(){
            const btn = document.querySelector(".btn-play-video");
            const container = document.querySelector("#reprod-container");
       
            btn.addEventListener("click", (e)=>{
                container.innerHTML='';
                container.appendChild(this.#getVideoPlayer(e.target.id));
            })
            
          
        }

        #handleClickCardCarrousel(){
            const card = document.querySelectorAll(".card-carousel-media");
            const container = document.querySelector("#reprod-container");
            

            card.forEach((c)=>{
                c.addEventListener("click",(e)=>{
                    const pos= e.currentTarget.dataset.value;
                    const media = this.#game.multimedia[pos];
                    const isVideo= media.slice(-4) == '.mp4';
                    container.innerHTML=""

                    if(isVideo){
                        container.appendChild(this.#getVideoPlayer(pos));
                    }else{
                        this.#getMainMedia(media,pos);

                    }
                    
                })
            });
            
        }
    }

    class Spinner{

        constructor(){}

        getComponent(){
            let index=0;
            const totalSeg=5000;
            const container = document.createElement("div");
            container.className="container-spinner";
            const percentage=document.createElement("p");
            percentage.className='percentage-spinner';
            const spinner = document.createElement("div");
            spinner.className='textWrapper';
            spinner.innerHTML=`<p class="text-spinner">Loading...</p>
                                <div class="invertbox"></div>`;

            container.appendChild(spinner);
            container.appendChild(percentage);

            const interval= setInterval(() => {
                let render= (index * 100) / totalSeg;

                if(render > 100){
                    render=100;
                }
                percentage.innerHTML='';
                percentage.innerHTML=` ${render} %`;
                index=index+100;

            }, 90);

            setTimeout(()=>{
                clearInterval(interval);
                
            },totalSeg);

            return container;

        }
    }

    class Footer {

        constructor(){}

        getComponent(){
            const footer = document.createElement("footer");

            const template = `<div>
                                <ul class='list-footer'>
                                    <li class='contacto-item footer-item' >
                                        <h2 class='p-xl p-bold'>Contacto</h2>
                                        <label class='most-details-container check-hidden'>
                                            <input id='check-0' class='most-details' type='checkbox'>
                                            ${Utils.SVGTemplate(Utils.customSVG("DETAILS",Constants.colors.white))}
                                        </label>
                                        <p class='p-m p-bold hidden-mobile'>juegoscontacto@gmail.com.</p>
                                        <p class='p-m p-bold hidden-mobile'>+54-2494-673325.</p>
                                        <p class='p-m p-bold hidden-mobile'>Av. Santamarina 1237, Tandil, Bs. As., Argentina.</p>
                                    </li>
                                    <li class='legal-item footer-item'>
                                        <h2 class='p-xl p-bold'>Legal </h2>
                                         <label class='most-details-container check-hidden'>
                                            <input id='check-1' class='most-details' type='checkbox'>
                                            ${Utils.SVGTemplate(Utils.customSVG("DETAILS",Constants.colors.white))}
                                        </label>
                                        <a class='p-m p-bold hidden-mobile'>Copyright.</a>
                                        <a class='p-m p-bold hidden-mobile'>Licencias de software.</a>
                                    </li>
                                    <li class='nosotros-item footer-item'>
                                        <h2 class='p-xl p-bold'>Nosotros</h2>
                                        <label class='most-details-container check-hidden'>
                                            <input id='check-2' class='most-details' type='checkbox'>
                                            ${Utils.SVGTemplate(Utils.customSVG("DETAILS",Constants.colors.white))}
                                        </label>
                                        <a class='p-m p-bold hidden-mobile'>Desarrolladores.</a>
                                        <a class='p-m p-bold hidden-mobile'>Comunidad.</a>
                                        <a class='p-m p-bold hidden-mobile'>Historia.</a>
                                    </li>
                                    <li class='ayuda-item footer-item'>
                                        <h2 class='p-xl p-bold'>Ayuda</h2>
                                        <label class='most-details-container check-hidden'>
                                            <input id='check-3' class='most-details' type='checkbox'>
                                            ${Utils.SVGTemplate(Utils.customSVG("DETAILS",Constants.colors.white))}
                                        </label>
                                        <a class='p-m p-bold hidden-mobile'>Preguntas frecuentes.</a>
                                        <a class='p-m p-bold hidden-mobile'>Lista de categorias de juegos.</a>
                                    </li>
                                    <li class='suscribirse-item footer-item'>
                                        <h2 class='p-xl p-bold'>Suscribirse</h2>
                                         <label class='most-details-container check-hidden'>
                                            <input id='check-4' class='most-details' type='checkbox'>
                                            ${Utils.SVGTemplate(Utils.customSVG("DETAILS",Constants.colors.white))}
                                        </label>
                                        <p class='p-m suscription-text p-bold hidden-mobile'>¡Suscribite a nuestro <span class='p-bold p-m'>newsletter</span> para recibir promociones y lanzamientos de nuevos juegos!</p>
                                        <div class='container-suscription hidden-mobile'>   
                                            <form class='hidden-mobile' id="form-suscription"action=''>
                                                <input type='email'name="email" id='email-suscripcion' placeholder="correo@ejemplo.com" maxlength='90' required>
                                                <button id='btn-suscription' class='btn btn-primary' type="submit">Suscribirse</button>
                                            </form>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                            <hr class='separator-footer'>
                            <div class='social-footer'>
                                ${Utils.SVGTemplate(Utils.customSVG("FACEBOOK",Constants.colors.white))}
                                ${Utils.SVGTemplate(Utils.customSVG("INSTAGRAM",Constants.colors.white))}
                                ${Utils.SVGTemplate(Utils.customSVG("TIKTOK",Constants.colors.white))}
                            </div>`;

            footer.innerHTML=template;

            return footer;
        }

        listenEvents(){
            this.#handleCheckbox();
            this.#handleSubmitSuscription();
        }

        #handleCheckbox(){
            const checks = document.querySelectorAll(".most-details");

            checks.forEach((checkbox)=>{
                checkbox.addEventListener("change",()=>{
                    const parent = checkbox.closest(".footer-item");
                    let childs = '';
                    if(checkbox.checked){
                        childs=parent.querySelectorAll("p,a,.container-suscription");
                        childs.forEach((children)=>{
                            children.classList.remove("hidden-mobile");
                        })
                    }else{
                        childs=parent.querySelectorAll("p,a,.container-suscription");
                        childs.forEach((children)=>{
                            children.classList.add("hidden-mobile");
                        })
                    }
                    
                })
            })
        }

        #handleSubmitSuscription(){
            const form = document.querySelector("#form-suscription");
            form.addEventListener("submit", (e)=>{
                e.preventDefault();
                let f = new FormData(form);
                const input = document.getElementById("email-suscripcion");
                const btn = document.getElementById("btn-suscription");
                btn.classList.add("suscript-success");
                btn.innerHTML=''
                btn.innerHTML="Suscrito ✔"
                btn.disabled=true;
                setTimeout(() => {
                    btn.classList.toggle("suscript-success");
                    btn.innerHTML="Suscribirse";
                    btn.disabled=false;
                }, 1000);
                input.value='';
                console.log("Suscripcion para: "+ f.get("email"));
                
                
            })
        }
    }


    class LoginForm {
        #userCompare;    
        #sectionActive;
        
        constructor(userCompare,sectionActive) {
            this.#userCompare=userCompare;
            this.#sectionActive=sectionActive;
    
        }

        getComponent() {
            let container = document.createElement("div");
            container.id="log-in-form";
            container.innerHTML = `<h2>Iniciar sesion en <span class="flaming">Flaming</span><span class="games">Games</span></h2>
            <form id="form-login" action="">
                <input type="text" name="user" id="user" placeholder="Usuario" class="form-field">
                <div class="wrong-user-message alert-user p-s hidden"><span class='p-bold'>El usuario ingresado no existe</span></div>
                <input type="password" name="password" id="password-login" placeholder="Contraseña" class="form-field">
                <div class="wrong-password-message alert-pass p-s hidden"><span class='p-bold'>La contraseña es incorrecta</span></div>
                <input type="submit" value="Iniciar sesión" class="primary-btn">
            </form>
            <p><a class="p-s texto-link" href="#">Recuperar contraseña</a></p>
            <p class="p-s">¿No tienes una cuenta? <a href="" class="texto-link registrarse">Registrate</a></p>
            <hr>
            <button class="session-social google-btn"><img src="static/favicon/google-icon.png"><span>Iniciar sesión con Google</span></button>
            <button class="session-social facebook-btn"><span>${Utils.customSVG("FACEBOOK", Constants.colors.white)}</span><span>Continuar con Facebook</span></button>`;
            
            return container;
        }

        listenEvents() {
            this.#handleLogIn();
            this.#handleRegistrarseButton();
            this.#handleLoginSocial();
            this.#handleBlurInputs();
            this.#handleFocus();
        }
        #handleLoginSocial(){
            const btns= document.querySelectorAll(".session-social");
            btns.forEach((btn)=>{
                btn.addEventListener("click",()=>{
                    showContent("inicio",player);
                })
            })
        }
        #handleBlurInputs(){
            const inputs = document.querySelectorAll(".form-field");
            inputs.forEach((input) => {
                 input.addEventListener("blur",()=>{
                    if(input.value.trim() == '' || input.value == null){
                        input.classList.add("bad-input");
                    }else{
                        input.classList.remove("bad-input");
                    }
                    
                 })
            })
        }
        #handleFocus(){
            const btnUser=document.getElementById("user");
            const btnPass=document.getElementById("password-login");
            btnUser.addEventListener("focus",()=>{
                if(document.querySelector(".alert-user")){
                    document.querySelector(".alert-user").classList.add("hidden");
                }
            })
            btnPass.addEventListener("focus",()=>{
                if(document.querySelector(".alert-pass")){
                    document.querySelector(".alert-pass").classList.add("hidden");
                }
            })
        }
      

        #handleLogIn() {
            const form = document.querySelector("#log-in-form");
            const f=document.querySelector("#form-login");
            form.addEventListener("submit", e => {
                e.preventDefault();
                document.querySelectorAll(".form-field").forEach(e => {
                    e.classList.remove("bad-input");
                    e.nextElementSibling.classList.add("hidden");
                })
                
                let formData = new FormData(f);
                
                if (formData.get("user") != this.#userCompare.nick) {
                    
                    
                    
                    const user = document.querySelector("#user");
                    user.classList.add("bad-input");
                    user.nextElementSibling.classList.remove("hidden");
                    return;
                }
                if (formData.get("password") != this.#userCompare.password) {
                    const password = document.querySelector("#password-login");
                    password.classList.add("bad-input");
                    password.nextElementSibling.classList.remove("hidden");
                    return;
                }

               showContent("inicio",this.#userCompare);
            })
        }

        #handleRegistrarseButton() {
            const btn = document.querySelector(".registrarse");
            btn.addEventListener("click", e => {
                e.preventDefault();
                showContent("registro",null,this.#sectionActive)

            })
        }

    }

    class Login {
        #user;              /*si no hay logueado el user es nulo */ //*este usuario seria el extraído de la base de datos, que permite comparar lo que ingresa el usuario con lo que hay en la db*//
        #loginForm;
        #sectionActive;

        constructor(user = null,sectionActive){
            this.#user=user;
            this.#sectionActive=sectionActive;
            this.#loginForm = new LoginForm(this.#user,this.#sectionActive);
        }
       

        getComponent(){
            let container = document.createElement("div");
            container.id="log-in";
            container.appendChild(this.#loginForm.getComponent())
            
            return container;
        }

        listenEvents(){
            this.#loginForm.listenEvents();
            this.#handleClickCloseLogin();
        }

        #handleClickCloseLogin(){
            const parentElement = document.querySelector("#log-in");
            parentElement.addEventListener("click",(e)=>{
                if(e.target === parentElement){
                    parentElement.remove();
                }
            })
        }

    }


    class Registro {
        #user;              /*si no hay logueado el user es nulo */ //*este usuario seria el extraído de la base de datos, que permite comparar lo que ingresa el usuario con lo que hay en la db*//
        #registroForm;
        #sectionActive;


        constructor(user = null,sectionActive){
            this.#user=user;
            this.#sectionActive=sectionActive;
            this.#registroForm = new RegistroForm(this.#user, this.#sectionActive);
        }
       

        getComponent(){
            let container = document.createElement("div");
            container.id="registro";
            container.appendChild(this.#registroForm.getComponent())
            
            return container;
        }

        listenEvents(){
            this.#registroForm.listenEvents();
            this.#handleClickCloseLogin();
        }

        #handleClickCloseLogin(){
            const parentElement = document.querySelector("#registro");
            parentElement.addEventListener("click",(e)=>{
                if(e.target === parentElement){
                    parentElement.remove();
                }
            })
        }
    }

    class RegistroForm {
        #sectionActive;
        #allFieldsFull=true;
        
        constructor(sectionActive) {
            this.#sectionActive=sectionActive;
        }

        getComponent() {
            let container = document.createElement("div");
            container.id="registro-form";
            container.innerHTML = `<h2>Registrarse en <span class="flaming">Flaming</span><span class="games">Games</span></h2>
            <form class='form-register' action="">
                <label for="nombre" class="p-m">Nombre <span class='hidden p-s p-bold alert-field-empty'>¡Requerido!</span></label>
                <input type="text" name="nombre" id="nombre" placeholder="Juan" class="form-field">
                <label for="apellido" class="p-m" >Apellido <span class='hidden p-s p-bold alert-field-empty'>¡Requerido!</span></label>
                <input type="text" name="apellido" id="apellido" placeholder="Gómez" class="form-field">
                <label for="nickname" class="p-m">Nickname <span class="form-opcional p-s">(opcional)</span></label>
                <input type="text" name="nickname" id="nickname" placeholder="juancito238">
                <label for="nacimiento" class="p-m">Fecha de nacimiento <span class='hidden p-s p-bold alert-field-empty'>¡Requerido!</span></label>
                <input type="date" name="nacimiento" id="nacimiento" placeholder="dd/mm/yyyy" class="form-field">
                <label for="correo" class="p-m">Correo <span class='hidden p-s p-bold alert-field-empty'>¡Requerido!</span></label>
                <input type="email" name="correo" id="correo" placeholder="juan.gomez@gmail.com" class="form-field">
                <label for="password" class="p-m">Contraseña <span class='hidden p-s p-bold alert-field-empty'>¡Requerido!</span></label>
                <input type="password" name="password" id="password" class="form-field form-password">
                <label for="repeat-password" class="p-m">Repetir contraseña <span class='hidden p-s p-bold alert-field-empty'>¡Requerido!</span></label>
                <input type="password" name="repeat-password" id="repeat-password" class="form-field">
                <div class="wrong-input-message alert-password p-s hidden"><span class='p-bold'>Las contraseñas no coinciden</span></div>
                <div class="form-captcha">
                    <label for="captcha" class="p-m">Captcha <span class='hidden p-s p-bold alert-field-empty'>*</span></label>
                    <img src="static/assets/captcha.png">
                    <input type="text" name="captcha" id="captcha" class="form-field">
                    <div class="wrong-input-message alert-captcha p-s hidden"><span class='p-bold'>El captcha es incorrecto</span></div>
                </div>
                <div class="form-terms">
                    <input type="checkbox" name="terms" id="terms"><label for="terms" class="p-s">Acepto los términos y condiciones</label>
                </div>
                <div class="wrong-input-message alert-terms p-s hidden"><span class='p-bold'>Debes aceptar los términos y condiciones</span></div>
                <button type="submit" class="primary-btn btn-register">Registrarse</button>
            </form>\
            <p class="p-s">¿Ya tienes una cuenta? <a href="" class="texto-link iniciar-sesion">Iniciar sesión</a></p>`
            return container;
        }

        listenEvents() {
            this.#handleRegistro();
            this.#handleLoginBtn();
            this.#handleBlurInputs();
            this.#handleBlurInputPassword();
            this.#handleBlurCaptcha();
            this.#handleCheckedCheckbox();
            this.#handleIpuntNotEmpty();
        }

        #handleLoginBtn() {
            document.querySelector(".iniciar-sesion").addEventListener("click", e => {
                e.preventDefault();
                showContent("login",null,this.#sectionActive);
            })
        }

        #handleRegistro() {
            const form = document.querySelector("#registro-form form");
            form.addEventListener("submit", e => {
                e.preventDefault();
                
                let formData = new FormData(form);

                let passwordsMatch = formData.get("password") == formData.get("repeat-password");
                let captchaMatch = formData.get("captcha").toLowerCase() == "smwm";
                let terms = formData.get("terms");
                this.#allFieldsFull=true;
              

                
                const inputs = document.querySelectorAll(".form-field");
                inputs.forEach(input => {
                    const label = document.querySelector(`label[for='${input.id}']`);
                    const span= label.querySelector("span");
                    input.classList.remove("bad-input");
                    if (input.value.trim() == "" || input.value == null) {
                        span.classList.remove("hidden");
                        input.classList.add("bad-input");
                        this.#allFieldsFull = false;
                    }
                })

                document.querySelectorAll(".wrong-input-message").forEach(e => {
                    e.classList.add("hidden");
                })

                if (passwordsMatch && captchaMatch && terms && this.#allFieldsFull) {
                    document.querySelector(".form-register").reset();
                    const btn = document.querySelector(".btn-register");
                    btn.classList.add("register-success");
                    btn.innerHTML='';
                    btn.innerText="Registrado ✔";
                    btn.disabled=true;
                    inputs.forEach((input)=>{
                        const label = document.querySelector(`label[for='${input.id}']`);
                        const span= label.querySelector("span");
                        span.classList.add("hidden");
                    })
                    const alertPass=document.querySelector(".alert-password");
                    const span = alertPass.querySelector("span");
                    span.remove();
                    setTimeout(() => {
                        showContent("login",null);
                    }, 1500);
                   
                }


                if (!passwordsMatch) {
                    document.querySelectorAll(".wrong-input-message")[0].classList.remove("hidden");
                    document.querySelector("#password").classList.add("bad-input");
                    document.querySelector("#repeat-password").classList.add("bad-input");
                }

                if (!captchaMatch) {
                    document.querySelectorAll(".wrong-input-message")[1].classList.remove("hidden");
                    document.querySelector("#captcha").classList.add("bad-input");
                }

                if (!terms) {
                    document.querySelectorAll(".wrong-input-message")[2].classList.remove("hidden");
                }

                
            })
        }

        #handleIpuntNotEmpty(){
            const inputs = document.querySelectorAll(".form-field");
            inputs.forEach(input =>{
                input.addEventListener("input",()=>{
                    const label = document.querySelector(`label[for='${input.id}']`);
                    const span= label.querySelector("span");
                    if(input.value.trim() != ''){
                        span.classList.remove("hidden");
                        span.classList.remove("alert-field-empty");
                        let validations = this.#typesValidations(input);
                        if(validations){
                          this.#renderValidations(span,validations);
                           
                        }else{
                            span.classList.add("hidden");
                        }

                    }else{
                        span.classList.remove("alert-field-accep");
                        span.classList.remove("alert-field-medium");
                        span.classList.add("alert-field-empty");
                        span.innerHTML='';
                        if(input.id == 'captcha'){
                            span.innerHTML='*';
                        }else{
                            span.innerHTML='¡Requerido!';
                        }
                    }
                })
            })
            
        }
        #renderValidations(span, validations){
            
            if(validations[1] == 0){
                span.classList.remove("alert-field-medium");
                span.classList.remove("alert-field-accep");
                span.classList.add("alert-field-empty");
                if(validations[0]){
                    span.innerHTML=`${validations[0]}`;
                }
            }else if(validations[1] == 1){
                span.classList.remove("alert-field-empty");
                span.classList.remove("alert-field-accep");
                span.classList.add("alert-field-medium");
                span.innerHTML=`${validations[0]}`;

            }else if(validations[1]==2){
                span.classList.remove("alert-field-empty");
                span.classList.remove("alert-field-medium");
                span.classList.add("alert-field-accep");
                span.innerHTML=`${validations[0]}`;
            }
           
        }

        #typesValidations(input){
            const regex = /^[\w.-]+@[a-zA-Z\d.-]+\.[a-zA-Z]{2,4}$/;
         
            let emailSinArroba= (input.id == 'correo' && !regex.test(input.value.trim())) ? ['E-mail no valido', 0]: (input.id == 'correo' && regex.test(input.value.trim()))? ["Aceptable",2]:false;
            let nombreAndApellidoCorto= ((input.id == 'nombre' || input.id == 'apellido') && input.value.trim().length <= 2) ? ['Demasiado corto',1]:(input.id == 'nombre' || input.id == 'apellido') && input.value.trim().length >= 3 ? ['Aceptable',2]:false;
            let passwordLow = (input.id == 'password' && input.value.trim().length < 7) ? ['Demasiado corta',1]: (input.id == 'password' && input.value.trim().length >= 7) ? ['Aceptable',2]: false;
            let captcha = (input.id == 'captcha' && input.value.trim() != 'smwm' && input.value.trim().length >= 4 )?['Incorrecto',0]:(input.id == 'captcha' && input.value.trim() == 'smwm')?['¡Correcto!',2]:false;

            return emailSinArroba || nombreAndApellidoCorto || passwordLow || captcha;

        }

        

        #handleBlurInputs(){
            const inputs = document.querySelectorAll(".form-field");
            inputs.forEach((input) => {
                 input.addEventListener("blur",()=>{
                    const label = document.querySelector(`label[for='${input.id}']`);
                    const span= label.querySelector("span");
                    if(input.value.trim() == '' || input.value == null){
                        span.classList.remove("hidden");
                        input.classList.add("bad-input");
                    }else{
                        let validations = this.#typesValidations(input);
                        if(validations){
                          this.#renderValidations(span,validations);
                           
                        }
                        input.classList.remove("bad-input");
                      
                    }
                    
                 })
            })
        }
        #handleCheckedCheckbox(){
            const check = document.getElementById("terms");
            check.addEventListener("change",()=>{
                if(check.checked){
                    if(document.querySelector(".alert-terms")){
                        document.querySelector(".alert-terms").classList.add("hidden");
                    }
                }else{
                    if(document.querySelector(".alert-terms")){
                        document.querySelector(".alert-terms").classList.remove("hidden");
                    }
                }
            })
        }

        #handleBlurCaptcha(){
            const captcha = document.getElementById("captcha");
            captcha.addEventListener("blur", ()=>{
                const label = document.querySelector(`label[for='${captcha.id}']`);
                const span= label.querySelector("span");

                if(captcha.value.toLowerCase() != 'smwm'){
                    span.classList.remove("hidden");
                    span.classList.remove("alert-field-accep")
                    span.classList.add("alert-field-empty");
                    captcha.classList.add("bad-input");
                    span.innerHTML='';
                    span.innerHTML='*';
                }else{
                   
                    span.classList.remove("hidden");
                    span.classList.remove("alert-field-empty");
                    span.classList.add("alert-field-accep")
                    captcha.classList.remove("bad-input");
                    span.innerHTML='';
                    span.innerHTML='¡Correcto!';
                }
            })
            captcha.addEventListener("input", ()=>{
                if(captcha.value.toLowerCase() == 'smwm'){
                    if(document.querySelector(".alert-captcha")){
                        const alert =document.querySelector(".alert-captcha");
                        alert.remove();
                    }
                }
            })
        
        }

        #handleBlurInputPassword(){
            const repeat = document.getElementById("repeat-password");
            const password = document.getElementById("password");
            const alertPass=document.querySelector(".alert-password");

            repeat.addEventListener("input",()=>{
              
                const span= alertPass.querySelector("span");

                if(repeat.value.trim() != password.value.trim()){
                    alertPass.classList.remove("hidden");
                    span.classList.remove("alert-field-accep");
                    alertPass.classList.add("wrong-input-message");
                    span.innerHTML='';
                    span.innerHTML='Las contraseñas no coinciden';
                    
                }else{
                    alertPass.classList.remove("hidden");
                    alertPass.classList.remove("alert-field-empty");
                    alertPass.classList.remove("wrong-input-message");
                    span.classList.add("alert-field-accep");
                    span.innerHTML='';
                    span.innerHTML='Coinciden';
                }
               
            })

          


        }

    }


})();







