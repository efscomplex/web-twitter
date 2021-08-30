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
    <StyledFeed className="bg-dark text-white">
      <div>
        <img src={avatar} alt="avatar-pic" />
      </div>
      <div className="info">
        <h6 className="mb-3">
          <span>{name}</span>
          <span>{username}</span>
        </h6>
        <p className="text-info">{text}</p>
        <p className="text-muted">created at: {created}</p>
      </div>
    </StyledFeed>
  )
}

export default Feed
