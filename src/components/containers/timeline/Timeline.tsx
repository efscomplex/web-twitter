import Feed from '@/components/base/feed/Feed'
import feedsMapper from '@/components/containers/timeline/feedsMapper'
import useToggleTimeline from '@/components/containers/timeline/useToggleTimeline'
import List from '@/components/ui/list/List'
import { useSession } from '@/providers/session/UserSessionProvider'
import React, { useMemo } from 'react'
import styled from 'styled-components'

const Timeline: React.FC = () => {
   const { selectedUserId, user } = useSession()
   useToggleTimeline()

   const feeds = useMemo(() => {
      if (!user.timeline) return null
      return feedsMapper(user.timeline, selectedUserId)
   }, [user.timeline])

   if (!feeds) return null

   return (
      <StyledTimeline>
         <List
            style={{ gap: '1rem' }}
            items={feeds}
            render={(feed) => <Feed {...feed} />}
         />
      </StyledTimeline>
   )
}

const StyledTimeline = styled('div')`
   overflow-y: scroll;
`

export default Timeline
