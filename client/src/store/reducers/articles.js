import {
  ARTICLE_PROCESS_FAILURE,
  ARTICLE_PROCESS_START,
  FETCH_ARTICLES_SUCCESS,
  DELETE_ARTICLE_SUCCESS,
  // SEARCH_ARTICLES_SUCCESS,
  // SET_ARTICLE,
  CLEAR_ARTICLES_ERROR,
  CLEAR_ARTICLES_SUCCESS
} from '../actionTypes'

const initialState = {
  error: null,
  isLoading: false,
  success: null,
  articles: []
}

export default function articlesReducer(state = initialState, action) {
  switch(action.type) {
    case ARTICLE_PROCESS_START:
      return {
        ...state,
        isLoading: true
      }
    case ARTICLE_PROCESS_FAILURE:
      return {
        ...state,
        isLoading: false,
        error: action.payload
      }
    case FETCH_ARTICLES_SUCCESS:
      return {
        ...state,
        isLoading: false,
        articles: [...action.payload]
      }
    case DELETE_ARTICLE_SUCCESS:
      let arr = []
      state.articles.forEach(article => {
        if (String(article._id) !== String(action.payload)) {
          arr.push(article)
        }
      })
      return {
        ...state,
        articles: arr,
        isLoading: false,
        success: 'Article successfully deleted'
      }
    // case SEARCH_ARTICLES_SUCCESS:
    //   return {
    //     ...state,
    //     isLoading: false,
    //     ARTICLES: [{ id: 0 }, ...action.payload]
    //   }
    // case SET_ARTICLE:
    //   return {
    //     ...state,
    //     ARTICLE: action.payload
    //   }
    case CLEAR_ARTICLES_SUCCESS:
      return {
        ...state,
        success: null
      }
    case CLEAR_ARTICLES_ERROR:
      return {
        ...state,
        error: null
      }
    default:
      return state
  }
}