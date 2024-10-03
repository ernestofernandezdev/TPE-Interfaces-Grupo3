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
        
    }

    class Utils{
        static SVGTemplate=(content)=> (`<div class='container-svg'>${content}</div>`);

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
                    
            }
           
            
            return SVGS[name];
        }
    }


    class Header {
        #userLogin;
        #sessionCard;
       
      
        constructor(userLogin){
            this.#userLogin=userLogin;
            this.#sessionCard=new SessionCard(userLogin);
            
        }

        listenEvents(){
            this.avatarEvent();
            
        }

        getTemplate(){
            const header=document.createElement("header");

            const template = `${Utils.SVGTemplate(Utils.customSVG("SVG_HAMBUR",Constants.colors.primary20))}
                             <h1 class="logo"><span class="flaming">Flaming</span><span class="games">Games</span></h1>
                            <ul class="navbar-list">
                                <li>${Utils.SVGTemplate(Utils.customSVG("SVG_CART",Constants.colors.primary20))}</li>
                                <li class="avatar-login">${this.#userLogin? Utils.SVGTemplate(this.#userLogin.avatar) : Utils.SVGTemplate(Utils.customSVG("SVG_PROFILE",Constants.colors.primary20))}</li>
                            </ul>`;

            header.innerHTML=template;

           

            return header;
        }


        /*esto se ejecuta 1 sola vez cuando lo invoca la pagina que quiere cargar/hacer uso de un header*/
        avatarEvent(){
          
            if(!this.#userLogin){
                return
            }
            let isFirstOpen = true;

            
            const navbarList= document.querySelector(".navbar-list");
            const avatar = document.querySelector(".avatar-login");

            const profileCard= this.#sessionCard.getTemplate();

            
            avatar.addEventListener("click", (e)=>{
                e.stopPropagation();

                navbarList.appendChild(profileCard);

                this.#sessionCard.handleClickWindow(profileCard);

                if(isFirstOpen){
                    this.#sessionCard.listenEvents(); 
                    isFirstOpen=false;     
                }
               
            })

          

        }

       


    
    }

    //este controla los eventos de la tarjeta, no los del avatar (porque avatar es del header)
    //aca ya asumis que el usuario esta logueado. no hace falta controlar la sesion
    class SessionCard {
        #user;
        #profileCard;
       

        constructor(user){
            this.#user=user;
        }

        getTemplate(){
            const card = document.createElement("section");
            card.className="session-card";

            const template = `
                            <div class="container-session">
                              <div class="btn-close-info">${Utils.customSVG("SVG_CLOSE",Constants.colors.white)}</div>
                              ${this.getUserDetailTemplate()}
                              ${this.getConfigListTemplate()}
                              ${this.getSocialTemplate()}
                            </div>`;

            card.innerHTML=template;

            return card;

        }

        getUserDetailTemplate(){
            const userDetailTemplate = `
                            <div class="user-info-card" >
                                <div class="container-info-session">
                                    <div class="avatar-session">${this.#user.avatar}</div>
                                    <h2 class="p-xl" >${this.#user.nick}</h2>
                                    <h3 class="p-m" >${this.#user.email}</h3>
                                </div>
                            </div>`;

            return userDetailTemplate;  
        }

        getConfigListTemplate(){
            
            const itemList = (svg_name, textContent ) => (
                `<li class="item-config p-m">
                    <div class="svg-config-item"> 
                        ${Utils.customSVG(svg_name ,Constants.colors.primary)} 
                    </div>
                    <a>${Utils.LinksTemplate(textContent)}</a>
                </li>`);
           

            const configListTemplate = `
                            <div class="container-session-config">
                              <ul class="list-config">
                                ${itemList("SVG_PROFILE","Mi perfil")}
                                ${itemList("SVG_EDIT","Editar perfil")}
                                ${itemList("SVG_CONFIG","Configuración de la cuenta")}
                                ${itemList("SVG_LOGOUT","Cerrar sesión")}
                              </ul>
                            </div>`;


            
            
           
            return configListTemplate;        
        }

        getSocialTemplate(){
            const svgContainer = (svg_name)=>(`<div class="sm-social-item">${Utils.customSVG(svg_name,Constants.colors.white)} </div>`)

            const socialTemplate =
                            `<div class="session-social">
                                <div class="sm-social-container">
                                    ${svgContainer("FACEBOOK")}
                                    ${svgContainer("INSTAGRAM")}
                                    ${svgContainer("TIKTOK")}
                                </div>
                            </div>`;

            return socialTemplate;
        }

        listenEvents(){
          this.handleRemoveCard();
         
        }

        handleRemoveCard(){
            const btn = document.querySelector(".btn-close-info");
         
            
            btn.addEventListener("click", ()=>{
                const card = document.querySelector(".session-card");
                card.remove();               
            })
           
        }

        handleClickWindow(profileCard) {
            this.#profileCard = profileCard;
    
            document.addEventListener('click', this.handleWindow);
        }

        handleWindow = (e) => {
            
            console.log("click en pantalla");
            
            if (this.#profileCard && this.#profileCard.contains(e.target)) {
                return; 

            } else {
                this.#profileCard.remove();
               
                document.removeEventListener('click', this.handleWindow);
            }

        };

     


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







