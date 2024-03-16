"use client";

import { useModal } from "@/hooks/useModalStore";
import { CommunityWithMembersWithUser } from "@/types";
import { GroupType, MemberRole } from "@prisma/client";
import { Plus, Settings } from "lucide-react";

interface CommunitySectionProps {
  label: string;
  role?: MemberRole;
  sectionType: "groups" | "members";
  groupType?: GroupType;
  community?: CommunityWithMembersWithUser;
}
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
      <p className="text-xs uppercase font-semibold">{label}</p>
      {role !== MemberRole.GUEST && sectionType === "groups" && (
        <button onClick={() => onOpen("createGroup", { groupType })}>
          <Plus className="h-4 w-4" />
        </button>
      )}
      {role === MemberRole.ADMIN && sectionType === "members" && (
        <button onClick={() => onOpen("members", { community })}>
          <Settings className="h-4 w-4" />
        </button>
      )}
    </div>
  );
};
