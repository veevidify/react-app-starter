import React from 'react';
import { Route, useHistory } from 'react-router-dom';
import styled from 'styled-components';

import { authenticated, unauthenticated } from "../../utils/routes";
import { PrivateRoute } from "../../components/auth/auth";
import { Button, PaddedContainer } from 'precise-ui';

interface SidebarProps {
  authed: boolean
}
const SidebarButton = styled(Button)`
  width: 100%;
`;

const Sidebar: React.FC<SidebarProps> = ({ authed }) => {
  const routes = authed ? authenticated : unauthenticated;
  // const RouteComponent = authed ? PrivateRoute : Route;
  const history = useHistory();

  return (
    <div>
      {routes.map(route => (
        <PaddedContainer key={route.path} gutter="small">
          <SidebarButton block={true} onClick={() => { history.push(route.path) }}>{route.text}</SidebarButton>
        </PaddedContainer>
      ))}
    </div>
  )
}

export default Sidebar
