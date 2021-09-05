import UserInfo from '@/components/base/userInfo/UserInfo'
import { useAuth } from '@/providers/auth/AuthProvider'
import { useSession } from '@/providers/session/UserSessionProvider'
import React from 'react'
import { AiOutlineLogout, AiOutlineTwitter } from 'react-icons/ai'
import styled from 'styled-components'

type HeaderProps = {}

const Header: React.FC<HeaderProps> = ({}) => {
   const { logout } = useAuth()
   const { user } = useSession()

   return (
      <StyledHeader>
         <UserInfo {...user.details} />
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
