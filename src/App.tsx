import React from 'react'
import Layout from '@/components/core/Layout'
import Header from '@/components/core/Header'
import Aside from '@/components/core/Aside'
import Main from '@/components/core/Main'

import '@/styles/sass/index.sass'

interface AppProps {}

function App({}: AppProps) {
   return (
      <Layout className="App">
         <Header />
         <Aside />
         <Main />
      </Layout>
   )
}

export default App
