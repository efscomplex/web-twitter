import type {
   FollowsType,
   Id,
   UserData,
} from '@/services/twitter/models/twitterModels'
import { Twitter } from '@/services/twitter/Twitter'
import encodeUrl from 'encodeurl'

export type ResourceParams = {
   count?: number
   type: FollowsType
}

export const userDataQuery =
   (params?: ResourceParams) => (username: string) => {
      const twitter = Twitter.getInstance()
      const endpoint = `users/by/username/${username}`

      return twitter.get(endpoint).then((resp) => resp.data)
   }

const userFields = 'id,name,username,profile_image_url,location,description'
const tweetFields = 'id,text,author_id,created_at'

export const userDataById = (userId: string) => {
   const twitter = Twitter.getInstance()
   const endpoint = `users/${userId}?user.fields=${userFields}`

   return twitter.get(endpoint).then((resp) => resp.data)
}

export const userTimeline = (userId: Id) => {
   const twitter = Twitter.getInstance()
   const parameters = `expansions=author_id&tweet.fields=${tweetFields}&user.fields=${userFields}`
   const endpoint = `users/${userId}/tweets?${parameters}`

   return twitter.get(endpoint).then((resp) => ({
      tweets: resp.data,
      authors: resp.includes.users,
   }))
}

export const getFollowsQuery =
   ({ type }: ResourceParams) =>
   (userId: string): Promise<UserData[]> => {
      const twitter = Twitter.getInstance()
      const endpoint = `users/${userId}/${type}?user.fields=${userFields}`

      return twitter.get(endpoint).then((resp) => resp.data)
   }
export const twitting = (text?: string) => {
   const twitter = Twitter.getInstance()
   const endpoint = `statuses/update.json?status=${text}`

   return twitter.post(endpoint)
}

export const tweetsByUsernames = (usernames: string[]) => {
   const twitter = Twitter.getInstance()
   const query = usernames
      .slice(0, 10)
      .map((username) => `from:${username}`)
      .join(' OR ')
   const encodedQuery = encodeUrl(query)
   const params = `query=${encodedQuery}&tweet.fields=${tweetFields}&user.fields=${userFields}&expansions=author_id`
   const endpoint = `tweets/search/recent?${params}`

   return twitter.get(endpoint).then((resp) => ({
      tweets: resp.data,
      authors: resp.includes.users,
   }))
}
export const verifyCredentials = () => {
   const twitter = Twitter.getInstance()
   const endpoint = 'account/verify_credentials.json'

   return twitter.get(endpoint)
}
