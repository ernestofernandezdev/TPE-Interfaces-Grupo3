(function(){

    window.addEventListener("DOMContentLoaded", ()=>{
        const home = new Home(player);                /*el home necesita saber si hay alguien logueado, si se inicializa sin parametros asumira que no hay logueados */
        /*const home= new Home() */      /*para inicializar sin usuario logueado */
    });

    const game={
        id:"5",
        titulo:"assasin creed",
        frontImg:null,
        categoria:"accion",
        multimedia:[null,null],
        descipcion:"es un juego sasrasara",
        controles:"con la flecha",
        comentario:["objetoComentario1"],
        precio:15800,
        esPago:true
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
        email:"juanfer@gmail.com"
    }



    class Constants{
        static root = document.querySelector("#root");
        
    }

    class Utils{
        static SVGTemplate=(content)=> (`<div class='container-svg'>${content}</div>`);

        static Links=(content,classStyle)=>{
            const a = document.createElement("a");
            a.innerText=content;
            a.className=classStyle;

            return a;
        }

        //los svg si no le determinas el tamaño, se adaptan a su contenedor
        static customSVG = (name, color)=>{

            const SVGS = {
               SVG_LOGOUT : `<svg viewBox="0 0 36 36" xmlns="http://www.w3.org/2000/svg" stroke="${color}" fill="none" stroke-width="2">
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

                SVG_CLOSE: `<svg viewBox="-0.5 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="${color}">
                    <g id="SVGRepo_bgCarrier" stroke-width="0"/>
                    <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"/>
                    <g id="SVGRepo_iconCarrier"> <path d="M3 21.32L21 3.32001" stroke="${color}" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/> <path d="M3 3.32001L21 21.32" stroke="#fafafa" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/> </g>
                    </svg>`,

            }
           
            
            return SVGS[name];
        }
    }


    class Header {
        #userLogin;
       
      

        constructor(userLogin){
            this.#userLogin=userLogin;
        }

        listenEvents(){
            const login= document.querySelector(".avatar-login");
            login.addEventListener("click",()=>{
                console.log("esto funcaaaaaa");

            })
        }

        getTemplate(){
            const header=document.createElement("header");
            const img = document.createElement("img");
            img.className="svg-container";

            if(this.#userLogin){
                img.src=this.#userLogin.avatar;
            }

            const template = `${Utils.SVGTemplate(Utils.customSVG("SVG_HAMBUR","#B7BEE4"))}
                             <h1 class="logo"><span class="flaming">Flaming</span><span class="games">Games</span></h1>
                            <ul class="navbar-list">
                                <li>${Utils.SVGTemplate(Utils.customSVG("SVG_CART","#B7BEE4"))}</li>
                                <li class="avatar-login">${this.#userLogin? Utils.SVGTemplate(this.#userLogin.avatar) : Utils.SVGTemplate(Utils.customSVG("SVG_LOGOUT","#B7BEE4"))}</li>
                            </ul>`;

            header.innerHTML=template;

            return header;
        }


        avatarEvent(){
            if(!this.#userLogin){
                return
            }

            const navbarList= document.querySelector(".navbar-list");
            const avatar = document.querySelector(".avatar-login");
            avatar.addEventListener("click", ()=>{

            })
        }


    
    }

    //este controla los eventos de la tarjeta, no los del avatar (porque avatar es del header)
    //aca ya asumis que el usuario esta logueado. no hace falta controlar la sesion
    class SessionCard {
        #user;
        #socialLinksList;


        constructor(user,socialLinkList){
            this.#user=user;
            this.#socialLinksList=socialLinkList;
        }

        getTemplate(){
            const card = document.createElement("section");
            card.className="session-card";





        }

        getUserDetailTemplate(){
            const userInfo = document.createElement("div");
            userInfo.className="user-info-card";

            const template = `<div class="avatar-session">${this.#user.avatar}</div>
                              <h2>${this.#user.nick}</h2>
                              <h3>${this.#user.email}</h3>`;

            userInfo.innerHTML=template;

            return userInfo;  
        }

        getConfingListTemplate(){
            const listContainer = document.createElement("div");
            listContainer.className="container-session-info";


            const template = `<ul class="list-config">
                                <li class="item-config">
                                    
                                </li>
                                <li class="item-config"> </li>
                                <li class="item-config"> </li>
                              </ul>`

     
        }

        // listenEvents(){

        // }


    }




    class Home {
        #rootElement;
        #header;
        #content;
        #user;

        constructor(user = null){
            this.#rootElement = Constants.root;
            this.#user=user;
            this.#header=new Header(user);
            this.loadHeader();

        }
       
        loadHeader = ()=>{
            this.#rootElement.appendChild(this.#header.getTemplate());
            this.#header.listenEvents();

        }


    }

    /*tengo que hacer game que contiene data para > card que sirve para hacer> carrousel */

    class Game {
        #id;
        #title;
        #frontImg;
        #category;
        #media;
        #description;
        #controllers;
        #comments;
        #price;
        #isPay;




    }


})();







