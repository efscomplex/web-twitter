import Avatar from '@/components/ui/avatar/Avatar'
import type { UserData } from '@/services/twitter/models/indext'
import React from 'react'
import styled from 'styled-components'

type UserBadgeProps = {
   button: JSX.Element
} & UserData

const UserBadge: React.FC<UserBadgeProps> = ({
   id,
   profile_image_url,
   name,
   username,
   button,
}) => {
   return (
      <Badge key={id}>
         <Avatar src={profile_image_url} />
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
