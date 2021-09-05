import Avatar from '@/components/ui/avatar/Avatar'
import type { UserData } from '@/services/twitter/models/twitterModels'
import type { User } from '@firebase/auth'
import React from 'react'
import styled from 'styled-components'

export type UserInfoProps = UserData

const UserInfo: React.FC<UserInfoProps> = ({
   profile_image_url,
   username,
   name,
}) => {
   return (
      <StyledUser>
         <Avatar src={profile_image_url || ''} alt="avatar-pic" />
         <div>
            <p>{name}</p>
            <p style={{ opacity: '.6' }}>{`@${username}`}</p>
         </div>
      </StyledUser>
   )
}
const StyledUser = styled('div')`
   display: flex;
   align-items: center;
   gap: 1rem;
`
export default UserInfo
