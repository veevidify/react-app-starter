import React from 'react';
import { Route, Redirect, RouteProps  } from "react-router-dom";
import { useState } from '../../overmind';

export const PrivateRoute: React.FC<RouteProps> = ({ children, ...rest }) => {
  const { auth } = useState();

  return (
    <Route
      {...rest}
      render={({ location }) =>
        auth.user ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/login",
              state: { from: location }
            }}
          />
        )
      }
    />
  );
}
