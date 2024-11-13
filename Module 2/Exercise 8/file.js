'use strict';

const input_array = ['Le', 'Chi', 'Kien', 'is', 'handsome'];

document.querySelector("#input").innerHTML += input_array;

function concat(string_array) {
    let ans_string = new String();
    for (let i = 0; i < string_array.length; i++) {
        ans_string += string_array[i];
        console.log(ans_string);
    }
    return ans_string;
}

const output_string = concat(input_array);

document.querySelector("#output").innerHTML += output_string;