
import { useModal } from "@/hooks/useModalStore";
import { Dialog, DialogContent, DialogFooter, DialogHeader, DialogTitle } from "../ui/dialog";
import { Button } from "../ui/button";
import { useState } from "react";

export const DeleteCommunityModal = () => {
  const { isOpen, onClose, type } = useModal(); // Assuming you pass the community data to the modal

  const isModalOpen = isOpen && type === 'deleteCommunity';
  const [isConfirming, setConfirming] = useState(false);

  const handleDelete = () => {
    if (isConfirming) {
      // Add logic to handle deleting the community
      // console.log(`Deleting community: ${data?.communityName}`);
      onClose();
    } else {
      setConfirming(true);
    }
  };

  const handleCancel = () => {
    if (isConfirming) {
      setConfirming(false);
    } else {
      onClose();
    }
  };

  return (
    <>
      <Dialog open={isModalOpen} onOpenChange={() => onClose()}>
        <DialogContent className="bg-white text-black p-0 overflow-hidden">
          <DialogHeader className="pt-8 px-6">
            <DialogTitle className="text-2xl text-center font-bold">
              Delete Community
            </DialogTitle>
          </DialogHeader>
          <div className="p-6">
            {isConfirming ? (
              <p className="text-center text-gray-700">
                Are you sure you want to delete the community
                 {/* "{data?.communityName}"? */}
              </p>
            ) : (
              <p className="text-center text-gray-700">
                This action will permanently delete the community. Do you really want to proceed?
              </p>
            )}
          </div>
          <DialogFooter className="bg-gray-100 px-6 py-4">
            <Button onClick={handleCancel} className="mr-2" >
              {isConfirming ? 'Cancel' : 'Back'}
            </Button>
            <Button onClick={handleDelete} variant={isConfirming ? 'destructive' : 'default'}>
              {isConfirming ? 'Delete' : 'Confirm'}
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </>
  );
};
