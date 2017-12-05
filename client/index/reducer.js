import * as constants from './constant'

function eventReducer (state = {}, action) {
  switch (action.type) {
    case constants.REQUEST_EVENTS:
      return {
        ...state,
        eventsFetching: true
      }
    case constants.RESPONSE_EVENTS:
      return {
        ...state,
        events: action.payload,
        eventsFetched: true,
        eventsFetching: false
      }
    default:
      return state
  }
}

export default eventReducer
