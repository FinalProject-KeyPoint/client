import {
  CLEAR_USER_ERROR,
  CLEAR_USER_SUCCESS,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  LOGIN_START,
  LOGOUT
} from '../actionTypes'

const initialState = {
  isLoggedIn: false,
  isLoading: false,
  error: null,
  success: null
}

export default function usersReducer(state = initialState, action) {
  switch(action.type) {
    case LOGIN_START:
      return {
        ...state,
        isLoading: true
      }
    case LOGIN_SUCCESS:
      localStorage.setItem('token', action.payload)
      return {
        ...state,
        token: action.payload,
        isLoading: false,
        isLoggedIn: true
      }
    case LOGIN_FAILURE:
      return {
        ...state,
        error: action.payload,
        isLoading: false
      }
    case LOGOUT:
      localStorage.removeItem('token')
      return {
        ...state,
        isLoggedIn: false,
        success: 'Successfully signed out' 
      }
    case CLEAR_USER_ERROR:
      return {
        ...state,
        error: null
      }
    case CLEAR_USER_SUCCESS:
      return {
        ...state,
        success: null
      }
    default:
      return state
  }
}