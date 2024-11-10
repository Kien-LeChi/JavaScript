'use strict';
name = prompt("Please enter your name");

// const witch_class = ['Gryffindor', 'Slytherin', 'Hufflepuff', 'Ravenclaw'];

let result = Math.floor(Math.random() * 4);
if (result === 4) result = 3;

let witch_class;

switch(result) {
    case 0:
        witch_class = 'Gryffindor';
        break;
    case 1:
        witch_class = 'Slytherin';
        break;
    case 2:
        witch_class = 'Hufflepuff';
        break;
    case 3:
        witch_class = 'Ravenclaw';
        break;
}
document.querySelector('#class-sorting').innerHTML = `${name}, you are ${witch_class}.`;