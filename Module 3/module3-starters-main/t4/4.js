'use strict';
const students = [
  {
    name: 'John',
    id: '2345768',
  },
  {
    name: 'Paul',
    id: '2134657',
  },
  {
    name: 'Jones',
    id: '5423679',
  },
];

const q = document.querySelector("#target");
for (let student of students) {
    let new_ele = document.createElement("option");
    new_ele.value = student.id;
    new_ele.innerText = student.name;

    q.appendChild(new_ele);
}