import Aside from '@/components/core/Aside'
import Header from '@/components/core/Header'
import Layout from '@/components/core/Layout'
import Main from '@/components/core/Main'
import AuthProvider from '@/providers/auth/AuthProvider'
import '@/styles/sass/index.sass'
import React from 'react'

interface AppProps {}

function App({}: AppProps) {
   return (
      <AuthProvider>
         <Layout className="App">
            <Header />
            <Aside />
            <Main />
         </Layout>
      </AuthProvider>
   )
}

export default App
