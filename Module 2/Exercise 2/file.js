'use strict';

const num = Number(prompt("Enter the number of participants"));
const arr = new Array();

for (let i = 0; i < num; i++) {
    arr.push(prompt(`Enter the number ${i + 1} participant's name`));
}

let output = String();
for (let i = 0; i < arr.length; i++) {
    output += `<li>${arr[i]}</li>`;
}

document.querySelector('#target').innerHTML = output;