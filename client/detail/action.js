import axios from 'axios'
import * as constants from './constant'

export function requestDetail ({ commit }) {
  commit(constants.REQUEST_DETAIL)
}

export function responseDetail ({ commit }, payload) {
  commit(constants.RESPONSE_DETAIL, payload)
}

export function fetchDetail ({ dispatch, commit }, id) {
  dispatch('requestDetail')
  return axios.get(`http://127.0.0.1:3000/mock/event/${id}`).then(ret => {
    ret = ret.data
    dispatch('responseDetail', ret.data)
  })
}
