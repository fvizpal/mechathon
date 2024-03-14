import React from 'react'
import { auth } from '../../../auth'
import { redirect } from 'next/navigation'
import { db } from '@/lib/database/db'
import { ScrollArea } from '../ui/scroll-area'
import NavigationItem from './NavigationItem'
import NavAddCommunity from './NavAddCommunity'
import { Separator } from "@/components/ui/separator"


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
      <Separator />
      <ScrollArea className='flex-1 w-full m-1'>
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
    </div>
  )
}

export default NavigationSidebar