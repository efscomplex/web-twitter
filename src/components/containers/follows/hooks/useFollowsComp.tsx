import FollowsSection from '@/components/containers/follows/FollowsSection'
import asLazy from '@/HOCs/asLazy'
import { useUserData } from '@/providers/auth/UserDataProvider'
import { followsQuery, FollowsType } from '@/services/twitter/api/resources'
import { useMemo } from 'react'

const useFollowsComp = () => {
   const { id } = useUserData()
   const Followers = useMemo(
      () =>
         asLazy(
            FollowsSection,
            followsQuery({ type: FollowsType.followers }),
            id,
         ),
      [id],
   )

   const Following = useMemo(
      () =>
         asLazy(
            FollowsSection,
            followsQuery({ type: FollowsType.following }),
            id,
         ),
      [id],
   )

   return { Followers, Following }
}
export default useFollowsComp
