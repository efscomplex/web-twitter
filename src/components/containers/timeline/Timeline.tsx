import Feed from '@/components/base/feed/Feed'
import List from '@/components/ui/list/List'
import { getTweets } from 'mocking'
import React from 'react'
import styled from 'styled-components'

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
const StyledTimeline = styled('div')`
   overflow-y: scroll;
`

export default Timeline
