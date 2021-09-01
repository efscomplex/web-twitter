import type { WithInitialData } from '@/HOCs/asLazy'
import asLazy from '@/HOCs/asLazy'
import { getUserData } from '@/services/twitter/api/resources'
import { createContext, useContext } from 'react'

type UserData = {
   id: string
   name: string
   username: string
}

const UserDataContext = createContext<UserData>({} as UserData)

export const useUserData = () => useContext(UserDataContext)

const UserDataProvider: React.FC<WithInitialData> = ({
   initialData,
   children,
}) => {
   return (
      <UserDataContext.Provider value={initialData}>
         {children}
      </UserDataContext.Provider>
   )
}

export default asLazy(UserDataProvider, () => getUserData('Efscomplex'))
