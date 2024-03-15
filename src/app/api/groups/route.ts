import { NextResponse } from "next/server";
import { auth } from "../../../../auth";
import { group } from "console";
import { db } from "@/lib/database/db";
import { MemberRole } from "@prisma/client";


export async function POST(req: Request) {
  try {
    const session = await auth();
    const user = session?.user;
    const { name, type } = await req.json();
    const { searchParams } = new URL(req.url);

    const communityId = searchParams.get("communityId");

    if (!user) {
      return new NextResponse("Unauthorized", { status: 401 });
    }

    if (!communityId) {
      return new NextResponse("Server ID missing", { status: 400 });
    }

    if (name === "general") {
      return new NextResponse("Name cannot be 'general'", { status: 400 });
    }

    const community = await db.community.update({
      where: {
        id: communityId,
        members: {
          some: {
            userId: user.id,
            role: {
              in: [MemberRole.ADMIN, MemberRole.MODERATOR]
            }
          }
        }
      },
      data: {
        groups: {
          //@ts-ignore
          create: {
            userId: user.id,
            name,
            type,
          }
        }
      }
    });

    return NextResponse.json(community);
  } catch (error) {
    console.log("[GROUP_POST]", error);
    return new NextResponse("Internal error", { status: 500 });
  }
}