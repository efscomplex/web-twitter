import type { FollowsType } from '@/services/twitter/models/twitterModels'
import { Twitter } from '@/services/twitter/Twitter'

export type ResourceParams = {
   count?: number
   type: FollowsType
}

export const userDataQuery =
   (params?: ResourceParams) => (username: string) => {
      const twitter = Twitter.getInstance()
      const endpoint = `users/by/username/${username}`

      return twitter.getResource(endpoint).then((resp) => resp.data)
   }

// get resource by id
export const userTimelineQuery =
   (params?: ResourceParams) => (userId: string) => {
      const twitter = Twitter.getInstance()
      const parameters =
         params ||
         'expansions=author_id&user.fields=id,name,username,profile_image_url,location,description'
      const endpoint = `users/${userId}/tweets?${parameters}`

      return twitter.getResource(endpoint).then((resp) => ({
         tweets: resp.data,
         authors: resp.includes.users,
      }))
   }

export const followsQuery =
   ({ type }: ResourceParams) =>
   (userId: string) => {
      const twitter = Twitter.getInstance()
      const parameters =
         'user.fields=id,name,username,profile_image_url,location,description'
      const endpoint = `users/${userId}/${type}?${parameters}`

      return twitter.getResource(endpoint).then((resp) => resp.data)
   }
