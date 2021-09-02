import Landing from '@/components/containers/landing/Landing'
import Aside from '@/components/core/Aside'
import Header from '@/components/core/Header'
import Layout from '@/components/core/Layout'
import Main from '@/components/core/Main'
import AuthProvider, { useAuth } from '@/providers/auth/AuthProvider'
import UserDataProvider from '@/providers/auth/UserDataProvider'
import '@/styles/sass/index.sass'
import React, { useCallback } from 'react'

interface AppProps {}

const fallback = <h1>loading data!!</h1>

function App({}: AppProps) {
   const { setIsAuth } = useAuth()

   const errorCb = useCallback(() => {
      //setIsAuth(false)
      return <Landing />
   }, [])

   return (
      <AuthProvider>
         <UserDataProvider errorCb={errorCb} fallback={fallback}>
            <Layout className="App">
               <Header />
               <Aside />
               <Main />
            </Layout>
         </UserDataProvider>
      </AuthProvider>
   )
}

export default App
