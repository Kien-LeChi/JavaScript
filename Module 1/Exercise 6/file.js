'use strict';

let choice = confirm("Should I calculate the square root?");
let output = String();

console.log(choice);

switch (choice) {
    case true: {
        let number = Number(prompt("Please enter a number to calculate its square root."));
        while (isNaN(number)) {
            number = Number(prompt("Please enter a valid number."));
        }

        if (number >= 0) {
            let ans = Math.sqrt(number);
            /*                                                      Decimal precision
            let precision = 5;                                      //custom float precision
            let decimals_string = String(ans - Math.floor(ans));
            console.log(decimals_string);
            console.log(typeof decimals_string);
            decimals_string = decimals_string.substr(1, precision + 1);
            
            output = `The number's square root is ${String(Math.floor(ans)) + decimals_string}`; 
            */
            
            output = `The number's square root is ${ans}.`;
        }

        else if (number < 0) {
            output = "The square root of a negative number is not defined.";
        }

        break;
    }
    
    case false: {
        output = 'The square root is not calculated';
        break;
    }
}

document.querySelector('#target').innerHTML = output;