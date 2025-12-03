const fs = require('fs');


let end = 100;
let point = 50;

let answer = [];

const input = fs.readFileSync("inputs/input.day1.txt", "utf8");

const lines = input.trim().split('\n');
// console.log(lines);

const moves = lines.map(item => ({
    direction: item[0],
    steps: +(item.slice(1))
}));

// console.log(moves);

function mod(n, m) {
    return ((n % m) + m) % m;
}

for (let i = 0; i < moves.length; i++) {

    if (moves[i].direction === 'L') {
        point = mod(point - moves[i].steps, end);

    } else if (moves[i].direction === 'R') {
        point = mod(point + moves[i].steps, end);
    }

    if (point == 0) {
        answer.push(point);
    }
};
console.log(answer.length)
