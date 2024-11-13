'use strict';

const sides = parseInt(prompt("Enter the number of sides on the dice"));

function roll_dice( side_cnt ) { //Function from exercise 6's file.js
    let ans = Math.floor(Math.random() * side_cnt + 1);
    return (ans == side_cnt + 1) ? side_cnt : ans;
}

let num = 0;
while (true) {
    let roll = roll_dice(sides);
    num++;
    document.querySelector('#target').innerHTML += `<li>Roll ${num} is: ${roll}</li>`
    if (roll == sides) break;
}