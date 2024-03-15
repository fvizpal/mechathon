import React from 'react'
import { cn } from '@/lib/utils';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'

interface UserAvatarProps {
  src?: string;
  className?: string;
}

const UserAvatar = ({src, className}:UserAvatarProps) => {
  return (
    <Avatar className={cn("h-7 w-7 md:h-10 md:w-10",className)}>
      <AvatarImage src={src} />
      {/* <AvatarFallback>CN</AvatarFallback> */}
    </Avatar>

  )
}

export default UserAvatar