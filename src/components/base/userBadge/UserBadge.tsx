import Avatar from '@/components/ui/avatar/Avatar'
import type { SelectorProps } from '@/HOCs/withSelectedUser'
import type { UserData } from '@/services/twitter/models/twitterModels'
import React from 'react'
import styled from 'styled-components'

export type UserBadgeProps = {
   button: JSX.Element
} & UserData &
   SelectorProps

const UserBadge: React.FC<UserBadgeProps> = ({
   id,
   profile_image_url,
   name,
   username,
   button,
   ...props
}) => {
   return (
      <Badge key={id} {...props}>
         <Avatar src={profile_image_url} />
         <article>
            <p>{name}</p>
            <p>{`@${username}`}</p>
         </article>
         {button}
      </Badge>
   )
}
export const Badge = styled<any>('div')`
   //max-width: 20rem;
   padding: 8px;

   display: flex;
   justify-content: space-between;
   align-items: center;

   cursor: pointer;
   border-radius: 8px;
   gap: 0.8rem;

   p:nth-child(2) {
      color: gray;
   }
   background-color: ${(props) => props.selected && 'var(--surface)'};
`

export default UserBadge
