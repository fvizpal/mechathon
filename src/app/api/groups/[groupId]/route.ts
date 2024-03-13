import { NextResponse } from "next/server";
import { auth } from "../../../../../auth";
import { group } from "console";


export async function POST(req: Request) {
  try {
    const session = await auth();
    const user = session?.user;

    const { name, type } = await req.json();

    if (!user) {
      return new NextResponse("Unauthorized", { status: 401 });
    }


  } catch (error) {
    console.log("[GROUP_POST]", error);
    return new NextResponse("Internal error", { status: 500 });
  }
}