import React from 'react'

const ChatHeader = ({ name, communityId, type }: {
  name: string
  communityId: string,
  type: string
}) => {
  return (
    <div className=' flex items-center justify-center h-12 border-black border-b-2 mx-0' style={{ background: "#bbe9db" }}>
      <p className=" capitalize font-semibold text-lg text-black dark:text-white">
        {name}
      </p>
    </div>
  )
}

export default ChatHeader