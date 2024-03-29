import { Community, Group, GroupType } from "@prisma/client"
import { create } from "zustand"

export type ModalType =
  | "auth"
  | "createCommunity"
  | "invite"
  | "editCommunity"
  | "members"
  | "createGroup"
  | "leaveCommunity"
  | "deleteCommunity"
  | "deleteGroups"
  | "editGroups"
  | "messageFile"
  | "usersettings"
  | "messageFiles"


interface ModalData {
  community?: Community,
  group?: Group,
  groupType?: GroupType,
  apiUrl?: string;
  query?: Record<string, any>;
}

interface ModalStore {
  type: ModalType | null
  data: ModalData
  isOpen: boolean
  onOpen: (type: ModalType, data?: ModalData) => void
  onClose: () => void
}

export const useModal = create<ModalStore>((set) => ({
  type: null,
  data: {},
  isOpen: false,
  onOpen: (type, data = {}) => set({ isOpen: true, type, data }),
  onClose: () => set({ type: null, isOpen: false })
}))