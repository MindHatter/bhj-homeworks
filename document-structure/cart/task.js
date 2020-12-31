'use strict';

const productButtons = Array.from(document.querySelectorAll('.product'));
const cart = document.querySelector('.cart__products');
const addButtons = document.getElementsByClassName('product__add');
const quantity = document.querySelectorAll('.product__quantity-value');
const productsInCart = cart.children;

for (let i = 0; i < addButtons.length; i++) { 
    productButtons[i].querySelector('.product__quantity-control_inc').addEventListener('click', () => quantity[i].innerText++)
    productButtons[i].querySelector('.product__quantity-control_dec').addEventListener('click', () => quantity[i].innerText > 1 ? quantity[i].innerText-- : quantity[i].innerText = 1)

    addButtons[i].addEventListener('click', () =>  {
        const product = Array.from(productsInCart).find(elem => elem.dataset.id == productButtons[i].dataset.id);
        if (product !== undefined) {
            const totalCount = Number(product.querySelector('.cart__product-count').innerText) + Number(quantity[i].textContent);
            return product.querySelector('.cart__product-count').innerText = totalCount;
        }
        cart.insertAdjacentHTML('beforeend', 
            `<div class="cart__product" data-id="${productButtons[i].dataset.id}">
            <img class="cart__product-image" src="${productButtons[i].querySelector('img').getAttribute('src')}">
            <div class="cart__product-count">${quantity[i].innerText}</div>
            </div>`
        );    
    })
}