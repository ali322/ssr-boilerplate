import React from 'react'
import { render } from 'react-dom'
import App from './app.jsx'
import './common/responsive'

if (module.hot) {
  module.hot.accept()
}

const initialState = JSON.parse(
  document.getElementById('initial-state').textContent
)

render(<App initialState={initialState} />, document.getElementById('app'))
