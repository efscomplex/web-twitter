import { Twitter } from '@/services/twitter/Twitter'

export enum FollowsType {
   'followers' = 'followers',
   'following' = 'following',
}
export type ResourceParams = {
   count?: number
   type: FollowsType
}

export const userDataQuery =
   (params?: ResourceParams) => (username: string) => {
      const twitter = Twitter.getInstance()
      const endpoint = `users/by/username/${username}`

      return twitter.getResource(endpoint)
   }

//* get resource by id **/
export const userTimelineQuery =
   (params: ResourceParams) => (userId: string) => {
      const twitter = Twitter.getInstance()
      const endpoint = `/users/${userId}/tweets`

      return twitter.getResource(endpoint)
   }

export const followsQuery =
   ({ type }: ResourceParams) =>
   (userId: string) => {
      const twitter = Twitter.getInstance()
      const endpoint = `users/${userId}/${type}?user.fields=id,name,username,profile_image_url,location,description`

      return twitter.getResource(endpoint)
   }
