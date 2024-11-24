'use strict';

let form = document.querySelector("#target")
const body = document.querySelector("#body")
form.addEventListener('submit', async (evt) => {
    evt.preventDefault();

    const user_input = form.querySelector('#search_bar').value;
    try {
        const response = await fetch(`https://api.tvmaze.com/search/shows?q=${user_input}`);
        const json_data = await response.json();

        let result = JSON.stringify(json_data, undefined, 2)
        console.log(result);

    } catch (error) {
        console.log(error.message);
    }
})


