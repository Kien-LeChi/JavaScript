'use strict';

let user_year = Number(prompt("Please enter a year number"))
while (isNaN(user_year)) {
    user_year = Number(prompt("Please enter a valid year number"));
}


let output = String();
if (user_year % 4 == 0 && user_year % 100 != 0 || user_year % 400 == 0) {
    output = `Year ${user_year} is a leap year.`;
}
else output = `Year ${user_year} is not a leap year.`;


document.querySelector('#result-year').innerHTML = output;