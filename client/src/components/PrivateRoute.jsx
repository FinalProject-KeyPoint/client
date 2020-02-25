import React from 'react';
import { Route, Redirect, useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux'

export const PrivateRoute = ({component: Component, ...props}) => {
  const isLoggedIn = useSelector(state => state.users.isLoggedIn)
  const location = useLocation()

  return (
    <Route {...props}>
      {
        isLoggedIn
          ? props.children
          : <Redirect to={{
            pathname: "/",
            state: { referrer: location.pathname }
          }}
          />
      }
    </Route>
  );
};