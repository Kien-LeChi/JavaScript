"use strict";
let x, y, z;
x = Number(prompt("Enter your first number"));
y = Number(prompt("Enter your second number"));
z = Number(prompt("Enter your third number"));

const sum = x + y + z;
const product = x * y * z;
const average = sum / 3;

document.getElementById("output-1").innerHTML = `The sum is ${sum}`;
document.getElementById("output-2").innerHTML = `The product is ${product}`;
document.getElementById("output-3").innerHTML = `The average is ${average}`;
