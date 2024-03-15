import React from 'react'
import { auth } from '../../../../../../../auth'
import { redirect } from 'next/navigation';
import { db } from '@/lib/database/db';
import ChatHeader from '@/components/chat/ChatHeader';
import ChatInput from '@/components/chat/ChatInput';

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

  if (!group || !member) {
    redirect("/onboard");
  }

  return (
    <div className='flex flex-col h-full'>
      <ChatHeader
        name={group.name}
        communityId={group.communityId}
        type='group'
      />
      {group.type === "TEXT" && (
        <>
          {/* TODO: TEXT CHANNEL COMPONENTS  */}
          <ChatInput
            apiUrl='api/socket/messages'
            name={group.name}
            query={{ communityId: group.communityId, groupId: group.id }}
            type='group'
          />
        </>
      )}
      {group.type === "AUDIO" && (
        <>
          {/* TODO: AUDIO CHANNEL COMPONENTS  */}
        </>
      )}
      {group.type === "VIDEO" && (
        <>
          {/* TODO: VIDEO CHANNEL COMPONENTS  */}
        </>
      )}
      {/* {group.type === "DRAW" && ( */}
      <>
        {/* TODO: VIDEO CHANNEL COMPONENTS  */}
      </>
      {/* )} */}
    </div>
  )
}

export default GroupIdPage