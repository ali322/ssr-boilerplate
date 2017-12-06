import Vue from 'vue'
import Vuex from 'vuex'
import * as actions from './action'
import mutations from './mutation'

Vue.use(Vuex)

export function createStore () {
  return new Vuex.Store({
    state: {
      detail: {}
    },
    actions,
    mutations
  })
}
