import Avatar from '@/components/ui/avatar/Avatar'
import type { Tweet, UserData } from '@/services/twitter/models/twitterModels'
import getDate from '@/utilities/getDate'
import React from 'react'
import StyledFeed from './StyledFeed'

type FeedProps = {
   author: UserData
   tweet: Tweet
}

const Feed: React.FC<FeedProps> = ({ author, tweet }) => {
   const time = getDate(tweet.created_at)

   return (
      <StyledFeed>
         <div>
            <Avatar src={author?.profile_image_url} alt="avatar-pic" />
         </div>
         <div>
            <h6>
               <span>{author?.name}</span>
               <span>{`@${author?.username} - ${time}`}</span>
            </h6>
            <p>{tweet.text}</p>
         </div>
      </StyledFeed>
   )
}

export default Feed
