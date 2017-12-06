import axios from 'axios'
import * as constants from './constant'

function requestDetail (param) {
  return {
    type: constants.REQUEST_DETAIL,
    param
  }
}

function responseDetail (payload) {
  return {
    type: constants.RESPONSE_DETAIL,
    payload
  }
}

export function fetchDetail (param) {
  return dispatch => {
    dispatch(requestDetail(param))
    return axios.get(`http://127.0.0.1:3000/mock/event/${param.id}`).then(ret => {
      ret = ret.data
      dispatch(responseDetail(ret.data))
    })
  }
}
