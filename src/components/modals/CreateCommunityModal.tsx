'use client'

import { useModal } from "@/hooks/useModalStore"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "../ui/dialog";

export const CreateCommunityModal = () => {
  const { isOpen, onClose, type } = useModal();

  const isModalOpen = isOpen && type === 'createCommunity';

  const handleClose = () => {
    onClose();
  }
  return (
    <Dialog open={isModalOpen} onOpenChange={handleClose}>
      <DialogContent>
        <div>
          This is create community modal
        </div>
      </DialogContent>
    </Dialog>
  )
}