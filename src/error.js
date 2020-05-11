import React, { PureComponent } from 'react'
import t from 'prop-types'

class ErrorBoundary extends PureComponent {
  state = {
    hasError: false,
    error: null
  }

  static propTypes = {
    children: t.node.isRequired
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
        <>
          <h1>Deu problema :(</h1>
          <details>
            <pre>{this.state.error}</pre>
          </details>
        </>
      )
    }

    return this.props.children
  }
}

export default ErrorBoundary
