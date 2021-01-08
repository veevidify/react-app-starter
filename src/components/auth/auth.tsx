import React from 'react';
import { useProvideAuth, authContext, useAuth } from './hooks';
import { Route, Redirect, RouteProps  } from "react-router-dom";

export const ProvideAuth: React.FC = ({ children }) => {
  const auth = useProvideAuth();
  return (
    <authContext.Provider value={auth}>
      {children}
    </authContext.Provider>
  );
};

export const PrivateRoute: React.FC<RouteProps> = ({ children, ...rest }) => {
  let auth = useAuth();
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
