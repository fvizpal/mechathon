'use client'

import { pusherClient } from '@/lib/pusher'
import { Message } from '@prisma/client'
import React, { ElementRef, useCallback, useEffect, useRef, useState } from 'react'

interface MessagesProps {
  initialMessages: Message[]
  groupId: string
}

const ChatMessages = ({ initialMessages, groupId }: MessagesProps) => {
  const [incomingMessages, setIncomingMessages] = useState<string[]>([])
  const chatRef = useRef<ElementRef<"div">>(null);

  useEffect(() => {
    pusherClient.subscribe(groupId)

    pusherClient.bind('incoming-message', (content: string) => {
      setIncomingMessages((prev) => [...prev, content])
    })

    return () => {
      pusherClient.unsubscribe(groupId)
    }
  }, [])

  return (
    <div className=' my-4 mx-4 border-2 inline-block'>
      {initialMessages.map((message) => (
        <p ref={chatRef} key={message.id} >
          {message.content}
        </p>
      ))}
      {incomingMessages.map((text, i) => (
        <p ref={chatRef} key={i}>{text}</p>
      ))}
    </div>
  )
}

export default ChatMessages