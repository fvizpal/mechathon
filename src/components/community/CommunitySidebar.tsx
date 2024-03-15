import React from 'react'
import { auth } from '../../../auth'
import { redirect } from 'next/navigation';
import { db } from '@/lib/database/db';
import { CommunityHeader } from './CommunityHeader';

interface CommunitySidebarProps {
  communityId: string;
}

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
  const members = community?.members.filter((member) => member.communityId !== community.id)
  const role = community.members.find((member) => member.communityId === community.id)?.role;
  
  
  return (
    <div  className="flex flex-col h-full text-primary w-full dark:bg-cyan bg-yellow">
    <CommunityHeader 
    community ={community}
    role = {role}
    />
    </div>
  )
}

export default CommunitySidebar