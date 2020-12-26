"use strict";

const cookie = document.getElementById("cookie");
const counter = document.getElementById("clicker__counter");

cookie.onmousedown = function () {
    counter.textContent -= -1;
    cookie.width += 10;
    cookie.height += 10;
}

cookie.onmouseup = function (){
    cookie.width -= 10;
    cookie.height -= 10;
}