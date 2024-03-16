'use client'

import React from 'react'
import { Button } from '../ui/button'
import { useModal } from '@/hooks/useModalStore';

const EnterButton = () => {
  const { onOpen } = useModal();

  return (
    <Button
      onClick={() => onOpen('auth')}
    >
      DIVE IN 🏊‍♀️
    </Button>
  )
}

export default EnterButton