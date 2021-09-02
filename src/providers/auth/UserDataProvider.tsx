import type { WithInitialData } from '@/HOCs/asLazy'
import asLazy from '@/HOCs/asLazy'
import { userDataQuery } from '@/services/twitter/api/resources'
import { createContext, useContext } from 'react'
import React from 'react'

type UserData = {
   id: string
   name: string
   username: string
}

const UserDataContext = createContext<UserData>({} as UserData)

export const useUserData = () => useContext(UserDataContext)

const UserDataProvider: React.FC<WithInitialData> = ({
   initialData: user,
   children,
}) => {
   return (
      <UserDataContext.Provider value={user}>
         {children}
      </UserDataContext.Provider>
   )
}

export default asLazy(UserDataProvider, userDataQuery(), 'Efscomplex')
