import FollowSection from '@/components/containers/followSection/FollowSection'
import React from 'react'

type AsideProps = {}

const Aside: React.FC<AsideProps> = ({}) => {
   return (
      <aside>
         <FollowSection title="Following" btnLabel="Unfollow" />
         <FollowSection title="Who to follow" btnLabel="Follow" />
      </aside>
   )
}

export default Aside
