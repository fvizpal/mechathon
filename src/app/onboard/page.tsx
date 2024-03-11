import { db } from "@/lib/database/db";
import { auth } from "../../../auth";

const OnboardPage = async () => {
  const session = auth();

  const community = await db.community

  return (
    <div>
      {JSON.stringify(session)}
    </div>
  )
}

export default OnboardPage