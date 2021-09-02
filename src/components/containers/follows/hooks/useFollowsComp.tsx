import CurrentFollows from '@/components/containers/follows/CurrentFollows'
import SuggestedFollows from '@/components/containers/follows/SuggestedFollows'
import useLazyComp from '@/hooks/useLazyComp'
import { followsQuery } from '@/services/twitter/api/resources'
import { FollowsType } from '@/services/twitter/models/twitterModels'

const useFollowsComp = () => {
   const Suggested = useLazyComp(
      SuggestedFollows,
      followsQuery({ type: FollowsType.followers }),
   )
   const Following = useLazyComp(
      CurrentFollows,
      followsQuery({ type: FollowsType.following }),
   )

   return { Suggested, Following }
}
export default useFollowsComp
