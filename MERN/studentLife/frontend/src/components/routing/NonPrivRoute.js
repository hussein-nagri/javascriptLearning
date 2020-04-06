import React from 'react'
import { Redirect, Route } from 'react-router-dom';

export const NonPrivRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props => localStorage.getItem("token") ? (
      <Redirect to={{
        pathname: "/home",
        state: { from: props.location }
      }}
      />
    ) : (
        <Component {...props} />
      )
    }
  />
);