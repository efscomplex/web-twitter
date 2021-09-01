import Landing from '@/components/containers/landing/Landing'
import { useServices } from '@/services'
import type { AuthResponse } from '@/services/firebase/Firebase'
import React, { createContext, useContext, useState } from 'react'

type AuthContext = {
   isAuth: boolean
   setIsAuth: any
   auth: AuthResponse
   setAuth: any
}

const AuthContext = createContext<AuthContext>({
   isAuth: false,
} as AuthContext)

export const useAuth = () => {
   const { twitter } = useServices()
   const ctxt = useContext(AuthContext)

   const { setIsAuth, setAuth, isAuth } = ctxt

   const login = () => {
      if (isAuth) return Promise.resolve('user is allready logged')

      return twitter
         .login()
         .then((resp) => {
            setAuth(resp)
            setIsAuth(true)
         })
         .catch(console.log)
   }

   const logout = () => {
      setIsAuth(false)
   }

   return {
      login,
      logout,
      ...ctxt,
   }
}

const AuthProvider: React.FC = ({ children }) => {
   const [isAuth, setIsAuth] = useState(false)
   const [auth, setAuth] = useState<AuthResponse>({} as AuthResponse)

   return (
      <AuthContext.Provider value={{ isAuth, setIsAuth, auth, setAuth }}>
         {isAuth ? children : <Landing />}
      </AuthContext.Provider>
   )
}

export default AuthProvider
