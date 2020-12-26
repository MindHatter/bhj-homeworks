"use strict";

const dead = document.getElementById("dead");
const lost = document.getElementById("lost");

const holes = document.getElementsByClassName("hole");

for (var i = 0; i < holes.length; ++i) {
    holes[i].addEventListener('click', clickCheck);
}
function setUp(){
    dead.textContent = 0;
    lost.textContent = 0;
}

function clickCheck(){
    if (this.classList.contains('hole_has-mole')){
        dead.textContent -= -1;
    } else {
        lost.textContent -= -1;
    }
    if (dead.textContent == 10){
        alert("Вы победили!");
        setUp();
    } else if (lost.textContent == 5){
        alert("Вы проиграли!");
        setUp();
    }
}