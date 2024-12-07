import { file } from "bun";

const input = await file('input.txt').text();

const rows = input.split("\n").filter(Boolean)

let xmasCounter = 0;

rows.forEach((row: string, rowIndex) => {

  xmasCounter += row.match(/XMAS/g)?.length || 0;
  xmasCounter += row.match(/SAMX/g)?.length || 0;

  Array.from(row).forEach((char, i) => {
    if (char === "X") {

      // down
      if (rowIndex <= rows.length - 4) {
        // diagonal right down
        rows[rowIndex + 1].charAt(i + 1) === "M" && rows[rowIndex + 2].charAt(i + 2) === "A" && rows[rowIndex + 3].charAt(i + 3) === "S" && xmasCounter++;
        // horizontal down
        rows[rowIndex + 1].charAt(i) === "M" && rows[rowIndex + 2].charAt(i) === "A" && rows[rowIndex + 3].charAt(i) === "S" && xmasCounter++;

        if (i >= 3) {
          // diagonal left down
          rows[rowIndex + 1].charAt(i - 1) === "M" && rows[rowIndex + 2].charAt(i - 2) === "A" && rows[rowIndex + 3].charAt(i - 3) === "S" && xmasCounter++;
        }
      };

      // up
      if (rowIndex >= 3) {
        // diagonal right up
        rows[rowIndex - 1].charAt(i + 1) === "M" && rows[rowIndex - 2].charAt(i + 2) === "A" && rows[rowIndex - 3].charAt(i + 3) === "S" && xmasCounter++;
        // horizontal up
        rows[rowIndex - 1].charAt(i) === "M" && rows[rowIndex - 2].charAt(i) === "A" && rows[rowIndex - 3].charAt(i) === "S" && xmasCounter++;

        if (i >= 3) {
          // diagonal left up
          rows[rowIndex - 1].charAt(i - 1) === "M" && rows[rowIndex - 2].charAt(i - 2) === "A" && rows[rowIndex - 3].charAt(i - 3) === "S" && xmasCounter++;
        }
      };
    }
  });
})

console.log(xmasCounter);
