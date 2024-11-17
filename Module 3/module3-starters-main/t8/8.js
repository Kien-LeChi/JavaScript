'use strict';

let operations = ['add', 'sub', 'multi', 'div'];

const button = document.querySelector("#start");

button.addEventListener("click", () => {
    const output = document.querySelector("#result");
    let html = new String();

    let a = parseInt(document.querySelector("#num1").value);
    let b = parseInt(document.querySelector("#num2").value);
    let op = document.querySelector("#operation").value;

    switch (op) {
        case 'add':
            html = `${a + b}`;
            break;
        case 'sub':
            html = `${a - b}`;
            break;
        case 'multi':
            html = `${a * b}`;
            break;
        case 'div':
            html = `${a / b}`;
    }

    output.innerHTML = html;
    console.log(html);
})