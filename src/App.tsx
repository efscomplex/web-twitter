import React from 'react'

interface AppProps {}
const { GREET } = __SNOWPACK_ENV__

function App({}: AppProps) {
  return <div className="App">hello {GREET}</div>
}

export default App
