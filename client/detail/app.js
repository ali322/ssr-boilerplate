import Vue from 'vue'
import { createStore } from './store'
import App from './app.vue'

export function createApp () {
  const store = createStore()
  const app = new Vue({
    store,
    render: h => h(App)
  })

  return { app, store }
}