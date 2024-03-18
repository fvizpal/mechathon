import { NextResponse } from "next/server";
import { auth } from "../../../../../auth";
import { group } from "console";
import { db } from "@/lib/database/db";
import { MemberRole } from "@prisma/client";


export async function DELETE(req: Request, { params }: { params: { groupId: string } }) {
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
      return new NextResponse("Missing Community ID", { status: 400 });
    }

    if (!params.groupId) {
      return new NextResponse("Missing Group ID", { status: 400 });
    }

    const community = await db.community.update({
      where: {
        id: communityId,
        members: {
          some: {
            userId: user.id,
            role: {
              in: [MemberRole.ADMIN, MemberRole.MODERATOR],
            }
          }
        }
      },
      data: {
        groups: {
          delete: {
            id: params.groupId,
            name: {
              not: 'general',
            }
          }
        }
      }
    });

    return NextResponse.json(community);
  } catch (error) {
    console.log("[GROUPID_DELETE]", error);
    return new NextResponse("Internal error", { status: 500 });
  }
}