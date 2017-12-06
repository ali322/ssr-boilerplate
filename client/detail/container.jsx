import React from 'react'
import PropTypes from 'prop-types'
import { wrapper, configureStore } from 'redux-container'
import eventReducer from './reducer'
import App from './app.jsx'

const Container = props => {
  const { initialState } = props
  const store = configureStore(eventReducer, initialState)
  if (module.hot) {
    module.hot.accept('./reducer', () => {
      const nextReducer = require('./reducer')
      store.replaceReducer(nextReducer)
    })
  }

  const Component = wrapper(store)(App)
  return <Component />
}

Container.propTypes = {
  initialState: PropTypes.object.isRequired
}

export default Container
