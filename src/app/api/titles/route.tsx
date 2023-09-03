import { NextResponse } from "next/server";

export function GET(request: Request){
    return NextResponse.json({
        name:"Ashu Sagar",
        age: 23,
        city:"Delhi"
    })
}