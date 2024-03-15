import { NextResponse } from "next/server";
import { auth } from "../../../../../auth";
import { db } from "@/lib/database/db";


// to delete a member
export async function DELETE(req: Request, { params }: { params: { memberId: string } }) {
  try {
    const session = await auth();
    const user = session?.user;

    if (!user) {
      return new NextResponse("Unauthourised", { status: 401 });
    }

    const searchParams = new URL(req.url).searchParams

    const communityId = searchParams.get("communityId");

    if (!communityId) {
      return new NextResponse("Missing communityID", { status: 400 });
    }

    if (!params.memberId) {
      return new NextResponse("Missing Mmber ID", { status: 400 });
    }

    const community = await db.community.update({
      where: {
        id: communityId,
        userId: user.id
      },
      data: {
        members: {
          deleteMany: {
            id: params.memberId,
            userId: {
              not: user.id
            }
          }
        }
      },
      include: {
        members: {
          include: {
            user: true,
          },
          orderBy: {
            role: "asc"
          }
        }
      }
    });

    return NextResponse.json(community);
  } catch (error) {
    console.log("[MEMBER_ID_DELETE]", error);
    return new NextResponse("Internal error", { status: 500 });
  }
}

// to update role of user
export async function PATCH(
  req: Request,
  { params }: { params: { memberId: string } }
) {
  try {
    const session = await auth();
    const user = session?.user;

    if (!user) {
      return new NextResponse("Unauthourised", { status: 401 });
    }

    const role = req.json();
    const searchParams = new URL(req.url).searchParams
    const communityId = searchParams.get("communityId");

    if (!communityId) return new NextResponse("Community ID missing", { status: 400 });

    if (!params.memberId) return new NextResponse("Member ID missing", { status: 400 });

    const community = db.community.update({
      where: {
        id: communityId,
        userId: user.id,
      },
      data: {
        members: {
          //@ts-expect-error
          update: {
            where: {
              id: params.memberId,
              userId: {
                not: user.id,
              }
            },
            data: {
              role,
            }
          }
        }
      },
      include: {
        members: {
          include: {
            user: true,
          },
          orderBy: {
            role: "asc"
          }
        }
      }
    });

    return NextResponse.json(community);
  } catch (error) {
    console.log("[MEMBER_DELETE]", error);
    return new NextResponse("Internal error", { status: 500 });
  }
}