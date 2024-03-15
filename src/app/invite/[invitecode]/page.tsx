
import { redirect } from "next/navigation";
import { auth } from "../../../../auth";
import { db } from "@/lib/database/db";


interface InviteCodePageProps {
  params: {
    inviteCode: string;
  };
};

const InviteCodePage = async ({
  params
}: InviteCodePageProps) => {
  const session = await auth();
  const user = session?.user;

  if (!user) {
    return redirect("/");
  }

  if (!params.inviteCode) {
    return redirect("/onboard");
  }

  // redirect to the community if it already exists in the user's
  const existingCommunity = await db.community.findFirst({
    where: {
      inviteCode: params.inviteCode,
      members: {
        some: {
          userId: user.id
        }
      }
    }
  });

  if (existingCommunity) {
    return redirect(`/community/${existingCommunity.id}`);
  }

  // else create the community that he has been invited to 
  const community = await db.community.update({
    where: {
      inviteCode: params.inviteCode,
    },
    data: {
      members: {
        create: [
          {
            userId: user.id as string,
          }
        ]
      }
    }
  });

  if (community) {
    return redirect(`/community/${community.id}`);
  }

  return null;
}

export default InviteCodePage;