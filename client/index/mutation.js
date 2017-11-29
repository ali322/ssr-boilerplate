import * as constants from './constant'

const mutations = {
  [constants.REQUEST_EVENTS] (state) {
    state.eventsFetching = true
  },
  [constants.RESPONSE_EVENTS] (state, payload) {
    state.events = payload
    state.eventsFetching = false
    state.eventsFetched = true
  }
}

export default mutations
