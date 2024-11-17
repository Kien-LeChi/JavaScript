'use strict';

function sqr(a = Number()) {
    return a * a;
}

function big_pow(a, b) {
    if (b == 0) return 1;
    if (b == 1) return a;
    if (b & 1) return a * sqr(big_pow(a, Math.floor(b >> 1)));
    return sqr(big_pow(a, Math.floor(b >> 1)));
}

function evaluation_equation(input_string) {

    console.log(big_pow(2, 3));

    const error = `Please enter a correct expression`;

    // Only to deal with equation of type : {a} {operation} {b}
    // Operations type : * / + -
    // Figured might as well added the power (^) operation cus why not
    let ans = new String();
    let cur_idx = 0;
    let num1 = Number.NaN;
    let num2 = Number.NaN;

    if (cur_idx < input_string.length) for (num1 = 0; cur_idx < input_string.length; cur_idx++) {
        let cur = parseInt(input_string[cur_idx]);
        if (isNaN(cur)) break;

        num1 = num1 * 10 + cur;
    }

    let op = input_string[cur_idx++];
    if (cur_idx < input_string.length) for (num2 = 0; cur_idx < input_string.length; cur_idx++) {
        let cur = parseInt(input_string[cur_idx]);
        num2 = num2 * 10 + cur;
    }

    console.log(num1);
    console.log(op);
    console.log(num2);

    if (isNaN(num1) || isNaN(num2)) return error;
    switch (op) {
        case '+':
            ans = num1 + num2;
            break;
        case '-':
            ans = num1 - num2;
            break;
        case '*':
            ans = num1 * num2;
            break;
        case '/':
            ans = num1 / num2;
            break;
        case '^':
            ans = big_pow(num1, num2) + '';
            console.log(big_pow(num1, num2));
            break;
        default:
            return error;
    }
    return ans;
}

const button = document.querySelector("#start");
const equation = document.querySelector("#calculation");

button.addEventListener('click', () => {
    const answer = evaluation_equation(equation.value)
    const p = document.querySelector("#result");

    p.innerHTML = `${answer}`;
})