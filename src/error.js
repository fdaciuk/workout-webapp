import React, { Fragment, PureComponent } from 'react'

class ErrorBoundary extends PureComponent {
  state = {
    hasError: false,
    error: null
  }

  static getDerivedStateFromError (error) {
    return {
      hasError: true,
      error
    }
  }

  render () {
    if (this.state.hasError) {
      return (
        <Fragment>
          <h1>Deu problema :(</h1>
          <details>
            <pre>{this.state.error}</pre>
          </details>
        </Fragment>
      )
    }

    return this.props.children
  }
}

export default ErrorBoundary
