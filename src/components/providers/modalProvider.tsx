'use client'

import AuthModal from "../modals/AuthModal"
import { CreateCommunityModal } from "../modals/CreateCommunityModal"
import { CreateGroupModal } from "../modals/CreateGroup"

//   | "auth"   x 
//   | "createCommunity"   x 
//   | "invite" // with a link and copy button 
//   | "editCommunity"
//   | "members" // renders members with name and email
//   | "createGroup"   x 
//   | "leaveCommunity" // confirm that you want to leave community
//   | "deleteCommunity" // confirm for deletion of community
//   | "deleteGroups" // confirm the deletion of group
//   | "editGroups" 

export const ModalProvider = () => {
  return (
    <>
      <AuthModal />
      <CreateCommunityModal />
      <CreateGroupModal />

    </>
  )
}