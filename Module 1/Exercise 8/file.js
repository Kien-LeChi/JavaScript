'use strict';
const start_year = Number(prompt("Please enter your beginning year"));
const end_year = Number(prompt("Please enter your ending year"));

let first_leap_year = Number();
for (let year = start_year; year < start_year + 4; year++) {
    if (year % 4 == 0 && year % 100 != 0 || year % 400 == 0) {
        first_leap_year = year;
        break;
    }
}


let output = String();
while (first_leap_year <= end_year) {
    if (first_leap_year % 100 != 0 || first_leap_year % 400 == 0) {
        output += `<li>${first_leap_year}</li>`;
    }
    first_leap_year += 4;
}

document.querySelector("#target").innerHTML = output;