import { Community, Member, User } from "@prisma/client";

export type CommunityWithMembersWithUser = Community & {
    members: (Member & { user: User })[];
};

export type Draw = {
    ctx: CanvasRenderingContext2D
    currentPoint: Point
    prevPoint: Point | null
}

export type Point = { x: number; y: number }
