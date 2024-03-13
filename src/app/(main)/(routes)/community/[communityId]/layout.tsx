import React, { Children } from 'react'

const CommunityIdLayout = async ({
  children,
  params,
}: {
  children: React.ReactNode,
  params: { communityId: string }
}) => {
  return (
    <div>
      <main>
        {children}
      </main>
    </div>
  )
}

export default CommunityIdLayout