import React from 'react'

const ChatHeader = ({ name, communityId, type }: {
  name: string
  communityId: string,
  type: string
}) => {
  return (
    <div className=' flex items-center h-12 border-b-2'>
      <p className="font-semibold text-black dark:text-white">
        {name}
      </p>
    </div>
  )
}

export default ChatHeader