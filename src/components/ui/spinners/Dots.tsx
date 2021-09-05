import styled from 'styled-components'
import React from 'react'

type DotsProps = {
   readonly size?: string
}
const Dots: React.FC<DotsProps> = ({ size }) => (
   <StyledDots size={size}>
      <div></div>
      <div></div>
      <div></div>
   </StyledDots>
)

const StyledDots = styled('div')<DotsProps>`
   & {
      display: inline-block;
      position: relative;
      width: ${(props) => (Number(props.size) | 8) * 5}px;
      height: 10px;
      margin: 0 1rem;
   }
   & div {
      --size: ${(props) => props.size || '8'}px;
      position: absolute;
      width: var(--size);
      height: var(--size);
      border-radius: 50%;
      background: #fff;
      animation-timing-function: cubic-bezier(0, 1, 1, 0);
   }
   & div:nth-child(1) {
      left: 8px;
      animation: lds-ellipsis1 0.6s infinite;
   }
   & div:nth-child(2) {
      left: 8px;
      animation: lds-ellipsis2 0.6s infinite;
   }
   & div:nth-child(3) {
      left: 32px;
      animation: lds-ellipsis2 0.6s infinite;
   }
   & div:nth-child(4) {
      left: 56px;
      animation: lds-ellipsis3 0.6s infinite;
   }
   @keyframes lds-ellipsis1 {
      0% {
         transform: scale(0);
      }
      100% {
         transform: scale(1);
      }
   }
   @keyframes lds-ellipsis3 {
      0% {
         transform: scale(1);
      }
      100% {
         transform: scale(0);
      }
   }
   @keyframes lds-ellipsis2 {
      0% {
         transform: translate(0, 0);
      }
      100% {
         transform: translate(24px, 0);
      }
   }
`
export default Dots
