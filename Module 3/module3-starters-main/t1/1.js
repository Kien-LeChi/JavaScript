'use strict';

const q = document.querySelector("#target");
q.innerHTML += `<li>First item</li>`;
q.innerHTML += `<li>Second item</li>`;
q.innerHTML += `<li>Third item</li>`;

document.querySelector("#target").className += 'my-list ';
