import React from 'react'
import PropTypes from 'prop-types'
import { StaticRouter, Switch, Route } from 'react-router'
import { wrapper, configureStore } from 'redux-container'
import { matchPath } from 'react-router-dom'
import rootReducer from './reducer'
import routes from './routes'
import * as actions from './index/action'

const Server = props => {
  const { location, context, store } = props
  const App = wrapper(store)(() => (
    <StaticRouter location={location} context={context}>
      <Switch>{routes.map((route, i) => <Route {...route} key={i} />)}</Switch>
    </StaticRouter>
  ))
  return <App />
}

Server.propTypes = {
  store: PropTypes.object.isRequired,
  location: PropTypes.string.isRequired,
  context: PropTypes.object.isRequired
}

export default (ctx, initialState) => {
  return new Promise((resolve, reject) => {
    let context = {}
    let matched = routes.filter(route => matchPath(ctx.url, route))
    if (!matched.length) {
      reject({ code: 404 }) // eslint-disable-line prefer-promise-reject-errors
    }
    const store = configureStore(rootReducer, {
      index: initialState
    })
    store
      .dispatch(actions.fetchEvents())
      .then(() => {
        let app = <Server context={context} location={ctx.url} store={store} />
        let state = store.getState()
        resolve({ app, state: state.index })
      })
      .catch(err => reject(err))
  })
}
