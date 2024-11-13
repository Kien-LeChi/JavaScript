'use strict';

const arr = new Array();
for (let i = 0; i < 6; i++) {
    let name = prompt(`Enter the ${i + 1} dog's name`);
    arr.push(name);
}

arr.sort((x, y) => {
    return x < y ? 1 : ((x === y) ? 0   : -1);
})

let output = new String();
for (let i = 0; i < 6; i++) {
    output += `<li>${arr[i]}</li>`;
}

document.querySelector("#target").innerHTML = output;