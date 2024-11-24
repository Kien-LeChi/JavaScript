'use strict';

const output = document.querySelector("#joke-output");

form.addEventListener("submit", async (evt) => {
    evt.preventDefault();

    try {
        const user_input = document.querySelector("#query").value;
        
        let joke_promise = await fetch(`https://api.chucknorris.io/jokes/search?query=${user_input}`);
        let joke_json = await joke_promise.json();

        // console.log(joke_json);
        output.innerHTML = '';
        for (let i = 0; i < joke_json.total; i++) {
            let cur_joke = joke_json.result[i].value;
            let article = document.createElement('article');

            article.innerHTML = `<p>${cur_joke}</p>`;

            output.appendChild(article);
        }
    }
    catch (error) {
        console.log(error.message);
    }
})