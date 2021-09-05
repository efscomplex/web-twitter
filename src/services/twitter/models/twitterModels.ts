export type Id = string
export type UserData = {
   id: string
   name: string
   username: string
   profile_image_url: string
   location: string
   description: string
   url: string
}
export type Tweet = {
   id: string
   text: string
   author_id: string
   created_at: string
   profile_image_url: string
}
export type TimelineFeeds = {
   tweets: Tweet[]
   authors: UserData[]
}
export type Feed = {
   author: UserData
   tweet: Tweet
}
export enum FollowsType {
   'followers' = 'followers',
   'following' = 'following',
}
