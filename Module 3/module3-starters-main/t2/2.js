'use strict';

const q = document.querySelector("#target");

let thing_1 = document.createElement("li");
let thing_2 = document.createElement("li");
let thing_3 = document.createElement("li");

thing_1.innerHTML = `First item`;
thing_2.innerHTML = `Second item`;
thing_3.innerHTML = `Third item`;

q.appendChild(thing_1);
q.appendChild(thing_2);
q.appendChild(thing_3);

thing_2.classList.toggle("my-item");
/* OR
thing_2.className = 'my-item';
*/