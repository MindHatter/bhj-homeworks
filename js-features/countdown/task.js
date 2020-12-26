"use strict";

function changeTime(){
    const timer = document.getElementById("timer");
    if (timer.textContent == 0){
        clearInterval(interval);
        alert("Вы победили в конкурсе!");
    } else {
        timer.textContent -= 1;
    }    
}

let interval = setInterval(changeTime,1000);