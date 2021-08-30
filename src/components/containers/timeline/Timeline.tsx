import React from 'react'
import { tweets } from 'mocking'
import Feed from '@/components/common/feed/Feed'
import styled from 'styled-components'

type TimelineProps = {}

const Timeline: React.FC<TimelineProps> = ({}) => {
  return (
    <StyledTimeline>
      {tweets.map((tweet, key) => (
        <Feed key={key} {...tweet} />
      ))}
    </StyledTimeline>
  )
}
const StyledTimeline = styled('div')``
export default Timeline
