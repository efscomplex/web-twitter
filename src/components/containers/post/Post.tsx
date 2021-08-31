import InputMsg from '@/components/base/inputMsg/InputMsg'
import Avatar from '@/components/ui/avatar/Avatar'
import Btn from '@/components/ui/btn/Btn'
import { getAvatar } from '@/testing/__MOCK__/data'
import React from 'react'
import styled from 'styled-components'

type PostProps = {}

const Post: React.FC<PostProps> = ({}) => {
   return (
      <StyledPost>
         <h4 className="post-title">Post a new message</h4>
         <div className="post-msg">
            <Avatar src={getAvatar()} />
            <InputMsg />
         </div>
         <Btn> Post </Btn>
      </StyledPost>
   )
}

const StyledPost = styled('div')`
   padding: 1rem 0;

   .post-title {
      margin-bottom: 1rem;
   }
   .post-msg {
      display: flex;
      gap: 1rem;

      margin-bottom: 1rem;
   }
   button {
      display: block;
      margin-left: auto;
   }
`
export default Post
