import React from 'react'
import styled from 'styled-components'

const AppLayout: React.FC<any> = ({ children, ...props }) => {
  return <Layout {...props}>{children}</Layout>
}

const Layout = styled('div')`
  height: 100vh;
  max-height: 100vh;

  display: grid;
  grid-template-areas: 'aside header' 'aside main';
  grid-template-columns: 35% 1fr;
  grid-template-rows: min-content 1fr;

  & > header {
    grid-area: header;
  }
  & > aside {
    grid-area: aside;
    overflow-y: scroll;
  }
  & > main {
    grid-area: main;
    overflow-y: scroll;
  }
`
export default AppLayout
