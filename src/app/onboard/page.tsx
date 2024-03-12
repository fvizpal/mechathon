'use client'

import { db } from "@/lib/database/db";
import { redirect } from "next/navigation";
import OnboardModal from "@/components/modals/OnboardModal";
import { useSession } from "next-auth/react";

const OnboardPage = async () => {
  const session = useSession();
  const user = session?.data?.user;

  const community = await db.community.findFirst({
    where: {
      members: {
        some: {
          userId: user?.id,
        }
      }
    }
  })

  if (community) {
    return redirect(`/community/${community.id}`);
  }

  return (
    <OnboardModal />
  )
}

export default OnboardPage