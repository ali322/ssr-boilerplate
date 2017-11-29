import Vue from 'vue'
import { sync } from 'vuex-router-sync'
import { createStore } from './store'
import { createRouter } from './router'

export function createApp () {
  const store = createStore()
  const router = createRouter()
  sync(store, router)
  const app = new Vue({
    router,
    store,
    render: h => h({ template: '<main><router-view></router-view></main>' })
  })

  return { app, store, router }
}
