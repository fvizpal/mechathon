import { NextResponse } from "next/server";
import { auth } from "../../../../../../auth";


export async function PATCH(req: Request, { params }: { params: { communityId: string } }) {
  try {
    const session = await auth()
    const user = session?.user;

    if (!user) return new NextResponse("Unauthourised", { status: 401 });

    if (!params.communityId) return new NextResponse("CommunityId missing", { status: 400 });


  } catch (error) {
    console.log("[COMMUNITY_INVITE]", error);
    return new NextResponse("Internal Error", { status: 500 });
  }
}