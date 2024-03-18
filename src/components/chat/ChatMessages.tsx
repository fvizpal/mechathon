'use client'

import { pusherClient } from '@/lib/pusher'
import { MemberRole, Message, User, } from '@prisma/client'
import React, { ElementRef, useCallback, useEffect, useRef, useState } from 'react'
import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar'

interface MessagesProps {
  initialMessages: Message[]
  groupId: string
}

function convertToReadableDateTime(dateTime: Date): string {
  const options: Intl.DateTimeFormatOptions = {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hour12: false // Use 24-hour format
  };
  return new Date(dateTime).toLocaleString(undefined, options);
}

const ChatMessages = ({ initialMessages, groupId }: MessagesProps) => {
  const [incomingMessages, setIncomingMessages] = useState<Message[]>([])
  const chatRef = useRef<ElementRef<"div">>(null);

  useEffect(() => {
    pusherClient.subscribe(groupId)

    pusherClient.bind('incoming-message', (message: Message) => {
      setIncomingMessages((prev) => [...prev, message])
    })

    return () => {
      pusherClient.unsubscribe(groupId)
    }
  }, [])

  return (
    <div className='mx-2 flex flex-col overflow-y-auto'>
      {initialMessages.map((message) => (
        <p ref={chatRef} key={message.id} className=' dark:bg-slate-800 flex gap-4 border-2 p-2 text-lg rounded-md font-medium my-2 bg-red-100 max-w-max'>
          <Avatar>
            <AvatarImage src="https://github.com/shadcn.png" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
          {message.content}
          <p className='text-xs'>{convertToReadableDateTime(message.createdAt)}</p>
        </p>
      ))}
      {incomingMessages.map((message) => (
        <p ref={chatRef} key={message.id} className=' dark:bg-slate-800 flex gap-4 border-2 p-2 text-lg rounded-md font-medium mt-4 bg-red-100 max-w-max'>
          <Avatar>
            <AvatarImage src="https://github.com/shadcn.png" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
          {message.content}
          <p className='text-xs'>{convertToReadableDateTime(message.createdAt)}</p>
        </p>
      ))}
    </div>
  )
}

export default ChatMessages