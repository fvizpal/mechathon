"use client"

import qs from "query-string"
import { useState } from "react";
import { MemberRole } from "@prisma/client";
import { Check, Gavel, Loader2, MoreVertical, Shield, ShieldAlert, ShieldCheck, ShieldQuestion } from "lucide-react";
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from "../ui/dialog";
import { useModal } from "@/hooks/useModalStore";
import { Button } from "../ui/button";
import { CommunityWithMembersWithUser } from "@/types";
import { ScrollArea } from "@/components/ui/scroll-area";
import UserAvatar from "@/components/shared/UserAvatar";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuPortal, DropdownMenuSeparator, DropdownMenuSub, DropdownMenuSubContent, DropdownMenuTrigger, DropdownMenuSubTrigger } from "@/components/ui/dropdown-menu"
import axios from "axios";
import { useRouter } from "next/navigation";


const membersData = [
  { id: 1, name: "Aryan", email: "aryan@example.com", role: "Admin", joinDate: "2022-01-01" },
  { id: 2, name: "Vishal", email: "viz@example.com", role: "Member", joinDate: "2022-02-15" },
  { id: 2, name: "Rehan", email: "ray@example.com", role: "Member", joinDate: "2022-02-15" }

  // Add more members with additional details as needed
];

const roleIconMap = {
  "GUEST": null,
  "MODERATOR": <ShieldCheck className="h-4 w-4 ml-2 text-indigo-500" />,
  "ADMIN": <ShieldAlert className="h-4 w-4 text-rose-500" />
}

export const MemberModal = () => {

  const router = useRouter()
  const { onOpen, isOpen, onClose, type, data } = useModal(); // Assuming you pass the community data to the modal
  // reference for later  : { isOpen, onClose, type ,data}
  const [loadingId, setLoadingId] = useState("")

  const isModalOpen = isOpen && type === 'members';
  const { community } = data as { community: CommunityWithMembersWithUser }

  const onKick = async (memberId: string) => {
    try {
      setLoadingId(memberId);
      const url = qs.stringifyUrl({
        url: `/api/members/${memberId}`,
        query: {
          communityId: community?.id,
        }
      })

      const response = await axios.delete(url)
      router.refresh()
      onOpen("members", { community: response.data })
    } catch (error) {
      console.log(error)
    } finally {
      setLoadingId("")
    }
  }


  const onRoleChange = async (memberId: string, role: MemberRole) => {
    try {
      setLoadingId(memberId);
      const url = qs.stringifyUrl({
        url: `/api/members/${memberId}`, // corrected colon here
        query: {
          communityId: community?.id,
        }
      });

      const response = await axios.patch(url, { role });
      router.refresh()
      onOpen("members", { community: response.data })
    } catch (error) {
      console.log(error);
    } finally {
      setLoadingId("");
    }
  }



  return (
    <>
      <Dialog open={isModalOpen} onOpenChange={() => onClose()}>
        <DialogContent className="bg-white text-black overflow-hidden">
          <DialogHeader className="pt-8 px-6">
            <DialogTitle className="text-2xl text-center font-bold">
              Community Members
            </DialogTitle>
            <DialogDescription className="text-center text-blue-500">
              {community?.members.length} Members
            </DialogDescription>
          </DialogHeader>

          <ScrollArea className="mt-8 max-h-[420px] pr-6">
            {community?.members?.map((member) => (
              <div key={member.id} className="flex items-center gap-x-2 mb-6">

                <UserAvatar src={member.user?.image} />
                <div className="flex flex-col gap-y-1">
                  <div className="text-xs font-semibold flex items-center gap-x-1">
                    {member.user?.name}
                    {roleIconMap[member.role]}
                  </div>
                  <p className="text-xs text-zinc-500">
                    {member.user?.email}
                  </p>
                </div>
                {community.userId !== member.userId && loadingId !== member.id && (
                  <div className="ml-auto">
                    <DropdownMenu>
                      <DropdownMenuTrigger>
                        <MoreVertical className="h-4 w-4 text-zinc-500" />
                      </DropdownMenuTrigger>
                      <DropdownMenuContent side="left">
                        <DropdownMenuSub>
                          <DropdownMenuSubTrigger className="flex items-center">
                            <ShieldQuestion className="w-4 h-4 mr-2" />
                            <span>Role</span>
                          </DropdownMenuSubTrigger>
                          <DropdownMenuPortal>
                            <DropdownMenuSubContent>
                              <DropdownMenuItem onClick={() => onRoleChange(member.id, "GUEST")}>
                                <Shield className="h-4 w-4 mr-2" />
                                Guest
                                {member.role === "GUEST" && (
                                  <Check className="h-4 w-4 ml-auto" />
                                )}
                              </DropdownMenuItem>
                              <DropdownMenuItem onClick={() => onRoleChange(member.id, "MODERATOR")}>
                                <ShieldCheck className="h-4 w-4 mr-2" />
                                Moderator
                                {member.role === "MODERATOR" && (
                                  <Check className="h-4 w-4 ml-auto" />
                                )}
                              </DropdownMenuItem>
                            </DropdownMenuSubContent>
                          </DropdownMenuPortal>
                        </DropdownMenuSub>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem onClick={() => onKick(member.id)}>
                          <Gavel className="h-4 w-4 mr-2" />
                          Kick
                        </DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </div>
                )}
                {loadingId === member.id && (
                  <Loader2 className="animate-spin text-zinc-500 ml-auto w-4 h-4" />
                )}
              </div>
            ))}
          </ScrollArea>

          <DialogFooter className="bg-gray-100 px-6 py-4">
            <Button onClick={() => onClose()}>
              Close
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </>
  );
};

