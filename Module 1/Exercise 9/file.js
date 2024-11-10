'use strict';

const num = Number(prompt("Enter a positive integer please"));
let result = true;
if (num <= 2) {
    result = Boolean(Math.max(0, num - 1));
}
else if (num >= 3) {
    for (let i = 2; i * i <= num; i++) {
        if (num % i == 0) {
            result = 0;
            break;
        }
    }
}

let output = `${num} is ` + (result ? '' : 'not ') + 'a prime.';
document.querySelector("#target").innerHTML = output;




