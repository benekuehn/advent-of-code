const startTime = performance.now();
const path = "input.txt";
const file = Bun.file(path);

const input = await file.text();

export function getCircularIndex(index, length) {
  // This handles both positive steps and negative (backwards) steps correctly
  return ((index % length) + length) % length;
}

const instructions = input
  .split("\n")
  .map((line) => {
    const [direction, stepsString] = [line[0], line.slice(1)];
    const steps = parseInt(stepsString, 10);

    if (!isNaN(steps)) {
      return { direction, steps };
    }
  })
  .filter((line) => line !== undefined);

const clock = new Array(100).fill(0).map((_, i) => i);
let currentPosition = 50;

let pointingAtZeroCounter = 0;

for (const instruction of instructions) {
  if (!instruction) continue;

  const { direction, steps } = instruction;

  if (direction === "R") {
    console.log(
      `Moving right by ${steps} steps from position ${currentPosition}`,
    );
    const currentIndex = clock.indexOf(currentPosition);
    const newIndex = getCircularIndex(currentIndex + steps, clock.length);
    currentPosition = clock[newIndex];
    console.log(`new position is ${currentPosition}`);
  } else if (direction === "L") {
    console.log(
      `Moving left by ${steps} steps from position ${currentPosition}`,
    );
    const currentIndex = clock.indexOf(currentPosition);
    const newIndex = getCircularIndex(currentIndex - steps, clock.length);
    currentPosition = clock[newIndex];
    console.log(`new position is ${currentPosition}`);
  }

  if (currentPosition === 0) {
    pointingAtZeroCounter += 1;
  }
}

console.log(pointingAtZeroCounter);
const endTime = performance.now();
console.log(`Execution time: ${endTime - startTime} ms`);
