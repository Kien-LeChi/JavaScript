'use strict';

function html(element, content = String()) {
    element.innerHTML = content;
    return element;
}

let form = document.querySelector("#target");
form.addEventListener('submit', async (evt) => {
    evt.preventDefault();

    const output = document.querySelector("#search-result");
    const user_input = form.querySelector('#search_bar').value;
    try {
        const response = await fetch(`https://api.tvmaze.com/search/shows?q=${user_input}`);
        let all_shows = await response.json();
        output.innerHTML = '';
        for (let index = 0; index < all_shows.length; index++) {
            const article = document.createElement('article');

            const show = all_shows[index].show;
            
            const name = html(document.createElement('h2'), `${show.name}`);
            const url = html(document.createElement('a'), `${show.url}`);
            url.target = '_blank';

            const img = document.createElement('img');
            img.src = `${show.image ? show.image.medium : 'https://via.placeholder.com/210x295?text=Not%20Found'}`;
            img.alt = `${show.name}`

            const div = document.createElement('div');
            div.innerHTML = show.summary

            article.appendChild(name);
            article.appendChild(url);
            article.appendChild(img);
            article.appendChild(div);
            
            output.appendChild(article);
        }

    } catch (error) {
        console.log(error.message);
    }
})


