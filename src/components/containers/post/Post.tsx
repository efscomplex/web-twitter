import InputMsg from '@/components/base/inputMsg/InputMsg'
import StyledPost from '@/components/containers/post/StyledPost'
import Avatar from '@/components/ui/avatar/Avatar'
import Btn from '@/components/ui/btn/Btn'
import Dots from '@/components/ui/spinners/Dots'
import useQuery from '@/hooks/useQuery'
import { useSession } from '@/providers/session/UserSessionProvider'
import { twitting } from '@/services/twitter/api/resources'
import React, { useRef } from 'react'
import withErrorBoundary from '@/HOCs/withErrorBoundary'

type PostProps = {}

const Post: React.FC<PostProps> = ({}) => {
   const { user } = useSession()

   const { loading, query } = useQuery(twitting)
   const msgRef = useRef<HTMLInputElement | null>(null)

   const onPost = () => {
      query(msgRef.current?.value)
   }

   return (
      <StyledPost>
         <h4 className="post-title">Post a new message</h4>
         <div className="post-msg">
            <Avatar src={user.details.profile_image_url} />
            <InputMsg ref={msgRef} />
         </div>
         <Btn onClick={onPost} disabled={loading}>
            Post
            {loading && <Dots size={'12'} />}
         </Btn>
      </StyledPost>
   )
}

export default withErrorBoundary(Post)
