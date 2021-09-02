import Feed from '@/components/base/feed/Feed'
import List from '@/components/ui/list/List'
import type { TimelineTweet } from '@/services/twitter/models/twitterModels'
import React, { useMemo } from 'react'
import styled from 'styled-components'
import type { UserData } from '@/services/twitter/models/twitterModels'

type TimelineProps = {
   initialData: TimelineTweet
}

const Timeline: React.FC<TimelineProps> = ({ initialData }) => {
   const feeds = useMemo(() => {
      const { tweets, authors } = initialData
      return tweets.map((tweet) => ({
         tweet,
         author: authors.find(
            (author) => author.id === tweet.author_id,
         ) as UserData,
      }))
   }, [initialData])

   return (
      <StyledTimeline>
         <List
            style={{ gap: '1rem' }}
            items={feeds}
            render={(feed) => <Feed {...feed} />}
         />
      </StyledTimeline>
   )
}
const StyledTimeline = styled('div')`
   overflow-y: scroll;
`

export default Timeline
