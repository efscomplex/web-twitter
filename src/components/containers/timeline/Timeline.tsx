import React from 'react'
import { getTweets } from 'mocking'
import Feed from '@/components/base/feed/Feed'
import styled from 'styled-components'
import StyledFeed from '@/components/base/feed/StyledFeed'
import List from '@/components/ui/list/List'

type TimelineProps = {}

const Timeline: React.FC<TimelineProps> = ({}) => {
   return (
      <StyledTimeline>
         <List
            style={{ gap: '1rem' }}
            items={getTweets()}
            render={(tweet) => <Feed {...tweet} />}
         />
      </StyledTimeline>
   )
}
const StyledTimeline = styled('div')``

export default Timeline
