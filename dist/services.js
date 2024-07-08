"use strict";
const voirLeMenu = document.getElementById('voirMenu');
const menuExit = document.querySelector('.carte-restaurant--croix');
const menuResto = document.querySelector('.carte-restaurant');
const voirLaCarte = document.querySelector('.train-btn');
const planExit = document.querySelector('.carte--zoo-croix');
const planZoo = document.querySelector('.carte');
voirLeMenu.addEventListener('click', () => {
    console.log(voirLeMenu, 'est cliqué');
    menuResto.classList.add('carte-restaurant--open');
});
menuExit.addEventListener('click', () => {
    menuResto.classList.remove('carte-restaurant--open');
});
voirLaCarte.addEventListener('click', () => {
    console.log(voirLaCarte, 'est cliqué');
    planZoo.classList.add('carte--open');
});
planExit.addEventListener('click', () => {
    planZoo.classList.remove('carte--open');
});
//# sourceMappingURL=services.js.map