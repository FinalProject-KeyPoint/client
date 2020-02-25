import { combineReducers } from 'redux'
import users from './users'
import articles from './articles'

export const rootReducer = combineReducers({
  users,
  articles
})