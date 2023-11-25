import { NextResponse } from "next/server";

// To handle a GET request to /api
export async function GET() {
  return NextResponse.json(
    {
      title: "About my Advent of Code project",
      body: "This is my Advent of Code website. Starting this year (2023), I plan to do as many Advent of Code challenges as possible while learning a bunch of new things. Although I got the idea from thinking about Advent of Code, any solved challenge is just an excuse to start building in the first place.",
      githubUrl: "https://github.com/benekuehn/advent-of-code",
    },
    { 
      status: 200
    }
  );
}