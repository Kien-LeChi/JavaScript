'use strict';

const form = document.querySelector("#source");
const output = document.querySelector("#target");
form.addEventListener('submit', (evt) => {
    evt.preventDefault();

    let firstname = document.querySelector("#source input[name='firstname']").value;
    let lastname = document.querySelector("#source input[name = 'lastname']").value;

    output.innerText = `Your name is ${firstname} ${lastname}.`;
})