import React from 'react'
import RegisterForm from '../components/Forms/RegisterForm'
import { Redirect, useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux'

export default function Landing() {

  const isLoggedIn = useSelector(state => state.users.isLoggedIn)
  const location = useLocation()


  return (
    isLoggedIn
      ? <Redirect to={{
            pathname: "/",
            state: { referrer: location.pathname }
          }}
        />
      : <>
          <RegisterForm />
        </>
  )
}