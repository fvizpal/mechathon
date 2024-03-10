'use client'

import AuthModal from "../modals/AuthModal"
import { CreateCommunityModal } from "../modals/CreateCommunityModal"
import { CreateGroupModal } from "../modals/CreateGroup"


export const ModalProvider = () => {
  return (
    <>
      <AuthModal />
      <CreateCommunityModal />
      <CreateGroupModal />
    </>
  )
}