import React from 'react'
import { AiOutlineTwitter } from 'react-icons/ai'
import styled from 'styled-components'

type HeaderProps = {}

const Header: React.FC<HeaderProps> = ({}) => {
   return (
      <StyledHeader>
         <AiOutlineTwitter size="2rem" />
         <span>Tweety</span>
      </StyledHeader>
   )
}
const StyledHeader = styled('header')`
   display: flex;
   align-items: center;
   gap: 1rem;
   border-bottom: 1px solid gray;
   span {
      font-size: 1.2rem;
   }
`
export default Header
