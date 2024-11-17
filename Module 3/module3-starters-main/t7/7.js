'use strict';

const item = document.querySelector("#trigger");
const picture = document.querySelector("#target");

item.addEventListener('mouseover', () => {
    picture.src = 'img/picB.jpg';
})
item.addEventListener('mouseleave', () => {
    picture.src = 'img/picA.jpg';
})