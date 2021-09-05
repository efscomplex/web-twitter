import theme from '@/styles/styled/theme'
import React from 'react'
import { ThemeProvider } from 'styled-components'

const CustomThemeProvider: React.FC = ({ children }) => (
   <ThemeProvider theme={theme}>{children}</ThemeProvider>
)

export default CustomThemeProvider
