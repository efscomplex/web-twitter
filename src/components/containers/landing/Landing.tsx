import Btn from '@/components/ui/btn/Btn'
import { useAuth } from '@/providers/auth/AuthProvider'
import React from 'react'
import { FaTwitter } from 'react-icons/fa'
import styled from 'styled-components'

const Landing: React.FC = () => {
   const { login } = useAuth()

   return (
      <StyledLanding>
         <Btn onClick={login}>
            <FaTwitter
               size="2rem"
               style={{ marginRight: '1rem', background: 'transparent' }}
            />
            Login with twitter
         </Btn>
      </StyledLanding>
   )
}
const StyledLanding = styled('div')`
   height: 50vh;
   display: flex;
   place-items: center;
   justify-content: center;
`

export default Landing
