import type { WithInitialData } from '@/HOCs/asLazy'
import asLazy from '@/HOCs/asLazy'
import { userDataQuery } from '@/services/twitter/api/resources'
import { createContext, useContext, useState } from 'react'
import React from 'react'

type UserData = {
   id: string
   name: string
   username: string
}
type SessionContext = {
   user: UserData
   selectedUserId: string | null
   setSelectedUserId?: any
}

const initialSessionContext = {
   selectedUserId: null,
}

const SessionContext = createContext<SessionContext>(
   initialSessionContext as SessionContext,
)

export const useSession = () => useContext(SessionContext)

const SessionProvider: React.FC<WithInitialData> = ({
   initialData: user,
   children,
}) => {
   const [selectedUserId, setSelectedUserId] = useState<string | null>(null)

   return (
      <SessionContext.Provider
         value={{ user, selectedUserId, setSelectedUserId }}
      >
         {children}
      </SessionContext.Provider>
   )
}

export default asLazy(SessionProvider, userDataQuery(), 'Efscomplex')
