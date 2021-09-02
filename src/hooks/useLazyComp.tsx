import asLazy, { WithInitialData } from '@/HOCs/asLazy'
import { useSession } from '@/providers/session/SessionProvider'
import React, { useMemo } from 'react'

const useLacyComp = <P extends WithInitialData>(
   Component: React.ComponentType<P>,
   query: any,
) => {
   const { user } = useSession()
   return useMemo(() => asLazy(Component, query, user.id), [user.id])
}
export default useLacyComp
