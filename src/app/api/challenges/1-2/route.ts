import { NextResponse } from "next/server";
import { toNumberAsString } from "./route.utils";

export async function POST(req: Request) {
  const body = await req.json();
  const { answer }: { answer: string } = body;

  const answerArray = answer.split(" ");
  const digits = [
    "0",
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "zero",
    "one",
    "two",
    "three",
    "four",
    "five",
    "six",
    "seven",
    "eight",
    "nine",
  ];

  type DigitsInWord = {
    [key: number]: string;
  };

  let digitsInChallenge: DigitsInWord[] = [];

  answerArray.map((word) => {
    let digitsInWord: DigitsInWord = {};

    digits.forEach((digit) => {
      const regex = new RegExp(digit, "gi");

      const matches = word.matchAll(regex);

      for (const match of matches) {
        if (match != undefined && match.index != undefined) {
          digitsInWord[match.index] = digit;
        }
      }
    });

    digitsInChallenge.push(digitsInWord);
  });

  const firstAndLastDigits = digitsInChallenge.map((digitsInWord) => {
    const firstDigit = Object.values(digitsInWord)[0];
    const lastDigit =
      Object.values(digitsInWord)[Object.values(digitsInWord).length - 1];
    return +`${toNumberAsString(firstDigit)}${toNumberAsString(lastDigit)}`;
  });

  const sum = firstAndLastDigits.reduce((partialSum, a) => partialSum + a, 0);

  return NextResponse.json({
    status: 200,
    body: {
      answer: sum,
    },
  });
}
