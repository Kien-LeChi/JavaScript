'use strict';

let num;
let array = new Array();
while (true) {
    num = parseInt(prompt("Please enter your numbers"));
    if (array.find((element) => element === num) !== undefined) break;

    array.push(num);
}
array = array.sort((a, b) => {
    a = Number(a);
    b = Number(b);
    return ((a - b > 0) ? 1 : (a - b < 0 ? -1 : 0));
})

for (let i = 0; i < array.length; i++) console.log(array[i]);