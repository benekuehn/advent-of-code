import { file } from "bun";

const input = file('input.txt');
const numbersTxt = await input.text()

const rowsArray = numbersTxt.split("\n").filter(Boolean).map(row => row.split(" ").map(Number));

let safeReportCounter = 0;

rowsArray.forEach(row => {

  const diffNotGreaterThree = (number: number, i: number) => Math.abs(number - row[i - 1]) <= 3
  const notTheSameAsBefore = (number: number, i: number) => number !== row[i - 1]

  const isSortedAsc = (row.every((number, i) => i === 0 || (number >= row[i - 1] && diffNotGreaterThree(number, i)) && notTheSameAsBefore(number, i)));
  const isSortedDesc = (row.every((number, i) => i === 0 || (number <= row[i - 1] && diffNotGreaterThree(number, i)) && notTheSameAsBefore(number, i)));

  (isSortedAsc || isSortedDesc) && safeReportCounter++;
})

console.log(safeReportCounter + ' reports are safe');
console.log("time to run: " + Bun.nanoseconds() /1000000000)
