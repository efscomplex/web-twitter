import React from 'react'
import Layout from '@/components/core/Layout'
import Header from '@/components/core/Header'
import Aside from '@/components/core/Aside'
import Main from '@/components/core/Main'
import { createTwitterService } from '@/services/twitter/Twitter'
import AuthProvider from '@/providers/AuthProvider'
import { Services, useServices } from '@/services'

import '@/styles/sass/index.sass'

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
