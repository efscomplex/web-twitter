import Landing from '@/components/containers/landing/Landing'
import { useServices } from '@/services'
import React, { createContext, useContext, useState } from 'react'

type AuthContext = {
   isAuth: boolean
   setIsAuth: Function
   auth: any
   setAuth: Function
   [key: string]: any
}

const AuthContext = createContext<AuthContext>({
   isAuth: false,
} as AuthContext)

export const useAuth = () => {
   const services = useServices()
   const ctxt = useContext(AuthContext)

   const { setIsAuth, setAuth, isAuth } = ctxt

   const login = () => {
      if (isAuth) return

      services.twitter
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
   const [auth, setAuth] = useState()

   return (
      <AuthContext.Provider value={{ isAuth, setIsAuth, auth, setAuth }}>
         {isAuth ? children : <Landing />}
      </AuthContext.Provider>
   )
}

export default AuthProvider
