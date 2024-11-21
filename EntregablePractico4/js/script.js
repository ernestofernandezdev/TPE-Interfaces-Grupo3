"use strict"

document.addEventListener("DOMContentLoaded", () => {
    contentLoaded();
})

function contentLoaded() {
    animateBurgerMenu();
    animateMainSection();
    animateAppDivertidaSection();
    animateThreeImagesSection();
    animateDescargaSection();
    animateMasAmigosSection();
    animateVideoSection();
    animateObject3dSection();
    animateAllBlocksSection();
    animateFooter();
}


function animateBurgerMenu() {
    document.querySelector(".logo").addEventListener("click", e => {
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: "smooth"
        });
    })

    let active = false;
    let bar1 = document.querySelector(".burger-menu span:nth-child(1)")
    let bar2 = document.querySelector(".burger-menu span:nth-child(2)")
    let bar3 = document.querySelector(".burger-menu span:nth-child(3)")

    document.querySelector(".burger-menu").addEventListener("click", event => {
        if (active) {
            bar1.style = "";
            bar2.style = "";
            bar3.style = "";

            document.querySelector(".sidebar-categories").remove();

            active = false;

        } else {
            bar1.style.positon = "absolute";
            bar1.style.transform = "rotate(-45deg) translate(-7px,8px) scaleX(1.3)";
            bar1.style.boxShadow = "0 0";

            bar2.style.opacity = "0";

            bar3.style.positon = "absolute";
            bar3.style.transform = "rotate(45deg) translate(-7px,-8px) scaleX(1.3)";
            bar3.style.boxShadow = "0 0";
            
            active = true;

            renderCategoriesBurguerMenu();
        }
    })
}


function renderCategoriesBurguerMenu() {
    const nav = document.querySelector("nav");
    const container = document.createElement("div");
    container.className = "sidebar-categories";
    nav.parentNode.insertBefore(container, nav.nextElementSibling);
    const options = ["matematicas","diversion","numberblocks","efectos 3d", "contacto"];
    let index = 0;

    addItem(0,container,["informacion"]);

    const interval = setInterval(() => {
        if (index >= options.length) {
            clearInterval(interval);
            return;
        }

        addItem(index,container,options);

        index++;
    }, 900);
}

function addItem(index,container, options){
    const item = document.createElement("div");
    const link = document.createElement("a");
    link.href = `#${replaceSpacesWithDash(options[index])}`; 
    link.innerText = capitalizeFirstLetter(options[index]); 
    link.className = "category-link"; 


    item.appendChild(link); 
    item.className = "category";

    link.addEventListener("click", e => {
        e.preventDefault(); 
        document.querySelector(link.getAttribute("href")).scrollIntoView({
            behavior: "smooth"
        });
    });

    container.appendChild(item);

    
    requestAnimationFrame(() => {
        item.classList.add("show");
    });
}

function capitalizeFirstLetter(text) {
    if (text.length === 0) return text; 
    return text.charAt(0).toUpperCase() + text.slice(1);
}

function replaceSpacesWithDash(text) {
    return text.replace(/\s+/g, '-');
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
    img.addEventListener("mousemove", e => {
        const rect = container.getBoundingClientRect();
        let mouseX = parseInt(e.clientX - rect.left); // posición X del mouse relativa a la imagen
        let mouseY = parseInt(e.clientY - rect.top) - 460; // posición Y del mouse relativa a la imagen

        if (mouseY > 0) {
            img.style.transform = "translate(" + (-mouseX*(40/640) + 40) + "px," + (-mouseY*(60/740)) + "px)"
        }
        img.style.width = ""
    })

    img.addEventListener("mouseout", e => {
        img.style.width = "1280px"
        img.style.transform = "translate(0,0)";
    })

}


function animateMasAmigosSection() {
    let imageNumber = 0;
    let img = document.querySelector(".mas-amigos-section img");
    let newImageNumber;
    
    window.addEventListener("scroll", () => {
        let container = document.querySelector(".mas-amigos-section").getBoundingClientRect();
        let y = (-1) * container.top;
        let dy = (container.height - img.getBoundingClientRect().height - 150)/11;
        let max = container.height - img.getBoundingClientRect().height - 150;

        if (y > max) {
            img.style.top = (max - 50) + "px"
        } else if (y > 0) {
            newImageNumber = Math.trunc(10*(y+dy/2)/max)
            if (newImageNumber != imageNumber) {
                imageNumber = newImageNumber;
                img.src = "static/images/mas-amigos-" + imageNumber + ".png"
            }
            img.style.top = (y-50) + "px"
        } else if (y < 0) {
            img.style.top = -50 + "px"
        }
    })
}


function animateVideoSection() {
    animateParallax(document.querySelectorAll(".video-section img"), -0.3, 1000, document.querySelector(".video-section"),0)
}

function animateObject3dSection() {
    let object = document.querySelector("#object-3d");
    object.addEventListener("mousemove", e => {
        const rect = object.getBoundingClientRect();
        let mouseX = parseInt(e.clientX - rect.left); // posición X del mouse relativa a la imagen
        let mouseY = parseInt(e.clientY - rect.top); // posición Y del mouse relativa a la imagen

        let x = mouseX/rect.width;
        let y = mouseY/rect.height;

        object.cameraOrbit = x*150 + "deg " + (y*150) + "deg 100%"; 
    })
}

function animateAllBlocksSection() {
    document.querySelectorAll(".all-blocks-section img").forEach(element => {
        element.addEventListener("mouseover", event => {
            element.style.boxShadow = "0 0 30px 10px white";
            element.style.transform = "scale(1.05)";
        })

        element.addEventListener("mouseout", event => {
            element.style.boxShadow = "0 0 0 0 white";
            element.style.transform = "scale(1)";
        })
    })
}

function animateFooter() {
    document.querySelector(".sprite-sheet-2").addEventListener("click", e => {
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: "smooth"
        });
    })
}




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