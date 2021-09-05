import type {
   Feed,
   TimelineFeeds,
   UserData,
} from '@/services/twitter/models/twitterModels'

export type UserState = {
   details: UserData
   timeline: TimelineFeeds
   following: UserData[]
   suggested: UserData[]
}
const actionMap = {
   SET_FOLLOWING_USERS: 'following',
   SET_SUGGESTED_USERS: 'suggested',
   SET_USER: 'details',
   SET_TIMELINE: 'timeline',
}
export enum UserAction {
   SET_FOLLOWING_USERS = 'SET_FOLLOWING_USERS',
   SET_SUGGESTED_USERS = 'SET_SUGGESTED_USERS',
   SET_USER = 'SET_USER',
   SET_TIMELINE = 'SET_TIMELINE',
   SET_SESSION = 'SET_SESSION',
}
export type SessionReducerParams = {
   action: UserAction
   payload: any
}
const sessionReducer = (
   state: UserState,
   { action, payload }: SessionReducerParams,
) => {
   if (action === UserAction.SET_SESSION) return payload
   return action in UserAction
      ? {
           ...state,
           [actionMap[UserAction[action]]]: payload,
        }
      : state
}

export default sessionReducer
