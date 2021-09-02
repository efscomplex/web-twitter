import UserBadge, {
   UserBadgeProps,
} from '@/components/base/userBadge/UserBadge'
import FollowsSection from '@/components/containers/follows/FollowsSection'
import Btn from '@/components/ui/btn/Btn'
import withSelectedUser from '@/HOCs/withSelectedUser'
import { useSession } from '@/providers/session/SessionProvider'
import type { UserData } from '@/services/twitter/models/twitterModels'
import React from 'react'

type CurrentFollowsProps = {
   initialData: UserData[]
}

const Badge = withSelectedUser<UserBadgeProps>(UserBadge)

const CurrentFollows: React.FC<CurrentFollowsProps> = ({ initialData }) => {
   const { selectedUserId } = useSession()

   const onFollwBtn = () => {
      console.log('follow user')
   }
   const badgeRender = (user: UserData) => (
      <Badge
         {...user}
         selected={selectedUserId === user.id}
         button={<Btn onClick={onFollwBtn}>Unfollow</Btn>}
      />
   )
   return (
      <FollowsSection
         title="Following"
         users={initialData}
         badgeRender={badgeRender}
      />
   )
}

export default CurrentFollows
