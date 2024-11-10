'use strict';

let total_dice = Number(prompt("Please enter your desired amount of dices to roll"))
while (isNaN(total_dice) || total_dice <= 0 || (total_dice - Math.floor(total_dice))) {
    total_dice = Number(prompt("Please enter a positive integer"));
}

let sum = 0;
const output = `The sum of ${total_dice} dice rolls is `;

while (total_dice--) {
    let result = Math.floor(Math.random() * 6)  + 1;
    sum += (result == 7) ? 6 : result;
    console.log(`Roll ${50 - total_dice}: ${result} --- The sum is now ${sum}.`)
}
document.querySelector("#target").innerHTML = output + `${sum}.`;
