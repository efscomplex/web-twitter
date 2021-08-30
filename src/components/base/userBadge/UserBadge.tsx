import Avatar from '@/components/ui/avatar/Avatar'
import React from 'react'
import styled from 'styled-components'

type UserBadgeProps = {
   avatar: string
   name: string
   username: string
   button: JSX.Element
}

const UserBadge: React.FC<UserBadgeProps> = ({
   avatar,
   name,
   username,
   button,
}) => {
   return (
      <Badge>
         <Avatar src={avatar} />
         <article>
            <p>{name}</p>
            <p>{`@${username}`}</p>
         </article>
         {button}
      </Badge>
   )
}
export const Badge = styled('div')`
   display: flex;
   align-items: center;
   gap: 1rem;
   justify-content: space-between;

   p:nth-child(2) {
      color: gray;
   }
`

export default UserBadge
