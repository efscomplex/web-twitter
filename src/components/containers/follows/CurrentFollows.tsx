import UserBadge, {
   UserBadgeProps,
} from '@/components/base/userBadge/UserBadge'
import FollowsSection from '@/components/containers/follows/FollowsSection'
import Btn from '@/components/ui/btn/Btn'
import withSelectedUser from '@/HOCs/withSelectedUser'
import { useSession } from '@/providers/session/UserSessionProvider'
import { UserData } from '@/services/twitter/models/twitterModels'
import React, { useCallback } from 'react'

const Badge = withSelectedUser<UserBadgeProps>(UserBadge)

const CurrentFollows: React.FC = () => {
   const { user } = useSession()
   const { selectedUserId } = useSession()

   const onFollowBtn = () => {}

   const badgeRender = useCallback(
      (user: UserData) => (
         <Badge
            {...user}
            selected={selectedUserId === user.id}
            button={<Btn onClick={onFollowBtn}>Unfollow</Btn>}
         />
      ),
      [selectedUserId, onFollowBtn],
   )

   if (!user.suggested) return null
   return (
      <FollowsSection
         title="Following"
         users={user.suggested}
         badgeRender={badgeRender}
      />
   )
}

export default CurrentFollows
