import Vue from 'vue'
import Vuex from 'vuex'
import index from './index/store'
import detail from './detail/store'

Vue.use(Vuex)

export function createStore () {
  return new Vuex.Store({
    modules: { index, detail }
  })
}
