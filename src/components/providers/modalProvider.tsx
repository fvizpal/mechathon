'use client'

import { useEffect, useState } from "react"
import AuthModal from "../modals/AuthModal"
import { CreateCommunityModal } from "../modals/CreateCommunityModal"
import { CreateGroupModal } from "../modals/CreateGroupModal"
import { InviteModal } from "../modals/InviteModal"
import { EditCommunityModal } from "../modals/EditCommunity"
import { LeaveCommunityModal } from "../modals/LeaveCommunityModal"
import { MemberModal } from "../modals/MemberModal"
import { DeleteCommunityModal } from "../modals/DeleteCommunityModal"
import { DeleteGroupModal } from "../modals/DeleteGroupModal"
import { EditGroupModal } from "../modals/EditGroupModal"
import { UserSettings } from '../modals/UserSettings'
import { MessageFileModal } from "../modals/MessageFileModal"

export const ModalProvider = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, [])

  if (!isMounted) return null;

  return (
    <>
      <AuthModal />
      <CreateCommunityModal />
      <CreateGroupModal />
      <InviteModal />
      <EditCommunityModal />
      <LeaveCommunityModal />
      <MemberModal />
      <DeleteCommunityModal />
      <DeleteGroupModal />
      <EditGroupModal />
      <UserSettings />
      <MessageFileModal />
    </>
  )
}