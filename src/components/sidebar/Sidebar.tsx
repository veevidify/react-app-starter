import React from 'react';
import { Route, useHistory } from 'react-router-dom';

import { authenticated, unauthenticated } from "../../utils/routes";
import { PrivateRoute } from "../../components/auth/auth";
import { Button } from 'precise-ui';

interface SidebarProps {
  authed: boolean
}
const Sidebar: React.FC<SidebarProps> = ({ authed }) => {
  const routes = authed ? authenticated : unauthenticated;
  // const RouteComponent = authed ? PrivateRoute : Route;
  const history = useHistory();

  return (
    <div>
      {routes.map(route => (
        <Button key={route.path} onClick={() => { history.push(route.path) }}>{route.text}</Button>
      ))}
    </div>
  )
}

export default Sidebar
