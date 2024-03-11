'use client'

import React from 'react'
import { Button } from '../ui/button'
import { useModal } from '@/hooks/useModalStore';

const EnterButton = () => {
  const { onOpen } = useModal();

  return (
    <Button
      className=" text-slate-800 inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded-lg text-base mt-4 md:mt-0"
      onClick={() => onOpen('auth')}
    >
      DIVE IN 🏊‍♀️
    </Button>
  )
}

export default EnterButton