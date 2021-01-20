import React from 'react';

import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import { useStore } from '../overmind';
import { authenticated, unauthenticated } from '../utils/routes';
import PrivateRoute from '../components/auth/PrivateRoute';

import { Grid, PreciseTheme } from 'precise-ui';
import Sidebar from '../components/sidebar/Sidebar';
import Main from '../components/main/Main';

const Cell = (props: any) => (
  <div style={{ borderTop: '1px solid grey', height: '100%', boxSizing: 'border-box' }}>
    {props.children}
  </div>
);

const gridTheme: PreciseTheme = {
  primary: '#444',
};

const Dashboard: React.FC = () => {
  const { auth } = useStore();
  const authed: boolean = auth.user ? true : false;

  return (
    <Grid rows={['100px', '1fr']} columns={['200px', '1fr']} spacing="10px" theme={gridTheme}>
      <Cell column={0} row={0} colSpan={2}>
        <p>Header</p>
      </Cell>
      <Cell column={0} row={1} colSpan={1}>
        <Sidebar authed={authed} />
      </Cell>
      <Cell column={1} row={1} colSpan={1}>
        <Main authed={authed} />
      </Cell>
    </Grid>
  );
};

export default Dashboard;
