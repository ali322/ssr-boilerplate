import React from 'react'
import PropTypes from 'prop-types'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { wrapper, configureStore } from 'redux-container'
import rootReducer from './reducer'
import routes from './routes'

const Container = props => {
  const { initialState } = props
  const store = configureStore(rootReducer, { index: initialState })
  if (module.hot) {
    module.hot.accept('./reducer', () => {
      const nextReducer = require('./reducer')
      store.replaceReducer(nextReducer)
    })
  }

  const App = wrapper(store)(() => (
    <BrowserRouter>
      <Switch>{routes.map((route, i) => <Route {...route} key={i} />)}</Switch>
    </BrowserRouter>
  ))
  return <App />
}

Container.propTypes = {
  initialState: PropTypes.object.isRequired
}

export default Container
