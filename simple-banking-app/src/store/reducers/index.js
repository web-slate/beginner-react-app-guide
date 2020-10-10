import loader from './loader'
import user from './user'

import { combineReducers } from 'redux'

const rootReducer = combineReducers({
  loader,
  user,
})

export default rootReducer