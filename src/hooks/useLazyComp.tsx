import asLazy, { WithInitialData } from '@/HOCs/asLazy'
import { useSession } from '@/providers/session/UserSessionProvider'
import React, { useMemo } from 'react'

const useLacyComp = <P extends WithInitialData>(
   Component: React.ComponentType<P>,
   query: any,
) => {
   const { user } = useSession()
   return useMemo(
      () => asLazy(Component, query, user.details.id),
      [user.details.id],
   )
}
export default useLacyComp
