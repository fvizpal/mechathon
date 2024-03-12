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
    <div>
      <NavAddCommunity />
      <ScrollArea>
        {communities.map((community) => (
          <div key={community.id}>
            <NavigationItem
              id={community.id}
              name={community.name}
              imageUrl={community.imageUrl}
            />
          </div>
        ))}
      </ScrollArea>
      <ModeToggle />
      <UserButton />
    </div>
  )
}

export default NavigationSidebar