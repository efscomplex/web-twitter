import Post from '@/components/containers/post/Post'
import Timeline from '@/components/containers/timeline/Timeline'
import useLacyComp from '@/hooks/useLazyComp'
import { userTimelineQuery } from '@/services/twitter/api/resources'
import React from 'react'
import styled from 'styled-components'

type MainProps = {}

const Main: React.FC<MainProps> = ({}) => {
   const TimelineContent = useLacyComp(Timeline, userTimelineQuery())
   return (
      <StyledMain>
         <TimelineContent />
         <Post />
      </StyledMain>
   )
}

const StyledMain = styled('main')`
   display: grid;
   grid-template-rows: 1fr min-content;
`

export default Main
