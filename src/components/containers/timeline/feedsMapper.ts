import type {
   Id,
   TimelineFeeds,
   UserData,
} from '@/services/twitter/models/twitterModels'

const feedsMapper = (data: TimelineFeeds, userId: Id | null) => {
   const { tweets, authors } = data
   console.log(data)

   return tweets.map((tweet) => ({
      tweet,
      author: authors.find(
         (author) => author.id === (userId || tweet.author_id),
      ) as UserData,
   }))
}
export default feedsMapper
