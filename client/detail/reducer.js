import * as constants from './constant'

function detailReducer (state = {}, action) {
  switch (action.type) {
    case constants.REQUEST_DETAIL:
      return {
        ...state,
        detailFetching: true
      }
    case constants.RESPONSE_DETAIL:
      return {
        ...state,
        detailFetching: false,
        detailFetched: true,
        detail: action.payload
      }
    default:
      return state
  }
}

export default detailReducer
