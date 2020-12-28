'use strict';

const reveal = document.querySelectorAll(".reveal");
console.log(reveal);

function checkVisible() {
    let viewportHeight= window.innerHeight;
    reveal.forEach(elem => {
        let revealTop = elem.getBoundingClientRect().top;
        if (revealTop < viewportHeight) {
            elem.classList.add("reveal_active");
        } else {
            elem.classList.remove("reveal_active");
        }
    });
}

window.addEventListener("scroll", checkVisible);