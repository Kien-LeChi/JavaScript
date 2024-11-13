'use strict';

const input_array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function even(array) {
    let ans_array = new Array();
    for (let i = 0; i < array.length; i++)
        if (array[i] % 2 == 0)
            ans_array.push(array[i]);
    
    return ans_array;
}

const output_array = even(input_array);

document.querySelector("#input").innerHTML = input_array;
document.querySelector("#output").innerHTML = output_array;