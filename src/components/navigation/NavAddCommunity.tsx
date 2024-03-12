"use client"

import { useModal } from "@/hooks/useModalStore"
import { Button } from "../ui/button"

const NavAddCommunity = () => {
  const { onOpen } = useModal();

  return (
    <Button onClick={() => onOpen("createCommunity")}>
      Add
    </Button>
  )
}

export default NavAddCommunity