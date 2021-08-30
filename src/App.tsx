import React from 'react'
import Layout from '@/components/core/Layout'
import Header from '@/components/core/Header'
import Aside from '@/components/core/Aside'
import Main from '@/components/core/Main'

import '@/styles/index.sass'
interface AppProps {}
const { GREET } = __SNOWPACK_ENV__

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
