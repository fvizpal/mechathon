import { Community, Member, User } from "@prisma/client";

export type CommunityWithMembersWithUser = Community & {
    members: ( Member & { profile: User })[];
};