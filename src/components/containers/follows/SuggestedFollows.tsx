import UserBadge from '@/components/base/userBadge/UserBadge'
import FollowsSection from '@/components/containers/follows/FollowsSection'
import Btn from '@/components/ui/btn/Btn'
import { useSession } from '@/providers/session/UserSessionProvider'
import type { UserData } from '@/services/twitter/models/twitterModels'
import React from 'react'

const SuggestedFollows: React.FC = () => {
   const { user } = useSession()

   const onFollowBtn = () => {}
   const badgeRender = (user: UserData) => (
      <UserBadge {...user} button={<Btn onClick={onFollowBtn}>Follow</Btn>} />
   )

   if (!user.suggested) return null
   return (
      <FollowsSection
         title="Suggested users"
         users={user.suggested}
         badgeRender={badgeRender}
      />
   )
}

export default SuggestedFollows
