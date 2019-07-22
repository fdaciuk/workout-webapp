import React from 'react'
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core'
import { ThemeProvider } from 'styled-components'
import ErrorBoundary from './error'
import App from './app'

const theme = createMuiTheme({
  typography: {
    useNextVariants: true
  }
})

const Root = () => (
  <ErrorBoundary>
    <MuiThemeProvider theme={theme}>
      <ThemeProvider theme={theme}>
        <App />
      </ThemeProvider>
    </MuiThemeProvider>
  </ErrorBoundary>
)

export default Root
