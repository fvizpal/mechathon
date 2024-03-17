import { NextResponse } from "next/server";
import { auth } from "../../../../auth";
import { db } from "@/lib/database/db";
import { pusherServer } from "@/lib/pusher";
import { Message } from "@prisma/client";


export async function POST(req: Request) {
  try {
    const { content, fileUrl } = await req.json();

    const { searchParams } = new URL(req.url);
    const communityId = searchParams.get('communityId');
    const groupId = searchParams.get('groupId');

    const session = await auth();
    const user = session?.user;

    if (!user) {
      return new NextResponse("Unauthourised user", { status: 401 });
    }

    if (!communityId) {
      return new NextResponse("Missing communityID", { status: 400 });
    }

    if (!groupId) {
      return new NextResponse("Missing groupID", { status: 400 });
    }

    if (!content) {
      return new NextResponse("Missing content", { status: 400 });
    }

    pusherServer.trigger(groupId, 'incoming-message', content)

    const community = await db.community.findFirst({
      where: {
        id: communityId as string,
        members: {
          some: {
            userId: user.id
          }
        }
      },
      include: {
        members: true,
      }
    });

    if (!community) {
      return new NextResponse("community not found", { status: 404 });
    }

    const group = await db.group.findFirst({
      where: {
        id: groupId as string,
        communityId: communityId as string,
      }
    });

    if (!group) {
      return new NextResponse("group not found", { status: 404 });
    }

    const member = community.members.find((member) => member.userId === user.id);

    if (!member) {
      return new NextResponse("Member not found", { status: 404 });
    }


    const message = await db.message.create({
      data: {
        content,
        fileUrl,
        groupId: groupId as string,
        memberId: member.id,
      },
      include: {
        member: {
          include: {
            user: true,
          }
        }
      }
    });

    return NextResponse.json(message);
  } catch (error) {
    console.log("[MESSAGE_POST]", error);
    return new NextResponse("Internal error", { status: 500 });
  }
}

// export async function GET(
//   req: Request
// ) {
//   try {
//     const session = await auth();
//     const user = session?.user;

//     const { searchParams } = new URL(req.url);
//     const groupId = searchParams.get("groupId");

//     if (!user) {
//       return new NextResponse("Unauthorized", { status: 401 });
//     }

//     if (!groupId) {
//       return new NextResponse("Missing groupID", { status: 400 });
//     }

//     let messages: Message[] = [];

//     messages = await db.message.findMany({
//       where: {
//         groupId,
//       },
//       include: {
//         member: {
//           include: {
//             user: true,
//           }
//         }
//       },
//       orderBy: {
//         createdAt: "desc",
//       }
//     });

//     return NextResponse.json(messages);
//   } catch (error) {
//     console.log("[MESSAGE_GET]", error);
//     return new NextResponse("Internal error", { status: 500 });
//   }
// }