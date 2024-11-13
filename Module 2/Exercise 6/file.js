'use strict';

function roll_dice() {
    let ans = Math.floor(Math.random() * 6 + 1);
    return (ans == 7) ? 6 : ans;
}
let num = 0;
while (true) {
    let roll = roll_dice();
    num++;
    document.querySelector('#target').innerHTML += `<li>Roll ${num} is: ${roll}</li>`
    if (roll == 6) break;
}