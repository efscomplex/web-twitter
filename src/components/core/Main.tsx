import Post from '@/components/containers/post/Post'
import Timeline from '@/components/containers/timeline/Timeline'
import React from 'react'
import styled from 'styled-components'

type MainProps = {}

const Main: React.FC<MainProps> = ({}) => {
   return (
      <StyledMain>
         <Timeline />
         <Post />
      </StyledMain>
   )
}

const StyledMain = styled('main')`
   display: grid;
   grid-template-rows: 1fr min-content;
`

export default Main
