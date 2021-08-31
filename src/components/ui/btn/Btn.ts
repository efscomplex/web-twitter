import styled from 'styled-components'

const Btn = styled('button')`
   padding: 0.4rem 1rem;

   border-radius: 17px;
   cursor: pointer;

   border: none;
   background-color: ${(props) =>
      props.theme.primary ? 'var(--primary)' : '#fff'};
   color: ${(props) => props.theme.onPrimary || '#222'};

   transition: transform ease-in-out 250ms;
   text-transform: capitalize;
   &:hover {
      transform: scale(1.075);
   }
`

export default Btn
