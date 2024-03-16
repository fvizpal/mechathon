"use client";

import { useModal } from "@/hooks/useModalStore"
import { UserRound, LogOut, Settings } from "lucide-react";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Avatar,
  AvatarImage,
  AvatarFallback,
} from "@/components/ui/avatar";
import { useSession } from "next-auth/react";
import { LogoutButton } from "./LogoutButton";

export const UserButton = () => {
  const session = useSession();
  const user = session.data?.user

  const { onOpen } = useModal();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <Avatar>
          <AvatarImage src={user?.image || ""} />
          <AvatarFallback className="bg-sky-500">
            <UserRound className="text-white" />
          </AvatarFallback>
        </Avatar>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-40" align="end">
        <LogoutButton>
          <DropdownMenuItem>
            <LogOut className="h-4 w-4 mr-2" />
            Logout
          </DropdownMenuItem>
        </LogoutButton>

        <DropdownMenuItem onClick={()=> onOpen("usersettings")}>
            <Settings className="h-4 w-4 mr-2"/>
            Settings
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
