import { createApp } from './app'
import { merge } from 'lodash'

export default ctx => {
  return new Promise((resolve, reject) => {
    const { app, store, router } = createApp()
    store.replaceState({
      ...store.state,
      ...ctx.state
    })
    router.push(ctx.url)
    router.onReady(() => {
      const matched = router.getMatchedComponents()
      if (!matched.length) {
        reject({ code: 404 }) // eslint-disable-line prefer-promise-reject-errors
      }
      Promise.all(
        matched.map(Component => {
          if (Component.asyncState) {
            return Component.asyncState({
              store,
              route: router.currentRoute
            })
          }
        })
      )
        .then(() => {
          ctx.state = merge({}, ctx.state, store.state)
          resolve(app)
        })
        .catch(reject)
    }, reject)
  })
}
