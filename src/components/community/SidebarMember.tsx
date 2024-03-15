"use client";

import { Member, MemberRole, User, Community } from "@prisma/client";
import { ShieldAlert, ShieldCheck } from "lucide-react";
import { useParams, useRouter } from "next/navigation";
import UserAvatar from "../shared/UserAvatar";

interface SidebarMemberProps {
  member: Member & { user: User };
  community: Community;
}

const roleIconMap = {
  [MemberRole.GUEST]: null,
  [MemberRole.MODERATOR]: <ShieldCheck />,
  [MemberRole.ADMIN]: <ShieldAlert />
}

export const SidebarMember = ({
  member,
  community
}: SidebarMemberProps) => {
  const params = useParams();
  const router = useRouter();

  const icon = roleIconMap[member.role];

  const onClick = () => {

  }

  return (
    <button
      onClick={onClick}
    >
      <UserAvatar
        src={member.user.image as string}
      />
      <p>
        {member.user.name}
      </p>
      {icon}
    </button>
  )
}