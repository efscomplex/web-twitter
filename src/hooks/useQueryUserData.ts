import { useAuth } from '@/providers/auth/AuthProvider'
import type { UserAction } from '@/providers/session/reducer'
import { useSession } from '@/providers/session/UserSessionProvider'
import { useEffect } from 'react'

const useQueryUserData = (
   query: any,
   action: typeof UserAction[keyof typeof UserAction],
) => {
   const { auth } = useAuth()
   const { dispatch } = useSession()

   useEffect(() => {
      query(auth.user.userId).then((data: any) => {
         dispatch({ action, payload: data })
      })
   }, [auth.user, dispatch])
}
export default useQueryUserData
