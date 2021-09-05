import withStaticProps from '@/HOCs/withStaticProps'
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

type Props = {
   session: UserState
}

const UserSessionProvider: React.FC<Props> = ({ children, session }) => {
   const [selectedUserId, setSelectedUserId] = useState<string | null>(null)
   const [user, dispatch] = useReducer(sessionReducer, {} as UserState)

   useEffect(() => {
      dispatch({ action: UserAction.SET_SESSION, payload: session })
   }, [])

   return (
      <SessionContext.Provider
         value={{ user, selectedUserId, setSelectedUserId, dispatch }}
      >
         {children}
      </SessionContext.Provider>
   )
}

export const getStaticProps = async (context: any) => {
   console.log(context)
   console.count('get static')
   const { userId } = context

   const suggestedQuery = getFollowsQuery({ type: FollowsType.followers })
   const followingQuery = getFollowsQuery({ type: FollowsType.following })

   const details = await userDataById(userId)
   const suggested = await suggestedQuery(userId)
   const following = await followingQuery(userId)

   const followingUsernames = following.map((f) => f.username)
   const timeline = tweetsByUsernames(followingUsernames)

   const session = {
      details,
      suggested,
      following,
      timeline,
   }

   return {
      session,
   }
}

export default withStaticProps(UserSessionProvider, getStaticProps)
