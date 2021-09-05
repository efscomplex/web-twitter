import Feed from '@/components/base/feed/Feed'
import feedsMapper from '@/components/containers/timeline/feedsMapper'
import List from '@/components/ui/list/List'
import { UserAction } from '@/providers/session/reducer'
import { useSession } from '@/providers/session/UserSessionProvider'
import { userTimeline } from '@/services/twitter/api/resources'
import React, { useEffect, useMemo } from 'react'
import styled from 'styled-components'

const Timeline: React.FC = () => {
   const { selectedUserId, user, dispatch } = useSession()

   useEffect(() => {
      if (!selectedUserId) return

      userTimeline(selectedUserId).then((data) => {
         dispatch({ action: UserAction.SET_TIMELINE, payload: data })
      })
   }, [selectedUserId])

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
