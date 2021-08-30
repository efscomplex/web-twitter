import Avatar from '@/components/common/avatar/Avatar'
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
const Badge = styled('div')`
  display: flex;
`

export default UserBadge
