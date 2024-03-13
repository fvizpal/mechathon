import React from 'react'
import { auth } from '../../../auth'
import { redirect } from 'next/navigation'
import { db } from '@/lib/database/db'
import { ScrollArea } from '../ui/scroll-area'
import NavigationItem from './NavigationItem'
import { Button } from '../ui/button'
import NavAddCommunity from './NavAddCommunity'
import { ModeToggle } from '../shared/ModeToggle'
import { UserButton } from '../shared/UserButton'

const NavigationSidebar = async () => {
  const session = await auth()
  const user = session?.user

  if (!user) {
    return redirect("/");
  }

  const communities = await db.community.findMany({
    where: {
      members: {
        some: {
          userId: user.id
        }
      }
    }
  });

  return (
    <div className='h-full flex flex-col items-center w-full py-4 space-y-4'>
      <NavAddCommunity />
      <ScrollArea className='flex-1 w-full'>
        {communities.map((community) => (
          <div key={community.id} className='mb-4'>
            <NavigationItem
              id={community.id}
              name={community.name}
              imageUrl={community.imageUrl}
            />
          </div>
        ))}
      </ScrollArea>
      <div className='pb-3 mt-auto flex flex-col items-center gap-y-4'>
        <ModeToggle />
        <UserButton />
      </div>
    </div>
  )
}

export default NavigationSidebar