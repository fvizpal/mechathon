"use client";

import { Button } from "../ui/button";
import { useModal } from "@/hooks/useModalStore";

const CheckModal = () => {
  const { onOpen } = useModal();

  return (
    <>
      <div>
        {/* </div> */}
        {/* <div className="flex flex-col justify-center items-center gap-5"> */}
        {/* <Button onClick={() => onOpen("auth")}>AuthModal</Button> */}
        {/* <Button onClick={() => onOpen("createCommunity")}>
        CreateCommunityModal
      </Button> */}
        {/* <Button onClick={() => onOpen("editCommunity")}>EditModal</Button> */}
        {/* {/* <Button onClick={() => onOpen('createGroup')}>createGroupModal</Button> */}
        {/* <Button onClick={() => onOpen('invite')}>Expand your community</Button> 
      <Button onClick={() => onOpen('leaveCommunity')}>Leaving modal</Button>
      <Button onClick={() => onOpen('members')}>Members</Button>
      <Button onClick={() => onOpen('deleteCommunity')}>delComm</Button>
      <Button onClick={() => onOpen('deleteGroups')}>del Group</Button>
      <Button onClick={() => onOpen('editGroups')}>edit groups</Button> */}
      </div>
    </>
  );
};

export default CheckModal;
