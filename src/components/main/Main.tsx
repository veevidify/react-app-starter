import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { authenticated, unauthenticated } from '../../utils/routes';
import PrivateRoute from '../auth/PrivateRoute';

interface MainProps {
  authed: boolean;
}
const Main: React.FC<MainProps> = ({ authed }) => {
  const routes = authed ? authenticated : unauthenticated;
  const RouteComponent = authed ? PrivateRoute : Route;

  return (
    <Switch>
      {routes.map((route, index) => (
        <RouteComponent key={index} path={route.path} exact={route.exact}>
          <route.main />
        </RouteComponent>
      ))}
    </Switch>
  );
};

export default Main;
