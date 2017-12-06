import React from 'react'
import PropTypes from 'prop-types'
import { wrapper, configureStore } from 'redux-container'
import Container from './container.jsx'
import eventReducer from './reducer'
import * as actions from './action'

export default (ctx, initialState) => {
  return new Promise((resolve, reject) => {
    const store = configureStore(eventReducer, initialState)
    store
      .dispatch(actions.fetchEvents())
      .then(() => {
        let state = store.getState()
        let app = <Container initialState={state} />
        resolve({ app, state })
      })
      .catch(err => reject(err))
  })
}
