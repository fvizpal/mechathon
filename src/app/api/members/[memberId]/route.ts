import { NextResponse } from "next/server";
import { auth } from "../../../../../auth";


// to delete a user
export async function DELETE(req: Request) {
  try {
    const session = await auth();
    const user = session?.user;

    if (!user) {
      return new NextResponse("Unauthourised", { status: 401 });
    }


  } catch (error) {
    console.log("[MEMBER_DELETE]", error);
    return new NextResponse("Internal error", { status: 500 });
  }
}

// to update role of user
export async function PATCH(req: Request) {
  try {
    const session = await auth();
    const user = session?.user;

    if (!user) {
      return new NextResponse("Unauthourised", { status: 401 });
    }


  } catch (error) {
    console.log("[MEMBER_DELETE]", error);
    return new NextResponse("Internal error", { status: 500 });
  }
}