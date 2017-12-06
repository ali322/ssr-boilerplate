import React from 'react'
import { render } from 'react-dom'
import Container from './container.jsx'
import '../common/responsive'

if (module.hot) {
  module.hot.accept()
}

const initialState = JSON.parse(
  document.getElementById('initial-state').textContent
)

render(
  <Container initialState={initialState} />,
  document.getElementById('app')
)
