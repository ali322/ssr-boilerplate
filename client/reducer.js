import { combineReducers } from 'redux'
import eventReducer from './index/reducer'
import detailReducer from './detail/reducer'

const rootReducer = combineReducers({
  index: eventReducer,
  detail: detailReducer
})

export default rootReducer
