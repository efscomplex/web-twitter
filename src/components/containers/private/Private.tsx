import Aside from '@/components/core/Aside'
import Header from '@/components/core/Header'
import Layout from '@/components/core/Layout'
import Main from '@/components/core/Main'
import UserSessionProvider from '@/providers/session/UserSessionProvider'
import React from 'react'

type PrivateProps = {}

const Private: React.FC<PrivateProps> = ({}) => {
   return (
      <UserSessionProvider>
         <Layout className="App">
            <Header />
            <Aside />
            <Main />
         </Layout>
      </UserSessionProvider>
   )
}

export default Private
