
import { auth } from '../../../../../auth'
import { redirect } from 'next/navigation';
import { db } from '@/lib/database/db';

const CommunityIdPage = async ({ params }: { params: { communityId: string } }) => {
  const session = await auth();
  const user = session?.user;

  if (!user) {
    redirect("/");
  }

  const community = await db.community.findUnique({
    where: {
      id: params.communityId,
      members: {
        some: {
          userId: user.id,
        }
      }
    },
    include: {
      groups: {
        where: {
          name: "general",
        },
        orderBy: {
          createdAt: "asc"
        }
      }
    }
  });

  const initialGroup = community?.groups[0];

  if (initialGroup?.name !== "general") {
    return null;
  }

  return redirect(`/community/${params.communityId}/groups/${initialGroup?.id}`)
}

export default CommunityIdPage