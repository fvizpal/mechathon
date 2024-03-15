import { NextResponse } from "next/server";
import { auth } from "../../../../../../auth";
import { db } from "@/lib/database/db";
import { v4 } from "uuid";

export async function PATCH(req: Request, { params }: { params: { communityId: string } }) {
  try {
    const session = await auth()
    const user = session?.user;

    if (!user) return new NextResponse("Unauthourised", { status: 401 });

    if (!params.communityId) return new NextResponse("CommunityId missing", { status: 400 });

    const community = await db.community.update({
      where: {
        id: params.communityId,
        userId: user.id,
      },
      data: {
        inviteCode: v4(),
      },
    });

    return NextResponse.json(community);
  } catch (error) {
    console.log("[COMMUNITY_INVITE]", error);
    return new NextResponse("Internal Error", { status: 500 });
  }
}