"use client"

import { useModal } from "@/hooks/useModalStore"
import { Plus } from "lucide-react";
import { UserButton } from "../shared/UserButton";
import { ModeToggle } from "../shared/ModeToggle";

const NavAddCommunity = () => {
  const { onOpen } = useModal();

  return (
    <div className="flex gap-7">
      <UserButton />
      <button className="group flex items-center" onClick={() => onOpen("createCommunity")}>
        <div className="flex mx-3 h-10 w-10 rounded-full group-hover:rounded-lg transition-all overflow-hidden items-center justify-center bg-background dark:bg-netural-700 group-hover:bg-emerald-500">
          <Plus className="group-hover:text-white transition text-emerald-500" size={35} />
        </div>
      </button>
      <ModeToggle />
    </div>
  )
}

export default NavAddCommunity