'use strict';
const names = ['John', 'Paul', 'Jones'];
const q = document.querySelector("#target");

for (let name of names) {
    let ele = document.createElement("li");
    ele.innerText = name;

    q.appendChild(ele);
}