import { useModal } from "@/hooks/useModalStore";
import { Dialog, DialogContent, DialogFooter, DialogHeader, DialogTitle } from "../ui/dialog";
import { Button } from "../ui/button";
import { useState } from "react";
import qs from "query-string";
import axios from "axios";
import { useRouter } from "next/navigation";

export const DeleteGroupModal = () => {
  const { isOpen, onClose, type, data } = useModal(); // Assuming you pass the group data to the modal

  const router = useRouter();

  const { community, group } = data;

  const isModalOpen = isOpen && type === 'deleteGroups';
  const [isConfirming, setConfirming] = useState(false);

  const [isLoading, setIsLoading] = useState(false);

  const handleDelete = async () => {
    try {
      setIsLoading(true);
      if (isConfirming) {
        setIsLoading(true);
        const url = qs.stringifyUrl({
          url: `/api/groups/${group?.id}`,
          query: {
            communityId: community?.id,
          }
        })

        await axios.delete(url);

        onClose();
        router.refresh();
        router.push(`/community/${community?.id}`);
      } else {
        setConfirming(true);
      }
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
              Delete Group
            </DialogTitle>
          </DialogHeader>
          <div className="p-6">
            {isConfirming ? (
              <p className="text-center text-gray-700">
                Are you sure you want to delete the group
                "{data?.group?.name}"?
              </p>
            ) : (
              <p className="text-center text-gray-700">
                This action will permanently delete the group. Do you really want to proceed?
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
            {isLoading && <div>Deleting...</div>}
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </>
  );
};
