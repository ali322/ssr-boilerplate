import Vue from 'vue'
import VueRouter from 'vue-router'
import Index from './index/app.vue'
import Detail from './detail/app.vue'

Vue.use(VueRouter)

const routes = [
  { path: '/', component: Index },
  { path: '/detail/:id', component: Detail }
]

export function createRouter () {
  return new VueRouter({
    mode: 'history',
    routes
  })
}
