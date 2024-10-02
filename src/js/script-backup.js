///////////////////////////////////////////////////////////CODIGO PARA HACER NAVEGACION DINAMICA///////////////////////////////////////////////////////////////////



// esto se debera modificar para que showHome se ejecute cuando se inicie sesion 
window.addEventListener("popstate", e=>{ 
    console.log(e);       //esto maneja el evento de ir hacia adelante y atras en el sitio
    
    // let estadoAnterior= e.state.idSeccion;     // al hacer click en adelante o atras, captura el id del elemento donde estabamos parados anteriormente
    // console.log("estado id="+ estadoAnterior);
    if(e.state != null){
        showContent(e.state.idSeccion);//renderiza el contenido acorde al id capturado
        
    }else{
        showContent("inicio");
        
    }
})
function showContent(section) {
    const root= document.querySelector("#root");
    root.innerHTML=' ';
    
    if(section == "inicio"){
        
    }else if(section == "game"){
        
    }else if(section == "login"){
        
    }else{
        console.log("render error");
    }
}