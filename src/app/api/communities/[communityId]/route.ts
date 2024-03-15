import { NextResponse } from "next/server";
import { auth } from "../../../../../auth";
import { db } from "@/lib/database/db";

export async function DELETE(
  req: Request,
  { params }: { params: { communityId: string } }
) {
  try {
    const session = await auth();
    const user = session?.user

    if (!user) {
      return new NextResponse("Unauthorized", { status: 401 });
    }

    const server = await db.community.delete({
      where: {
        id: params.communityId,
        userId: user.id,
      }
    });

    return NextResponse.json(server);
  } catch (error) {
    console.log("[COMMUNITY_ID_DELETE]", error);
    return new NextResponse("Internal Error", { status: 500 });
  }
}

export async function PATCH(
  req: Request,
  { params }: { params: { communityId: string } }
) {
  try {
    const session = await auth();
    const user = session?.user

    if (!user) {
      return new NextResponse("Unauthorized", { status: 401 });
    }

    const { name, imageUrl } = await req.json();

    const server = await db.community.update({
      where: {
        id: params.communityId,
        userId: user.id,
      },
      data: {
        name,
        imageUrl,
      }
    });

    return NextResponse.json(server);
  } catch (error) {
    console.log("[COMMUNITY_ID_PATCH]", error);
    return new NextResponse("Internal Error", { status: 500 });
  }
}