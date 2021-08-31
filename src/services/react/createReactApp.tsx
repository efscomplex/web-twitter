import React from 'react'
import ReactDOM from 'react-dom'

const createReactApp = (app: JSX.Element): void => {
   ReactDOM.render(
      <React.StrictMode>{app}</React.StrictMode>,
      document.getElementById('root'),
   )
   if (import.meta.hot) {
      import.meta.hot.accept()
   }
}

export default createReactApp
