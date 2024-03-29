import React, { Children } from 'react'
import { auth } from '../../../../../auth'
import { redirect } from 'next/navigation';
import { db } from '@/lib/database/db';
import CommunitySidebar from '@/components/community/CommunitySidebar';

const CommunityIdLayout = async ({
  children,
  params,
}: {
  children: React.ReactNode,
  params: { communityId: string }
}) => {
  const session = await auth();
  const user = session?.user

  if (!user) {
    redirect("/");
  }

  const community = await db.community.findUnique({
    where: {
      id: params.communityId,
      members: {
        some: {
          userId: user.id,
        }
      }
    }
  });

  if (!community) {
    redirect("/");
  }

  return (
    <div className="h-full">
      <div className='hidden md:flex h-full w-60 flex-col fixed '>
        <CommunitySidebar communityId={params.communityId} />
      </div>
      <main className='h-full md:pl-60'>
        {children}
      </main>
    </div>
  )
}

export default CommunityIdLayout