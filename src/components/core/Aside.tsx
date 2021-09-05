import CurrentFollows from '@/components/containers/follows/CurrentFollows'
import SuggestedFollows from '@/components/containers/follows/SuggestedFollows'
import React, { memo } from 'react'
import styled from 'styled-components'

type AsideProps = {}

const Aside: React.FC<AsideProps> = ({}) => {
   return (
      <StyledAside>
         <CurrentFollows />
         <SuggestedFollows />
      </StyledAside>
   )
}
const StyledAside = styled('aside')`
   & > * {
      height: 45vh;
      overflow-y: scroll;
   }
`

export default memo(Aside)
