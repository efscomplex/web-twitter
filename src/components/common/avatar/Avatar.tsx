import React from 'react'
import styled from 'styled-components'

type AvatarProps = {
  src: string
}

const Avatar: React.FC<AvatarProps> = ({ src }) => {
  return <StyledAvatar src={src} />
}
const StyledAvatar = styled('img')`
  width: 7rem;
  border-radius: 50%;
`
export default Avatar
