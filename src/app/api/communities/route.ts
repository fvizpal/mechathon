import { NextResponse } from "next/server";
import { auth } from "../../../../auth";
import { v4 as uuidv4 } from "uuid";
import { MemberRole } from "@prisma/client";
import { db } from "@/lib/database/db";

export async function POST(req: Request) {
  try {
    const { name, imageUrl } = await req.json()
    const session = await auth();
    const user = session?.user

    if (!user) {
      return new NextResponse("Unauthorized", { status: 401 });
    }

    const community = await db.community.create({
      data: {
        userId: user.id,
        name,
        imageUrl,
        inviteCode: uuidv4(),
        groups: {
          create: [
            // @ts-ignore
            { name: "general", userId: user.id }
          ]
        },
        members: {
          create: [
            // @ts-ignore
            { userId: user.id, role: MemberRole.ADMIN }
          ]
        }
      }
    });

    return NextResponse.json(community);
  } catch (error) {
    console.log("SERVER_POST", error);
    return new NextResponse("Internal Error", { status: 500 });
  }
}