import UserBadge from '@/components/base/userBadge/UserBadge'
import FollowsSection from '@/components/containers/follows/FollowsSection'
import Btn from '@/components/ui/btn/Btn'
import { useSession } from '@/providers/session/SessionProvider'
import type { UserData } from '@/services/twitter/models/twitterModels'
import React from 'react'

type SuggestedFollowsProps = {
   initialData: UserData[]
}
const SuggestedFollows: React.FC<SuggestedFollowsProps> = ({ initialData }) => {
   const { selectedUserId } = useSession()

   const onFollwBtn = () => {
      console.log('hfds sdf a9')
   }
   const badgeRender = (user: UserData) => (
      <UserBadge
         {...user}
         selected={selectedUserId === user.id}
         button={<Btn onClick={onFollwBtn}>Follow</Btn>}
      />
   )
   return (
      <FollowsSection
         title="Suggested users"
         users={initialData}
         badgeRender={badgeRender}
      />
   )
}

export default SuggestedFollows
