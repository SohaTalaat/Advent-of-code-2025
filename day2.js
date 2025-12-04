
const fs = require('fs');

const input = fs.readFileSync('inputs/input.day2.txt', 'utf8');

const Ids = input.trim().split(',');

const ranges = Ids.map((item) => ({
    start: parseInt(item.split('-')[0]),
    end: parseInt(item.split('-')[1])
}));

// Check for repeated numbers
function isInvalidID(num) {
    const str = num.toString();

    if (str.length % 2 !== 0) {
        return false;
    }

    const mid = str.length / 2;
    return str.slice(0, mid) === str.slice(mid);
}

// console.log(startEnd);

let answer = [];
for (range of ranges) {

    let start = range.start;
    let end = range.end;

    for (let i = start; i <= end; i++) {
        if (isInvalidID(i)) {
            answer.push(i);
        }
    }

}

// Sum up digits
const sumUp = answer.reduce((a, b) => a + b, 0)

console.log(answer);
console.log(answer.length);
console.log('Sum is:', sumUp);