import React from 'react'
import { MobileToggle } from '../shared/MobileToggle'

const ChatHeader = ({ name, communityId, type }: {
  name: string
  communityId: string,
  type: string
}) => {
  return (
    <div className=' flex items-center bg-red-100 dark:bg-zinc-800 justify-center h-12 border-black border-b-2 mx-0'>
      <MobileToggle communityId={communityId} />
      <p className=" capitalize font-semibold text-lg text-black dark:text-white">
        {name}
      </p>
    </div>
  )
}

export default ChatHeader