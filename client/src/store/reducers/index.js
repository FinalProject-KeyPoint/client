import { combineReducers } from 'redux'
import users from './users'
import history from './history'

export const rootReducer = combineReducers({
  users,
  history
})