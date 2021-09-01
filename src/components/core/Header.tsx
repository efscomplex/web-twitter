import UserInfo from '@/components/base/userInfo/UserInfo'
import Avatar from '@/components/ui/avatar/Avatar'
import { useAuth } from '@/providers/AuthProvider'
import React from 'react'
import { AiOutlineTwitter } from 'react-icons/ai'
import styled from 'styled-components'

type HeaderProps = {}

const Header: React.FC<HeaderProps> = ({}) => {
   const { auth } = useAuth()

   return (
      <StyledHeader>
         <UserInfo {...auth?.user} />
         <AiOutlineTwitter size="2rem" className="icon-twitter" />
         <span>Tweety</span>
      </StyledHeader>
   )
}
const StyledHeader = styled('header')`
   display: flex;
   align-items: center;
   gap: 1rem;
   border-bottom: 1px solid gray;
   .icon-twitter {
      margin-left: auto;
   }
   span {
      font-size: 1.2rem;
      margin-right: 2rem;
   }
`
export default Header
