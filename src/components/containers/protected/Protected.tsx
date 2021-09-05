import Aside from '@/components/core/Aside'
import Header from '@/components/core/Header'
import Layout from '@/components/core/Layout'
import Main from '@/components/core/Main'
import withStaticProps from '@/HOCs/withStaticProps'
import { useAuth } from '@/providers/auth/AuthProvider'
import UserSessionProvider, {
   getStaticProps,
} from '@/providers/session/UserSessionProvider'
import React, { useMemo } from 'react'

type ProtectedProps = {}

const fallback = <h1>loading data!!</h1>

const Protected: React.FC<ProtectedProps> = ({}) => {
   const { auth } = useAuth()

   console.count('df')
   const UserSession = useMemo(() => {
      if (true) return () => null
      const context = { userId: auth.user.userId }

      return withStaticProps(UserSessionProvider, getStaticProps, context)
   }, [])

   return (
      <UserSession fallback={fallback}>
         <Layout className="App">
            <Header />
            <Aside />
            <Main />
         </Layout>
      </UserSession>
   )
}

export default Protected
