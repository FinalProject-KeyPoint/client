import React from 'react'
import { Image } from 'react-bootstrap'
import { useSelector } from 'react-redux'
import loader from '../assets/notifications/loader.gif';

export default function NotificationBox() {

  const userErr = useSelector(state => state.users.error)
  const userSuccess = useSelector(state => state.users.success)
  const userLoading = useSelector(state => state.users.isLoading)
  const articleErr = useSelector(state => state.articles.error)
  const articleSuccess = useSelector(state => state.articles.success)
  const articleLoading = useSelector(state => state.articles.isLoading)

  const notifications = () => {
    if (userErr || articleErr) {
      return `error! ${userErr || articleErr}`
    } else if (userSuccess || articleSuccess) {
      return `success! ${userSuccess || articleSuccess}`
    } else if (userLoading || articleLoading) {
      return <Image src={loader} />
    } else {
      return ''
    }
  }

  // put close notification button

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