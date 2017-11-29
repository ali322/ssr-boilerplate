import Vue from 'vue'
import './common/responsive'
import { createApp } from './app'

const { app, router, store } = createApp()

// Vue.mixin({
//   beforeMount () {
//     const { asyncState } = this.$options
//     if (asyncState) {
//       asyncState({
//         store: this.$store,
//         route: this.$route
//       })
//     }
//   },
//   beforeRouteUpdate (to, from, next) {
//     const { asyncState } = this.$options
//     if (asyncState) {
//       asyncState({
//         store: this.$store,
//         route: to
//       })
//         .then(next)
//         .catch(next)
//     } else {
//       next()
//     }
//   }
// })

router.onReady(() => {
  if (window.__INITIAL_STATE__) {
    store.replaceState(window.__INITIAL_STATE__)
  }
  if (module.hot) {
    module.hot.accept()
  }
  app.$mount('#app')
})
