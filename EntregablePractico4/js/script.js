"use strict"

document.addEventListener("DOMContentLoaded", () => {
    contentLoaded();
})

function contentLoaded() {
    animateMainSection();
    animateAppDivertidaSection();
    animateThreeImagesSection();
    animateDescargaSection();
    animateMasAmigosSection();
    animateVideoSection();
    animateObject3dSection();
}


function animateMainSection() {
    
    // --------------- HEADER: LOGO ANIMACION----------------
    let sectionContainer = document.querySelector(".number-blocks-section")
    let logo = document.querySelector(".logo");
    const endLogoAnimationScrollPixels = 200;
    window.addEventListener("scroll", () => {
        let y = (-1) * document.querySelector(".number-blocks-section").getBoundingClientRect().top
        let t = y/endLogoAnimationScrollPixels;
        if (t < 1) {
            logo.style.transform = "translateY(" + t*(-177) + "px) scale(" + ((1-t) + 0.27*t) + ")";
        } else {
            logo.style.transform = "translateY(-180px) scale(0.27)";
        }
    })


    let frontElements = document.querySelectorAll(".parallax-2");
    let backElements = document.querySelectorAll(".parallax-1");
    let leftElements = document.querySelectorAll(".animation-left-section-1");
    let rightElements = document.querySelectorAll(".animation-right-section-1");

    // --------------- PARALLAX ----------------
    animateParallax(frontElements, -0.5, 400, sectionContainer, 0)
    animateParallax(backElements, -0.3, 400, sectionContainer, 0)

    // --------------- APARICION ELEMENTOS ----------------
    window.addEventListener("scroll", () => {
        let y = (-1) * sectionContainer.getBoundingClientRect().top
        if (y >= 50) {
            leftElements.forEach(e => {
                e.classList.add("animated-trees-and-rocks-left");
            })
            rightElements.forEach(e => {
                e.classList.add("animated-trees-and-rocks-right");
            })
        }

        if (y >= 200) {
            frontElements.forEach(e => {
                e.classList.add("animated-blocks-section-1");
            })
        }
    })
}


function animateAppDivertidaSection() {

    const appDivertidaImg = document.querySelector(".app-divertida-img");
    let imgNumber = 0;
    setInterval(() => {
        if (imgNumber == 3) {
            imgNumber = 0;
        } else {
            imgNumber++;
        }
        appDivertidaImg.style.backgroundImage = "url('static/images/app-divertida-section-img" + imgNumber + ".jpg'";
    }, 3000)

    animateParallax(document.querySelectorAll(".app-divertida-img-container"),-0.1, 500, document.querySelector(".app-divertida-section"), -100);
    animateParallax(document.querySelectorAll(".app-divertida-section .block-4"),-0.2, 500, document.querySelector(".app-divertida-section"), 0);
    animateParallax(document.querySelectorAll(".app-divertida-section .block-5"),-0.2, 500, document.querySelector(".app-divertida-section"), 0);

}


function animateThreeImagesSection() {
    window.addEventListener("scroll", () => {
        let y = document.querySelector(".three-images-section").getBoundingClientRect().top;
        if (y < window.innerHeight*(2/3)) {
            let cardNumber = 0;
            document.querySelectorAll(".three-images-section .card").forEach(e => {
                setTimeout(() => {
                    e.classList.add("animated-cards");
                }, 300*cardNumber);
                cardNumber++;
            })
        }
    })
}


function animateDescargaSection() {
    const container = document.querySelector(".descarga-section");
    const img = document.querySelector(".descarga-section img");
    container.addEventListener("mousemove", e => {
        const rect = container.getBoundingClientRect();
        let mouseX = parseInt(e.clientX - rect.left); // posición X del mouse relativa a la imagen
        let mouseY = parseInt(e.clientY - rect.top) - 460; // posición Y del mouse relativa a la imagen

        if (mouseY > 0) {
            img.style.transform = "translate3d(" + (-mouseX*(30/640) + 30) + "px," + (-mouseY*(36/740)) + "px,0)"
        }
    })
}


function animateMasAmigosSection() {
    window.addEventListener("scroll", () => {
        let container = document.querySelector(".mas-amigos-section").getBoundingClientRect();
        let y = (-1) * container.top;
        let img = document.querySelector(".mas-amigos-section img");
        console.log(y);
        if (y > container.height - img.getBoundingClientRect().height - 150) {
            console.log("Ya no se mueve de nuevo")
            img.style.top = (container.height - img.getBoundingClientRect().height - 200) + "px"
        } else if (y > 0) {
            console.log("¡Se mueve!")
            img.style.top = (y-50) + "px"
        } else if (y < 0) {
            console.log("No se mueve")
            img.style.top = -50 + "px"
        }
    })
}


function animateVideoSection() {
    animateParallax(document.querySelectorAll(".video-section img"), -0.3, 1000, document.querySelector(".video-section"),0)
}

// function animateObject3dSection() {
//     let object = document.querySelector("#object-3d");
//     object.addEventListener("mousemove", e => {
//         const rect = object.getBoundingClientRect();
//         let mouseX = parseInt(e.clientX - rect.left); // posición X del mouse relativa a la imagen
//         let mouseY = parseInt(e.clientY - rect.top); // posición Y del mouse relativa a la imagen

//         let x = mouseX/rect.width;
//         let y = mouseY/rect.height;

//         object.cameraOrbit = x*150 + "deg " + (y*150) + "deg 100%"; 
//     })
// }




function animateParallax(elements, velocity, pixelsDuration, wrapper, wrapperOffset) {
    window.addEventListener("scroll", () => {
        let y = (-1) * wrapper.getBoundingClientRect().top - wrapperOffset;
        let t = y/pixelsDuration;
        if (t < 1 && t > 0) {
            elements.forEach(e => {
                e.style.transform = "translateY(" + y*velocity + "px)";
            })
        }
    })
}