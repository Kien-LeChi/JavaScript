'use strict';
const total_dice = Number(prompt("Please enter the number of dices to roll"));
const interest = Number(prompt("Enter the sum of the eye numbers of interest"));
let success_count = 0;
let iterations_count = 10000;          //Changable

for (let iteration = 1; iteration <= iterations_count; iteration++) {
    let sum = 0;
    for (let roll = 1; roll <= total_dice; roll++) {
        let result = Math.floor(Math.random() * 6) + 1;
        sum += (result == 7) ? 6 : result;
    }
    success_count += sum == interest;
}

let probability = success_count / iterations_count * 100;

let output = `Probability to get sum ${interest} with ${total_dice} dices is ${probability.toFixed(2)}%.`;

document.querySelector("#target").innerHTML = output;