import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const body = await req.json();
  const { answer }: { answer: string } = body;

  const answerArray = answer.split(" ");
  const digits = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

  let digitsInAnswer: String[][] = [];

  answerArray.map((word) => {
    let digitsInWord: String[] = [];
    for (let i = 0; i < word.length; i++) {
      if (digits.includes(word[i])) {
        digitsInWord.push(word[i]);
      }
    }
    digitsInWord = digitsInWord.length == 0 ? ["0"] : digitsInWord;
    digitsInAnswer.push(digitsInWord);
  });

  const firstAndLastDigits = digitsInAnswer.map((digitsInAnswerArray) => {
    const doubleDigits = +`${digitsInAnswerArray[0]}${
      digitsInAnswerArray[digitsInAnswerArray.length - 1]
    }`;
    return doubleDigits;
  });

  const sum = firstAndLastDigits.reduce((partialSum, a) => partialSum + a, 0);

  return NextResponse.json({
    status: 200,
    body: {
      answer: sum,
    },
  });
}
