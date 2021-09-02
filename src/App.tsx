import Landing from '@/components/containers/landing/Landing'
import Aside from '@/components/core/Aside'
import Header from '@/components/core/Header'
import Layout from '@/components/core/Layout'
import Main from '@/components/core/Main'
import AuthProvider, { useAuth } from '@/providers/auth/AuthProvider'
import SessionProvider from '@/providers/session/SessionProvider'
import '@/styles/sass/index.sass'
import React, { useCallback } from 'react'

interface AppProps {}

const fallback = <h1>loading data!!</h1>

function App({}: AppProps) {
   const errorCb = useCallback(() => {
      //setIsAuth(false)
      return <Landing />
   }, [])

   return (
      <AuthProvider>
         <SessionProvider errorCb={errorCb} fallback={fallback}>
            <Layout className="App">
               <Header />
               <Aside />
               <Main />
            </Layout>
         </SessionProvider>
      </AuthProvider>
   )
}

export default App
