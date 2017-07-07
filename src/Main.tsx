import React from 'react'
import { render } from 'react-dom'

declare var module: { hot: any }

const renderApp = () => {
  render(<h1>My React App!</h1>, document.getElementById('app'))
}
renderApp()

if (module.hot) {
  module.hot.accept('./Router', () => {
    renderApp()
  })
}
