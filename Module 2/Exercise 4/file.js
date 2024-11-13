'use strict';

let num = -1;
let array = new Array();
while (true) {
    num = Number(prompt("Please enter a number"));
    if (num === 0) break;
    array.push(num);
}
array = array.sort((a, b) => {
    a = Number(a);
    b = Number(b);
    return (a - b > 0) ? 1 : ((a - b < 0) ? -1 : 0);
});
for (let i = array.length - 1; i >= 0; i--) console.log(array[i]); 