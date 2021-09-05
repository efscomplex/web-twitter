import React from 'react'
import styled from 'styled-components'

const Waves: React.FC = () => (
   <Wrapper>
      <StyledWaves>
         <div></div>
         <div></div>
      </StyledWaves>
   </Wrapper>
)
const Wrapper = styled('div')`
   height: 60vh;
   display: flex;
   justify-content: center;
   align-items: center;
`
const StyledWaves = styled('div')`
   & {
      width: 80px;
      height: 80px;
      position: relative;
   }
   & div {
      position: absolute;
      border: 4px solid #fff;
      opacity: 1;
      border-radius: 50%;
      animation: lds-ripple 1s cubic-bezier(0, 0.2, 0.8, 1) infinite;
   }
   & div:nth-child(2) {
      animation-delay: -0.5s;
   }
   @keyframes lds-ripple {
      0% {
         top: 36px;
         left: 36px;
         width: 0;
         height: 0;
         opacity: 1;
      }
      100% {
         top: 0px;
         left: 0px;
         width: 72px;
         height: 72px;
         opacity: 0;
      }
   }
`
export default Waves
