import UserInfo from '@/components/base/userInfo/UserInfo'
import Avatar from '@/components/ui/avatar/Avatar'
import { useAuth } from '@/providers/auth/AuthProvider'
import React from 'react'
import { AiOutlineTwitter, AiOutlineLogout } from 'react-icons/ai'
import styled from 'styled-components'

type HeaderProps = {}

const Header: React.FC<HeaderProps> = ({}) => {
   const { auth, logout } = useAuth()

   return (
      <StyledHeader>
         <UserInfo {...auth?.user} />
         <AiOutlineTwitter size="2rem" className="icon-twitter" />
         <h6 className="tweety">Tweety</h6>
         <AiOutlineLogout
            className="icon-logout"
            size="1.2rem"
            onClick={logout}
         />
      </StyledHeader>
   )
}
const StyledHeader = styled('header')`
   display: flex;
   align-items: center;
   gap: 1rem;
   border-bottom: 1px solid gray;
   .icon-logout {
      cursor: pointer;
   }
   .icon-twitter {
      margin-left: auto;
   }
`
export default Header
