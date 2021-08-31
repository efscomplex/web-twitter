import Landing from '@/components/containers/landing/Landing'
import type { Services } from '@/services'
import React, { createContext, useContext, useMemo, useState } from 'react'

type AuthContext = {
   isAuth: boolean
   [key: string]: any
}
const AuthContext = createContext<AuthContext>({
   isAuth: false,
})
export const useAuth = () => useContext(AuthContext)

const AuthProvider: React.FC<{ services: Services }> = ({
   children,
   services,
}) => {
   const [isAuth, setIsAuth] = useState(false)
   const [user, setUser] = useState()

   useMemo(() => {
      services.twitter.getToken().then((resp) => {
         console.log(resp)
      })
   }, [])

   return (
      <AuthContext.Provider value={{ isAuth, setIsAuth, user, setUser }}>
         {isAuth ? children : <Landing />}
      </AuthContext.Provider>
   )
}

export default AuthProvider
