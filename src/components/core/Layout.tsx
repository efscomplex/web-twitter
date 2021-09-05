import ThemeProvider from '@/providers/theme/ThemeProvider'
import React from 'react'
import styled from 'styled-components'

const AppLayout: React.FC<any> = ({ children, ...props }) => {
   return (
      <ThemeProvider>
         <Layout {...props}>{children}</Layout>
      </ThemeProvider>
   )
}

const Layout = styled('div')`
   height: 100vh;
   max-height: 100vh;
   width: max-content;
   margin: auto;

   display: grid;
   grid-template-areas: 'aside header' 'aside main';
   grid-template-columns: minmax(35%, 25rem) 40rem;
   grid-template-rows: min-content 1fr;

   grid-gap: 1rem;
   & > * {
      padding: 1rem;
   }
   & > header {
      grid-area: header;
   }
   & > aside {
      grid-area: aside;
      overflow-y: scroll;
   }
   & > main {
      padding-top: 0;
      grid-area: main;
      min-height: 0;
   }
`
export default AppLayout
