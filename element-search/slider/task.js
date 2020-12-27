'use strict';

const sliderItems = document.querySelectorAll('.slider__item');
const sliderArrowPrev = document.querySelector('.slider__arrow_prev');
const sliderArrowNext = document.querySelector('.slider__arrow_next');

let prev;
let next = 0;

function leafSlider(next) {
    sliderItems[prev].classList.toggle('slider__item_active');
    sliderItems[next].classList.toggle('slider__item_active');
}

sliderArrowPrev.onclick = () => {
    prev = next;
    next -= 1;
    if (next < 0) {
        next = sliderItems.length - 1;
    }
    leafSlider(next);
}
sliderArrowNext.onclick = () => {
    prev = next;
    next += 1;
    if (next > sliderItems.length - 1) {
        next = 0;
    }
    leafSlider(next);
}
