import Protected from '@/components/containers/protected/Protected'
import AuthProvider from '@/providers/auth/AuthProvider'
import '@/styles/sass/index.sass'
import React from 'react'

interface AppProps {}

function App({}: AppProps) {
   return (
      <AuthProvider>
         <Protected />
      </AuthProvider>
   )
}

export default App
