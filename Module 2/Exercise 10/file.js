'use strict';

let candidates_array = new Array();
const num_of_candidates = parseInt(prompt("Please enter the number of candidates"));
for (let i = 1; i <= num_of_candidates; i++) {
    let cand_name = prompt(`Name for candidate ${i}`)
    candidates_array.push({
        name: cand_name,
        votes: 0,
    })
}

const num_of_voters = parseInt(prompt("Please enter the number of votes"));

for (let i = 1; i <= num_of_voters; i++) {
    let cand_num = parseInt(prompt(`Please enter the number of the candidate you want to vote for, voter #${i}`));
    if (cand_num > num_of_candidates || cand_num < 1) console.log(`Voter #${i} skipped their vote`);
    candidates_array[cand_num - 1].votes++;
}

candidates_array = candidates_array.sort((a, b) => {
    a = Number(a.votes);
    b = Number(b.votes);
    return a - b < 0 ? 1 : (a - b > 0 ? -1 : 0);
})

console.log(`The winner is ${candidates_array[0].name} with ${candidates_array[0].votes} votes.`)
console.log(`Here are the results: `)
for (let i = 0; i < num_of_candidates; i++) {
    console.log(`${candidates_array[i].name}: ${candidates_array[i].votes} votes`);
}

