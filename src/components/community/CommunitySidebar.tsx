import React from 'react'
import { auth } from '../../../auth'
import { redirect } from 'next/navigation';
import { db } from '@/lib/database/db';

const CommunitySidebar = async ({ communityId }: { communityId: string }) => {
  const session = await auth();
  const user = session?.user;

  if (!user) {
    redirect("/onboard");
  }

  const community = await db.community.findUnique({
    where: {
      id: communityId,
    },
    include: {
      groups: {
        orderBy: {
          createdAt: "asc",
        }
      },
      members: {
        include: {
          user: true,
        },
        orderBy: {
          role: "asc",
        }
      }
    }
  });

  if (!community) {
    return redirect("/onboard");
  }

  const textGroups = community.groups.filter((group) => group.type === "TEXT");
  const audioGroups = community.groups.filter((group) => group.type === "AUDIO");
  const videoGroups = community.groups.filter((group) => group.type === "VIDEO");

  return (
    <div>CommunitySidebar</div>
  )
}

export default CommunitySidebar