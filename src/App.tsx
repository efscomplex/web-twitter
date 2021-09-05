import Private from '@/components/containers/private/Private'
import AuthProvider from '@/providers/auth/AuthProvider'
import '@/styles/sass/index.sass'
import React from 'react'

interface AppProps {}

function App({}: AppProps) {
   return (
      <AuthProvider>
         <Private />
      </AuthProvider>
   )
}

export default App
