import { createApp } from './app'
import { merge } from 'lodash'
import App from './app.vue'

export default ctx => {
  return new Promise((resolve, reject) => {
    const { app, store } = createApp()
    store.replaceState({
      ...store.state,
      ...ctx.state
    })
    App.asyncState({ store })
      .then(() => {
        ctx.state = merge({}, ctx.state, store.state)
        resolve(app)
      })
      .catch(reject)
  })
}