import React from 'react'
import { useSelector } from 'react-redux'
import Swala from '../config/swal';
import { CLEAR_USER_SUCCESS, CLEAR_ARTICLES_SUCCESS, CLEAR_USER_ERROR, CLEAR_ARTICLES_ERROR } from '../store/actionTypes';
import { useDispatch } from 'react-redux'

export default function NotificationBox() {

  const dispatch = useDispatch()
  const userErr = useSelector(state => state.users.error)
  const userSuccess = useSelector(state => state.users.success)
  const userLoading = useSelector(state => state.users.isLoading)
  const articleErr = useSelector(state => state.articles.error)
  const articleSuccess = useSelector(state => state.articles.success)
  const articleLoading = useSelector(state => state.articles.isLoading)

  const notifications = () => {
    if (userErr) {
      setTimeout(()=> {
        dispatch({
          type: CLEAR_USER_ERROR
        })
        Swala('error', userErr, 'error')
    }, 2000)
    } else if (articleErr) {
      Swala('error', articleErr, 'error')
      setTimeout(()=> dispatch({
        type: CLEAR_ARTICLES_ERROR
      }), 2000)
    } else if (userSuccess) {
      Swala('success', userSuccess, 'success')
      setTimeout(()=> dispatch({
        type: CLEAR_USER_SUCCESS
      }), 2000)
    } else if (articleSuccess) {
      Swala('success', articleSuccess, 'success')
      setTimeout(()=> dispatch({
        type: CLEAR_ARTICLES_SUCCESS
      }), 2000)
    } else if (userLoading || articleLoading) {
      Swala('loading', 'loading...')
    } else {
      return ''
    }
  }

  return(
    <>
      {
        userLoading || userSuccess || userErr || articleErr || articleLoading || articleSuccess
        ? <div style={{
              width: '100%',
              height: '100vh',
              backgroundColor: 'white',
              position: 'fixed',
              zIndex: 10
            }}
          >
          {notifications()}
        </div>
        : null
      }
    </>
  )
}