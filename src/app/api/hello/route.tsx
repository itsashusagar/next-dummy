import { NextResponse } from "next/server";

export function GET(request: Request) {
  return NextResponse.json([
    {
      title: "Hey Siri.....",
    },
    {
      title: "Karan Aujla",
    },
  ]);
}
