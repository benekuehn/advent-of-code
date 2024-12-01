import { file } from "bun";

const input = file('input.txt');
const numbersTxt = await input.text()
const numbers = numbersTxt.split(/\s+/).filter(Boolean);

let arrayLeft: Array<number> = [];
let arrayRight: Array<number> = [];

for (let i = 0; i < numbers.length; i++) {
  const value = numbers[i];
  if (value !== "") {
    const number = parseInt(value);
    if (i % 2 === 0) {
      arrayLeft.push(number);
    } else {
      arrayRight.push(number);
    }
  }
}

arrayLeft.sort();
arrayRight.sort();

const acc = arrayLeft.reduce((sum, num, i) =>
  sum + Math.abs(num - arrayRight[i]), 0);

console.log(acc);
console.log("time to run: " + Bun.nanoseconds() /1000000000)
