'use strict';

let arr = [];
for (let i = 1; i <= 5; i++) {
    arr.push(Number(prompt(`Please enter your ${i} number`)));
}

for (let i = 0; i < 5; i++) console.log(arr[i])