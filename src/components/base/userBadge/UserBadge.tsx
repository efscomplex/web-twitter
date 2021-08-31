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
   max-width: 20rem;
   display: flex;
   justify-content: space-between;
   align-items: center;

   gap: 0.4rem;

   p:nth-child(2) {
      color: gray;
   }
`

export default UserBadge
