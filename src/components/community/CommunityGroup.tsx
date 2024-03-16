"use client";

import { ModalType, useModal } from "@/hooks/useModalStore";
import { cn } from "@/lib/utils";
import { Community, Group, GroupType, MemberRole } from "@prisma/client";
import { Text, Video, AudioLines, Palette, Edit, Trash, Lock } from 'lucide-react';
import { useParams, useRouter } from "next/navigation";


interface CommunityChannelProps {
  group: Group;
  community: Community;
  role?: MemberRole;
}

const iconMap = {
  [GroupType.TEXT]: Text,
  [GroupType.AUDIO]: AudioLines,
  [GroupType.VIDEO]: Video,
  [GroupType.DRAW]: Palette
}

export const CommunityGroup = ({
  group,
  community,
  role
}: CommunityChannelProps) => {
  const { onOpen } = useModal();
  const params = useParams();
  const router = useRouter();

  const Icon = iconMap[group.type];

  const onClick = () => {
    router.push(`/community/${params?.communityId}/groups/${group.id}`)
  }

  const onAction = (e: React.MouseEvent, action: ModalType) => {
    e.stopPropagation();
    onOpen(action, { group, community });
  }

  return (
    <button
      onClick={onClick}
      className={cn(
        " group px-2 py-2 rounded-md flex items-center gap-x-2 w-full hover:bg-zinc-700/10 dark:hover:bg-zinc-700/50 transition mb-1",
        params?.groupId === group.id && "bg-zinc-300 dark:bg-zinc-700"
      )}
    >
      <Icon className="flex-shrink-0 w-5 h-5 text-zinc-500 dark:text-zinc-400" />
      <p className={cn(
        "font-semibold text-sm text-zinc-500 group-hover:text-zinc-600 dark:text-zinc-400 dark:group-hover:text-zinc-300 transition",
        params?.groupId === group.id && "text-primary dark:text-zinc-200 dark:group-hover:text-white"
      )}>
        {group.name}
      </p>
      {group.name !== "general" && role !== MemberRole.GUEST && (
        <div className="ml-auto flex items-center gap-x-2">
          <Edit
            onClick={(e) => onAction(e, "editGroups")}
            className="hidden group-hover:block w-4 h-4 text-zinc-500 hover:text-zinc-600 dark:text-zinc-400 dark:hover:text-zinc-300 transition"
          />
          <Trash
            onClick={(e) => onAction(e, "deleteGroups")}
            className="hidden group-hover:block w-4 h-4 text-zinc-500 hover:text-zinc-600 dark:text-zinc-400 dark:hover:text-zinc-300 transition"
          />
        </div>
      )}
      {group.name === "general" && (
        <Lock
          className="ml-auto w-4 h-4 text-zinc-500 dark:text-zinc-400"
        />
      )}
    </button>
  )
}