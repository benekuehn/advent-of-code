import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const body = await req.json();
  const { answer }: { answer: string } = body;

  const allowance = {
    red: 12,
    green: 13,
    blue: 14,
  };

  const gamesArray = answer
    .split("Game ")
    .filter(Boolean)
    .map((gameString) => {
      const [name, roundsString] = gameString.split(":");
      const roundsArray = roundsString
        .trim()
		.split(";")
        .map((roundString) => {
          const colorsCounts = roundString
            .trim()
            .split(",")
            .map((colorCount) => {
              const [count, color] = colorCount.trim().split(" ");
              return { [color.trim()]: parseInt(count) };
            });

          return Object.assign({}, ...colorsCounts);
        });

      return { name: `Game ${name.trim()}`, rounds: roundsArray };
    });

  const findValidGames = gamesArray.map((game) => {
    const { name, rounds } = game;

    const validRounds = rounds.map((round) => {
      return Object.keys(round).every(
        (color) => allowance[color] >= round[color],
      );
    });
    const validGame = Object.values(validRounds).every(
      (round) => round === true,
    );
    return { name, validGame };
  });

  console.log(findValidGames);

  const sumValidIndices = findValidGames.reduce((sum, game, index) => {
    if (game.validGame) {
      return sum + index + 1;
    }
    return sum;
  }, 0);

  return NextResponse.json({
    status: 200,
    body: {
      answer: sumValidIndices,
    },
  });
}
