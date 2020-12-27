"use strict";

const menuItems = document.querySelectorAll(':scope ul.menu_main > .menu__item > .menu__link');

function clickMenu() {
    let subMenu = this.closest('.menu__item').querySelector('ul.menu_sub');
    if (subMenu) {
        subMenu.classList.toggle('menu_active');
        return false;
    }
}

menuItems.forEach(element => element.onclick = clickMenu);

