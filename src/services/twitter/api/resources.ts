import { Twitter } from '@/services/twitter/Twitter'

type Params = {
   count?: number
}

export const getUserTimeline = (userId: string, params: Params) => {
   const twitter = Twitter.getInstance()
   const endpoint = `/users/${userId}/tweets`

   return twitter.getResource(endpoint)
}

export const getUserData = (username: string, params?: Params) => {
   const twitter = Twitter.getInstance()
   const endpoint = `users/by/username/${username}`

   return twitter.getResource(endpoint)
}
