import React from 'react';
import { Route, Redirect, RouteProps } from 'react-router-dom';
import { useActions, useStore } from '../../overmind';

const PrivateRoute: React.FC<RouteProps> = ({ children, ...rest }) => {
  const { auth } = useStore();

  return (
    <Route
      {...rest}
      render={({ location }) =>
        auth.user ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: '/login',
              state: { from: location },
            }}
          />
        )
      }
    />
  );
};

export default PrivateRoute;
