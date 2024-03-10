'use client'

import { Button } from '../ui/button'
import { useModal } from '@/hooks/useModalStore'

const CheckModal = () => {
  const { onOpen } = useModal();

  return (
    <div className='flex flex-col gap-5'>
      <Button onClick={() => onOpen('auth')}>AuthModal</Button>
      <Button onClick={() => onOpen('createCommunity')}>CreateCommunityModal</Button>
      <Button onClick={() => onOpen('createGroup')}>createGroupModal</Button>
      <Button onClick={() => onOpen('createGroup')}>createGroupModal</Button>
    </div>
  )
}

export default CheckModal