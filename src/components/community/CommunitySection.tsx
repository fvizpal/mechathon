"use client";

import { useModal } from "@/hooks/useModalStore";
import { CommunityWithMembersWithUser } from "@/types";
import { Group, GroupType, MemberRole } from "@prisma/client";
import { Plus, Settings } from "lucide-react";

interface CommunitySectionProps {
  label: string;
  role?: MemberRole;
  sectionType: "groups" | "members";
  groupType?: GroupType;
  community?: CommunityWithMembersWithUser;
};

export const CommunitySection = ({
  label,
  role,
  sectionType,
  groupType,
  community,
}: CommunitySectionProps) => {
  const { onOpen } = useModal();

  return (
    <div className="flex items-center justify-between py-2">
      <p className="text-xs uppercase font-semibold text-zinc-500 dark:text-zinc-400">
        {label}
      </p>
      {role !== MemberRole.GUEST && sectionType === "groups" && (
        <button
          onClick={() => onOpen("createGroup", { groupType })}
          className="text-zinc-500 hover:text-zinc-600 dark:text-zinc-400 dark:hover:text-zinc-300 transition"
        >
          <Plus className="h-4 w-4" />
        </button>
      )}
      {role === MemberRole.ADMIN && sectionType === "members" && (
        <button
          onClick={() => onOpen("members", { community })}
          className="text-zinc-500 hover:text-zinc-600 dark:text-zinc-400 dark:hover:text-zinc-300 transition"
        >
          <Settings className="h-4 w-4" />
        </button>
      )}
    </div>
  )
}