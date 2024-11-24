'use strict';

async function thing() {
    let joke = await fetch('https://api.chucknorris.io/jokes/random');
    let json_data = await joke.json();
    console.log(json_data.value);
}
thing();