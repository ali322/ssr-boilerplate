import eventReducer from '@/index/reducer'
import * as constants from '@/index/constant'

describe('index reducer', () => {
  it('should handle RESPONSE_EVENTS', () => {
    let action = {
      type: constants.RESPONSE_EVENTS,
      payload: [],
    }
    let nextState = eventReducer({ events: [] }, action)
    expect(nextState.eventsFetched).toBe(true)
  })
})
