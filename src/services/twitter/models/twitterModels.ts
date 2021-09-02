export type UserData = {
   id: string
   name: string
   username: string
   profile_image_url: string
   location?: string
   description?: string
}
export type Tweet = {
   id: string
   text: string
   author_id: string
   created_at: string
}
export type TimelineTweet = {
   tweets: Tweet[]
   authors: UserData[]
}
export enum FollowsType {
   'followers' = 'followers',
   'following' = 'following',
}
