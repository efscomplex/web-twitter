import Avatar from '@/components/ui/avatar/Avatar'
import type { User } from '@firebase/auth'
import React from 'react'
import styled from 'styled-components'

export type UserInfoProps = User

const UserInfo: React.FC<UserInfoProps> = ({
   photoURL,
   displayName,
   email,
}) => {
   return (
      <StyledUser>
         <Avatar src={photoURL || ''} alt="avatar-pic" />
         <div>
            <span>{displayName}</span>
            <span>{email || ''}</span>
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
