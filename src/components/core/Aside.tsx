import useFollowsComp from '@/components/containers/follows/hooks/useFollowsComp'
import React from 'react'

type AsideProps = {}

const Aside: React.FC<AsideProps> = ({}) => {
   const { Followers, Following } = useFollowsComp()
   return (
      <aside>
         <Followers title="Following" btnLabel="Unfollow" />
         <Following title="Who to follow" btnLabel="Follow" />
      </aside>
   )
}

export default Aside
