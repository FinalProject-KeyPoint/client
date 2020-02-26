import {
  LOGIN_SUCCESS,
  LOGIN_START,
  LOGIN_FAILURE,
  ARTICLE_PROCESS_START,
  ARTICLE_PROCESS_FAILURE,
  FETCH_ARTICLES_SUCCESS,
  DELETE_ARTICLE_SUCCESS,
  SEARCH_ARTICLES_SUCCESS
} from '../actionTypes'
const axios = require('axios')
const baseUrl = 'https://allh8project.japhendywijaya.xyz'

export function login(obj) {
  console.log(obj, 'dari login action')
  return function(dispatch, getState) {
    dispatch({
      type: LOGIN_START
    })
    axios({
      method: 'POST',
      url: `${baseUrl}/users/login`,
      data: obj
    })
      .then(({ data }) => {
        return dispatch({
          type: LOGIN_SUCCESS,
          payload: data.token
        })
      })
      .catch(({ response }) => {
        dispatch({
          type: LOGIN_FAILURE,
          payload: response.data.message
        })
      })
  }
}

export function register(obj) {
  console.log(obj, 'dari register action')
  return function(dispatch, getState) {
    dispatch({
      type: LOGIN_START
    })
    axios({
      method: 'POST',
      url: `${baseUrl}/users/register`,
      data: obj
    })
      .then(({ data }) => {
        return dispatch({
          type: LOGIN_SUCCESS,
          payload: data.token
        })
      })
      .catch(({ response }) => {
        dispatch({
          type: LOGIN_FAILURE,
          payload: response.data.message
        })
      })
  }
}

export function fetchArticles() {
  return function(dispatch, getState) {
    dispatch({
      type: ARTICLE_PROCESS_START
    })
    axios({
      method: 'GET',
      url: `${baseUrl}/articles`,
      headers: {
        token: localStorage.getItem('token')
      }
    })
      .then(({ data }) => {
        return dispatch({
          type: FETCH_ARTICLES_SUCCESS,
          payload: data
        })
      })
      .catch(({ response }) => {
        dispatch({
          type: ARTICLE_PROCESS_FAILURE,
          payload: response.data.message
        })
      })
  }
}

export function deleteArticle(id) {
  return function(dispatch, getState) {
    dispatch({
      type: ARTICLE_PROCESS_START
    })
    axios({
      method: 'DELETE',
      url: `${baseUrl}/articles/${id}`,
      headers: {
        token: localStorage.getItem('token')
      }
    })
      .then(() => {
        return dispatch({
          type: DELETE_ARTICLE_SUCCESS,
          payload: id
        })
      })
      .catch(({ response }) => {
        dispatch({
          type: ARTICLE_PROCESS_FAILURE,
          payload: response.data.message
        })
      })
  }
}