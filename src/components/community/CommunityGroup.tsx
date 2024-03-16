"use client";

import { ModalType, useModal } from "@/hooks/useModalStore";
import { cn } from "@/lib/utils";
import { Community, Group, GroupType, MemberRole } from "@prisma/client";
import {
  Edit,
  Hash,
  Lock,
  Mic,
  PaintBucket,
  Paintbrush,
  Pen,
  Trash,
  Video,
} from "lucide-react";
import { useParams, useRouter } from "next/navigation";

interface CommunityGroupProps {
  group: Group;
  community: Community;
  role?: MemberRole;
}

const iconMap = {
  [GroupType.TEXT]: Hash,
  [GroupType.AUDIO]: Mic,
  [GroupType.VIDEO]: Video,
  [GroupType.DRAW]: Paintbrush,
};

export const CommunityGroup = ({
  group,
  community,
  role,
}: CommunityGroupProps) => {
  const { onOpen } = useModal();
  const params = useParams();
  const router = useRouter();

  const Icon = iconMap[group.type];
  const onClick = () => {
    router.push(`/community/${params?.communityId}/group/${group.id}`);
  };

  const onAction = (e: React.MouseEvent, action: ModalType) => {
    e.stopPropagation();
    onOpen(action, { group, community });
  };

  return (
    <button
      onClick={onClick}
      className={cn(
        "group px-2 py-2 rounded-md flex items-center gap-x-2 w-full hover:bg-zinc-700/10 dark:hover:bg-zinc-700/50 transition mb-1",
        params?.groupId === group.id && "bg-zinc-700/20 dark:bg-zinc-700"
      )}
    >
      <Icon className="flex-shrink-0 w-5 h-5 text-zinc-500 dark:text-zinc-400" />
      <p
        className={cn(
          "line-clamp-1 font-semibold text-sm text-zinc-500 group-hover:text-zinc-600 dark:text-zinc-400 dark:group-hover:text-zinc-300 transition",
          params?.groupId === group.id &&
            "text-primary dark:text-zinc-200 dark:group-hover:text-white"
        )}
      >
        {group.name}
      </p>
      {group.name !== "general" && role !== MemberRole.GUEST && (
        <div className="ml-auto flex items-center gap-x-2">
          {/* <ActionTooltip label="Edit"> */}
          <Edit
            onClick={(e) => onAction(e, "editGroups")}
            className="hidden group-hover:block w-4 h-4 text-zinc-500 hover:text-zinc-600 dark:text-zinc-400 dark:hover:text-zinc-300 transition"
          />
          {/* </ActionTooltip> */}
          {/* <ActionTooltip label="Delete"> */}
          <Trash
            onClick={(e) => onAction(e, "deleteGroups")}
            className="hidden group-hover:block w-4 h-4 text-zinc-500 hover:text-zinc-600 dark:text-zinc-400 dark:hover:text-zinc-300 transition"
          />
          {/* </ActionTooltip> */}
        </div>
      )}
      {group.name === "general" && (
        <Lock className="ml-auto w-4 h-4 text-zinc-500 dark:text-zinc-400" />
      )}
    </button>
  );
};
