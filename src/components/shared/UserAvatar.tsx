import React from 'react'
import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar'

const UserAvatar = ({ src }: { src: string }) => {
  return (
    <Avatar>
      <AvatarImage src={src} />
      <AvatarFallback>CN</AvatarFallback>
    </Avatar>

  )
}

export default UserAvatar