import Waves from '@/components/ui/spinners/Waves'
import { useAuth } from '@/providers/auth/AuthProvider'
import sessionReducer, {
   UserAction,
   UserState,
} from '@/providers/session/reducer'
import {
   getFollowsQuery,
   tweetsByUsernames,
   userDataById,
} from '@/services/twitter/api/resources'
import { FollowsType } from '@/services/twitter/models/twitterModels'
import React, {
   createContext,
   Dispatch,
   useContext,
   useEffect,
   useReducer,
   useState,
} from 'react'

type SessionContext = {
   selectedUserId: string | null
   setSelectedUserId?: any
   dispatch: Dispatch<any>
} & { user: UserState }

const initialSessionContext = {
   selectedUserId: null,
}

const SessionContext = createContext<SessionContext>(
   initialSessionContext as SessionContext,
)

export const useSession = () => useContext(SessionContext)

const UserSessionProvider: React.FC = ({ children }) => {
   const { auth } = useAuth()
   const [error, setError] = useState<any>(null)
   const [loading, setLoading] = useState(true)
   const [selectedUserId, setSelectedUserId] = useState<string | null>(null)
   const [user, dispatch] = useReducer(sessionReducer, {} as UserState)

   useEffect(() => {
      const context = { userId: auth.user.userId }
      getStaticProps(context)
         .then((data) => {
            dispatch({ action: UserAction.SET_SESSION, payload: data })
            setLoading(false)
         })
         .catch(setError)
   }, [])

   if (error)
      return <h1 style={{ color: 'gray' }}> ups!! something was wrong - 404</h1>
   return (
      <SessionContext.Provider
         value={{ user, selectedUserId, setSelectedUserId, dispatch }}
      >
         {loading ? <Waves /> : children}
      </SessionContext.Provider>
   )
}

export const getStaticProps = async (context: any) => {
   const { userId } = context

   const suggestedQuery = getFollowsQuery({ type: FollowsType.followers })
   const followingQuery = getFollowsQuery({ type: FollowsType.following })

   const details = await userDataById(userId)
   const suggested = await suggestedQuery(userId)
   const following = await followingQuery(userId)

   const followingUsernames = following.map((f) => f.username)
   const timeline = await tweetsByUsernames(followingUsernames)

   return {
      details,
      suggested,
      following,
      timeline,
   }
}

export default UserSessionProvider
