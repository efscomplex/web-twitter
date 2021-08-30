import Avatar from '@/components/common/avatar/Avatar'
import React from 'react'
import StyledFeed from './StyledFeed'

type FeedProps = {
  username: string
  name: string
  text: string
  created: string
  avatar: string
}

const Feed: React.FC<FeedProps> = ({
  name,
  username,
  text,
  created,
  avatar,
}) => {
  return (
    <StyledFeed>
      <div>
        <Avatar src={avatar} alt="avatar-pic" />
      </div>
      <div>
        <h6>
          <span>{name}</span>
          <span>{`@${username} - ${created}h`}</span>
        </h6>
        <p>{text}</p>
      </div>
    </StyledFeed>
  )
}

export default Feed
