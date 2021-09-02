import useFollowsComp from '@/components/containers/follows/hooks/useFollowsComp'
import React from 'react'
import styled from 'styled-components'

type AsideProps = {}

const Aside: React.FC<AsideProps> = ({}) => {
   const { Suggested, Following } = useFollowsComp()

   return (
      <StyledAside>
         <Following />
         <Suggested />
      </StyledAside>
   )
}
const StyledAside = styled('aside')`
   & > * {
      height: 45vh;
      overflow-y: scroll;
   }
`

export default Aside
