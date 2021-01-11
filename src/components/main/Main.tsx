import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { authenticated, unauthenticated } from '../../utils/routes';
import { PrivateRoute } from '../../components/auth/auth';

interface MainProps {
  authed: boolean;
}
const Main: React.FC<MainProps> = ({ authed, ...children }) => {
  const routes = authed ? authenticated : unauthenticated;
  const RouteComponent = authed ? PrivateRoute : Route;

  return (
    <Switch>
      {routes.map((route, index) => (
        <RouteComponent key={index} path={route.path} exact={route.exact}>
          {children}
        </RouteComponent>
      ))}
    </Switch>
  );
};

export default Main;
