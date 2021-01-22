import React from 'react';
import { Route, useHistory, useLocation } from 'react-router-dom';
import styled from 'styled-components';

import { Button, PaddedContainer } from 'precise-ui';
import { authenticated, unauthenticated } from '../../utils/routes';
import PrivateRoute from '../auth/PrivateRoute';

interface SidebarProps {
  authed: boolean;
}
const SidebarButton = styled(Button)<{ current?: boolean }>`
  width: 100%;
  background-color: inherit;
  color: #333;
  border-bottom: ${(props) => (props.current ? '1px solid grey' : '')};

  :hover,
  :active,
  :focus {
    color: #333;
    background-color: inherit;
    border-bottom: 1px solid grey;
  }
`;

const Sidebar: React.FC<SidebarProps> = ({ authed }) => {
  const routes = authed ? authenticated : unauthenticated;
  // const RouteComponent = authed ? PrivateRoute : Route;
  const history = useHistory();
  const location = useLocation();

  return (
    <div>
      {routes.map((route) => (
        <PaddedContainer key={route.path} left="small" right="small">
          <SidebarButton
            block
            current={location.pathname === route.path}
            onClick={() => {
              history.push(route.path);
            }}
          >
            {route.text}
          </SidebarButton>
        </PaddedContainer>
      ))}
    </div>
  );
};

export default Sidebar;
