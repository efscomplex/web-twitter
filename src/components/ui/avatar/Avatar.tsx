import styled from 'styled-components'

const Avatar = styled('img')`
  --avatar-size: 4rem;
  border-radius: 50%;
  display: block;
  width: var(--avatar-size);
  max-width: 6rem;
  height: var(--avatar-size);
  margin-right: 1rem;
  border: 1px solid white;
`
export default Avatar
