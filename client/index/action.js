import axios from 'axios'
import * as constants from './constant'

export function requestEvents ({ commit }) {
  commit(constants.REQUEST_EVENTS)
}

export function responseEvents ({ commit }, payload) {
  commit(constants.RESPONSE_EVENTS, payload)
}

export function fetchEvents ({ commit, dispatch }) {
  dispatch('requestEvents')
  return axios
    .get('http://127.0.0.1:3000/mock/events')
    .then(ret => {
      ret = ret.data
      dispatch('responseEvents', ret.data)
    })
    .catch(err => console.log('err', err))
}
