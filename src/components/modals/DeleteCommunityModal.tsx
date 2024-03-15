
import { useModal } from "@/hooks/useModalStore";
import { Dialog, DialogContent, DialogFooter, DialogHeader, DialogTitle } from "../ui/dialog";
import { Button } from "../ui/button";
import { useState } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";

export const DeleteCommunityModal = () => {
  const router = useRouter();

  const { isOpen, onClose, type, data } = useModal(); // Assuming you pass the community data to the modal
  const community = data.community

  const isModalOpen = isOpen && type === 'deleteCommunity';

  const [isLoading, setIsLoading] = useState(false);

  const [isConfirming, setConfirming] = useState(false);

  const handleDelete = async () => {
    try {
      setIsLoading(true);

      await axios.delete(`/api/communities/${community?.id}`);

      onClose();
      router.refresh();
      router.push("/onboard");
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
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
                "{data?.community?.name}"?
              </p>
            ) : (
              <p className="text-center text-gray-700">
                This action will permanently delete the community. Do you really want to proceed?
              </p>
            )}
          </div>
          <DialogFooter className="bg-gray-100 px-6 py-4">
            <div className="flex items-center justify-between w-full">
              <Button
                disabled={isLoading}
                onClick={onClose}
                variant="ghost"
              >
                Cancel
              </Button>
              <Button
                disabled={isLoading}
                onClick={handleDelete}
              >
                Confirm
              </Button>
            </div>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </>
  );
};
