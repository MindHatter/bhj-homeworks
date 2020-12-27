"use strict";

// init
const main = document.getElementById("modal_main");
const success = document.getElementById("modal_success");
const closeBtn = Array.from(document.getElementsByClassName('modal__close'));
const showBtn = document.querySelector(".show-success");
const successBtn = document.querySelector(".btn_success");

main.classList.toggle('modal_active');

// Close modals
function close() {
    this.closest('.modal_active').classList.toggle('modal_active');
}

closeBtn.forEach(element => element.onclick = close);
successBtn.onclick = close;

// change modals
function changeModels(){
    main.classList.toggle('modal_active');
    success.classList.toggle('modal_active');
}

showBtn.onclick = changeModels;