import React from 'react';
import { Route, Redirect, RouteProps } from 'react-router-dom';
import { useActions, useStore } from '../../overmind';

const Logout: React.FC = () => {
  const { auth } = useActions();
  auth.logout();

  return <Redirect to="/" />;
};

export default Logout;
