'use client';

import { useModal } from "@/hooks/useModalStore";
import { Dialog, DialogContent, DialogFooter, DialogHeader, DialogTitle } from "../ui/dialog";
import { Button } from "../ui/button";
import { useState } from "react";

export const LeaveCommunityModal = () => {
const { isOpen, onClose, type } = useModal();
//   const { isOpen, onClose, type, data } = useModal(); // Assuming you pass the community data to the modal
  const [isConfirming, setConfirming] = useState(true);

  const isModalOpen = isOpen && type === 'leaveCommunity';

  const handleConfirm = () => {
    // Add logic to handle leaving the community
    // console.log(`Leaving community: ${data?.communityName}`);
    onClose();
  };

  const handleCancel = () => {
    setConfirming(false);
  };

  const showConfirmDialog = () => {
    setConfirming(true);
  };

  return (
    <>
      <Dialog open={isModalOpen} onOpenChange={() => onClose()}>
        <DialogContent className="bg-white text-black p-0 overflow-hidden">
          <DialogHeader className="pt-8 px-6">
            <DialogTitle className="text-2xl text-center font-bold">
              Leave Community
            </DialogTitle>
          </DialogHeader>
          <div className="p-6">
            {isConfirming ? (
              <p className="text-center text-gray-700">
                {/* Are you sure you want to leave the community "{data?.communityName}"? */}
                Are you sure you want to leave the community ?

              </p>
            ) : (
              <p className="text-center text-gray-700">
                Leaving the community will remove you from it. Do you really want to proceed?
              </p>
            )}
          </div>
          <DialogFooter className="bg-gray-100 px-6 py-4">
            {isConfirming ? (
              <>
                <Button onClick={handleCancel} className="mr-2" variant="destructive">
                Confirm
                </Button>
                <Button onClick={handleConfirm}  >
                Cancel
                </Button>
              </>
            ) : (
              <Button onClick={showConfirmDialog} variant="destructive" >
                bye bye
              </Button>
            )}
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </>
  );
};
