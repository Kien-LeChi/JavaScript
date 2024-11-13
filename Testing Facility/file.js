'use strict';


let arr = new Array();
for (let i = 0; i < 256; i++) {
    arr.push([-1, 1, 0]);
}
for (let i = 0; i < 256; i++) {
    arr.push([0, -1, 1]);
}
for (let i = 0; i < 256; i++) {
    arr.push([1, 0, -1]);
}
console.log(arr);
let i = 256, j = 0, k = 0, cnt = 0;
setInterval(() => {
    i += arr[cnt][0];
    j += arr[cnt][1];
    k += arr[cnt][2];
    document.querySelector('#target').style.color = `rgb(${i}, ${j}, ${k})`;
    cnt = (++cnt) % (256 * 3);
}, 5)