import { file } from "bun";

const input = await file('input.txt').text();

const numbers = input.match(/mul\((\d{1,3}),(\d{1,3})\)/g)?.map(str => {
  const [a, b] = str.match(/\d{1,3}/g)!.map(Number);
  return [a, b];
}) ?? [];

const result = numbers.reduce((sum, [a, b]) => sum + a * b, 0);

console.log('Result of multiplier ' + result);
console.log("time to run: " + Bun.nanoseconds() /1000000000)
