import styled from 'styled-components'

const Avatar = styled('img')`
   --avatar-size: 4rem;
   display: block;

   width: var(--avatar-size);
   max-width: 6rem;
   height: var(--avatar-size);

   border-radius: 50%;
   border: 1px solid white;
`
export default Avatar
