'use client'

import { useModal } from "@/hooks/useModalStore"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "../ui/dialog";

export const CreateGroupModal = () => {
  const { isOpen, onClose, type } = useModal();

  const isModalOpen = isOpen && type === 'createGroup';

  return (
    <Dialog open={isModalOpen} onOpenChange={() => onClose()}>
      <DialogContent>
        <div>
          This is create group modal
        </div>
      </DialogContent>
    </Dialog>
  )
}