"use client"

import { CommunityWithMembersWithUser } from "@/types"
import { MemberRole } from "@prisma/client"
import { DropdownMenu } from "../ui/dropdown-menu"
import { DropdownMenuContent, DropdownMenuItem, DropdownMenuSeparator, DropdownMenuTrigger } from "@radix-ui/react-dropdown-menu"
import { ChevronDown, LogOut, PlusCircle, Settings, Trash, UserPlus, Users } from "lucide-react"
import { useModal } from "@/hooks/useModalStore"


interface CommunityHeaderProps {
  community: CommunityWithMembersWithUser
  role?: MemberRole
}

export const CommunityHeader = ({
  community,
  role
}: CommunityHeaderProps) => {

  const { onOpen } = useModal();
  const isAdmin = role === MemberRole.ADMIN;
  const isModerator = isAdmin || role === MemberRole.MODERATOR;

  return (
    <DropdownMenu>
      <DropdownMenuTrigger
        className="focus:outline-none"
        asChild
      >
        <button
          className="w-full text-md font-semibold px-3 flex items-center h-12 border-neutral-200 dark:border-neutral-800 border-b-2 hover:bg-cyan dark:hover:bg-yellow transition"
        >
          {community.name}
          <ChevronDown className="h-5 w-5 ml-auto" />
        </button>
      </DropdownMenuTrigger>
      <DropdownMenuContent
        className="w-56 text-xs font-medium text-black dark:text-neutral-400 space-y-[2px]"
      >{isModerator && (
        <DropdownMenuItem
          onClick={() => onOpen("invite", { community })}
          className="text-indigo-600 dark:text-indigo-400 px-3 py-2 text-sm cursor-pointer"
        >
          Invite People
          <UserPlus className="h-4 w-4 ml-auto" />
        </DropdownMenuItem>
      )}
        {isAdmin && (
          <DropdownMenuItem
            onClick={() => onOpen("editCommunity", { community })}
            className="px-3 py-2 text-sm cursor-pointer"
          >
            Edit Community
            <Settings className="h-4 w-4 ml-auto" />
          </DropdownMenuItem>
        )}
        {isAdmin && (
          <DropdownMenuItem
            onClick={() => onOpen("members", { community })}
            className="px-3 py-2 text-sm cursor-pointer"
          >
            Manage Members
            <Users className="h-4 w-4 ml-auto" />
          </DropdownMenuItem>
        )}
        {isModerator && (
          <DropdownMenuItem
            onClick={() => onOpen("createGroup", { community })}
            className="px-3 py-2 text-sm cursor-pointer"
          >
            Create Groups
            <PlusCircle className="h-4 w-4 ml-auto" />
          </DropdownMenuItem>
        )}
        {isModerator && (
          <DropdownMenuSeparator />
        )}
        {isAdmin && (
          <DropdownMenuItem
            onClick={() => onOpen("deleteCommunity", { community })}
            className="text-rose-500 px-3 py-2 text-sm cursor-pointer"
          >
            Delete Community
            <Trash className="h-4 w-4 ml-auto" />
          </DropdownMenuItem>
        )}
        {!isAdmin && (
          <DropdownMenuItem
            onClick={() => onOpen("leaveCommunity", { community })}
            className="text-rose-500 px-3 py-2 text-sm cursor-pointer"
          >
            Leave Community
            <LogOut className="h-4 w-4 ml-auto" />
          </DropdownMenuItem>
        )}
      </DropdownMenuContent>
    </DropdownMenu>
  )
}