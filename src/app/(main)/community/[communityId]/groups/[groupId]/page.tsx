import React from 'react'
import { auth } from '../../../../../../../auth'
import { redirect } from 'next/navigation';
import { db } from '@/lib/database/db';
import ChatHeader from '@/components/chat/ChatHeader';
import ChatInput from '@/components/chat/ChatInput';
import DrawPage from '@/components/draw/DrawPage';
import ChatMessages from '@/components/chat/ChatMessages';
import { Message } from '@prisma/client';
import VideoPlayer from '@/components/chat/VideoPlayer';

const GroupIdPage = async (
  { params }:
    { params: { communityId: string, groupId: string } }
) => {

  const session = await auth()
  const user = session?.user;

  if (!user) {
    return redirect("/");
  }

  const group = await db.group.findUnique({
    where: {
      id: params.groupId,
    }
  });

  const member = db.member.findFirst({
    where: {
      communityId: params.communityId,
      userId: user.id,
    }
  });

  const groupId = params.groupId;

  const existingMessages = await db.message.findMany({
    where: {
      groupId,
    },
    include: {
      member: {
        include: {
          user: true,
        }
      }
    },
    orderBy: {
      createdAt: "asc",
    }
  });

  if (!group || !member) {
    redirect("/onboard");
  }

  const meatype = typeof existingMessages
  console.log(meatype);

  return (
    <div className='bg-white dark:bg-[#46484d] flex flex-col h-full'>
      <ChatHeader
        name={group.name}
        communityId={group.communityId}
        type='group'
      />
      {group.type === "TEXT" && (
        <>
          <ChatMessages groupId={groupId} initialMessages={existingMessages} />
          <ChatInput
            apiUrl='/api/messages'
            name={group.name}
            query={{ communityId: group.communityId, groupId: group.id }}
            type='group'
          />
        </>
      )}
      {group.type === "AUDIO" && (
        <>
          {/* TODO: AUDIO CHANNEL COMPONENTS  */}
          <VideoPlayer />
        </>
      )}
      {group.type === "VIDEO" && (
        <>
          {/* TODO: VIDEO CHANNEL COMPONENTS  */}
          <VideoPlayer />
        </>
      )}
      {group.type === "DRAW" && (
        <>
          <DrawPage />
        </>
      )}
    </div>
  )
}

export default GroupIdPage