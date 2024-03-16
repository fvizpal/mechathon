import React from "react";
import { auth } from "../../../auth";
import { redirect } from "next/navigation";
import { db } from "@/lib/database/db";
import { CommunityHeader } from "./CommunityHeader";
import { ScrollArea } from "../ui/scroll-area";
import CommunitySidebarSearch from "./CommunitySidebarSearch";

import { Text, Video, AudioLines, Palette } from "lucide-react";
import { Separator } from "../ui/separator";
import { SidebarMember } from "./SidebarMember";
import { CommunitySection } from "./CommunitySection";
import { GroupType } from "@prisma/client";
import { CommunityGroup } from "./CommunityGroup";

interface CommunitySidebarProps {
  communityId: string;
}

const CommunitySidebar = async ({ communityId }: { communityId: string }) => {
  const session = await auth();
  const user = session?.user;

  if (!user) {
    redirect("/onboard");
  }

  const community = await db.community.findUnique({
    where: {
      id: communityId,
    },
    include: {
      groups: {
        orderBy: {
          createdAt: "asc",
        },
      },
      members: {
        include: {
          user: true,
        },
        orderBy: {
          role: "asc",
        },
      },
    },
  });

  if (!community) {
    return redirect("/onboard");
  }

  const textGroups = community.groups.filter((group) => group.type === "TEXT");
  const audioGroups = community.groups.filter(
    (group) => group.type === "AUDIO"
  );
  const videoGroups = community.groups.filter(
    (group) => group.type === "VIDEO"
  );
  const drawGroups = community.groups.filter((group) => group.type === "DRAW");
  const members = community?.members.filter(
    (member) => member.communityId !== community.id
  );
  const role = community.members.find(
    (member) => member.communityId === community.id
  )?.role;

  return (
    <div className="flex flex-col h-full text-primary w-full dark:bg-cyan bg-yellow">
      <CommunityHeader community={community} role={role} />
      <ScrollArea>
        <div className="mt-2">
          <CommunitySidebarSearch
            data={[
              {
                label: "Text Groups",
                type: "group",
                data: textGroups.map((group) => ({
                  id: group.id,
                  name: group.name,
                  icon: <Text />,
                })),
              },
              {
                label: "Video Groups",
                type: "group",
                data: videoGroups?.map((group) => ({
                  id: group.id,
                  name: group.name,
                  icon: <Video />,
                })),
              },
              {
                label: "Audio Groups",
                type: "group",
                data: audioGroups?.map((group) => ({
                  id: group.id,
                  name: group.name,
                  icon: <AudioLines />,
                })),
              },
              {
                label: "Draw Groups",
                type: "group",
                data: drawGroups?.map((group) => ({
                  id: group.id,
                  name: group.name,
                  icon: <Palette />,
                })),
              },
            ]}
          />
        </div>
        <Separator />
        {!!textGroups?.length && (
          <div className="mb-2">
            <CommunitySection
              sectionType="groups"
              groupType={GroupType.TEXT}
              role={role}
              label="Text Groups"
            />
            <div className="space-y-[2px]">
              {textGroups.map((group) => (
                <CommunityGroup
                  key={group.id}
                  group={group}
                  role={role}
                  community={community}
                />
              ))}
            </div>
          </div>
        )}
        {!!audioGroups?.length && (
          <div className="mb-2">
            <CommunitySection
              sectionType="groups"
              groupType={GroupType.AUDIO}
              role={role}
              label="Voice Groups"
            />
            <div className="space-y-[2px]">
              {audioGroups.map((group) => (
                <CommunityGroup
                  key={group.id}
                  group={group}
                  role={role}
                  community={community}
                />
              ))}
            </div>
          </div>
        )}
        {!!videoGroups?.length && (
          <div className="mb-2">
            <CommunitySection
              sectionType="groups"
              groupType={GroupType.VIDEO}
              role={role}
              label="Video Groups"
            />
            <div className="space-y-[2px]">
              {videoGroups.map((group) => (
                <CommunityGroup
                  key={group.id}
                  group={group}
                  role={role}
                  community={community}
                />
              ))}
            </div>
          </div>
        )}
        {!!drawGroups?.length && (
          <div className="mb-2">
            <CommunitySection
              sectionType="groups"
              groupType={GroupType.DRAW}
              role={role}
              label="Draw Groups"
            />
            <div className="space-y-[2px]">
              {drawGroups.map((group) => (
                <CommunityGroup
                  key={group.id}
                  group={group}
                  role={role}
                  community={community}
                />
              ))}
            </div>
          </div>
        )}

        {!!members?.length && (
          <div className="mb-2">
            <div className="space-y-[2px]">
              {members.map((member) => (
                <SidebarMember
                  key={member.id}
                  member={member}
                  community={community}
                />
              ))}
            </div>
          </div>
        )}
      </ScrollArea>
    </div>
  );
};

export default CommunitySidebar;
