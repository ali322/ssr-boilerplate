import * as constants from './constant'

const mutations = {
  [constants.REQUEST_DETAIL] (state) {
    state.detailFetching = true
  },
  [constants.RESPONSE_DETAIL] (state, payload) {
    state.detail = payload
    state.detailFetching = false
    state.detailFetched = true
  }
}

export default mutations
