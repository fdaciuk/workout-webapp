import React from 'react'
import ReactDOM from 'react-dom'
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core'
import App from './app'
import ErrorBoundary from './error'
import * as serviceWorker from './serviceWorker'


const theme = createMuiTheme({
  typography: {
    useNextVariants: true
  },

  pallete: {
    common: {
      black: '#000',
      white: '#fff'
    }
  }
})

ReactDOM.render(
  <ErrorBoundary>
    <MuiThemeProvider theme={theme}>
      <App />
    </MuiThemeProvider>
  </ErrorBoundary>
, document.getElementById('root'))

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.register()

if (module.hot) {
  module.hot.accept()
}
