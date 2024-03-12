
import { db } from "@/lib/database/db";
import { redirect } from "next/navigation";
import OnboardModal from "@/components/modals/OnboardModal";
import { auth } from "../../../auth";

const OnboardPage = async () => {
  const session = await auth()
  const user = session?.user

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