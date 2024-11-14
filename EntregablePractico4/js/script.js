"use strict"

document.addEventListener("DOMContentLoaded", () => {
    contentLoaded();
})

function contentLoaded() {
    
    let wrapper = document.querySelector(".number-blocks-section");
    let logo = document.querySelector(".logo");

    
    window.addEventListener("scroll", () => {
        let y = (-1) * wrapper.getBoundingClientRect().top
        console.log(y)
        if (y < 150) {
            logo.style.transform = "translateY(" + (y/150)*(-180) + "px) scale(" + ((1-(y/150)) + 0.27*(y/150)) + ")";
        } else {
            logo.style.transform = "translateY(-180px) scale(" + 0.27 + ")";
        }
    })

}