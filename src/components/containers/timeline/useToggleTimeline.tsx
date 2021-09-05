import { UserAction } from '@/providers/session/reducer'
import { useSession } from '@/providers/session/UserSessionProvider'
import {
   tweetsByUsernames,
   userTimeline,
} from '@/services/twitter/api/resources'
import { useEffect } from 'react'

const useToggleTimeline = () => {
   const { selectedUserId, user, dispatch } = useSession()

   useEffect(() => {
      if (!selectedUserId) {
         ;(async () => {
            const followingUsernames = user.following.map((f) => f.username)
            const timeline = await tweetsByUsernames(followingUsernames)
            dispatch({ action: UserAction.SET_TIMELINE, payload: timeline })
         })()
         return
      }

      userTimeline(selectedUserId).then((data) => {
         dispatch({ action: UserAction.SET_TIMELINE, payload: data })
      })
   }, [selectedUserId])
}

export default useToggleTimeline
