import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import { useStore } from "../overmind";
import { authenticated, unauthenticated } from "../utils/routes";
import { PrivateRoute } from "../components/auth/auth";

import { Grid } from 'precise-ui';
import Sidebar from "../components/sidebar/Sidebar";
import Main from "../components/main/Main";

const Cell = (props: any) => (
  <div style={{ borderBottom: '1px solid grey', borderRight: '1px solid grey', padding: '5px', height: '100%', boxSizing: 'border-box', margin: '10px' }}>
    {props.children}
  </div>
);
const Dashboard = () => {
  const { auth } = useStore();
  const authed: boolean = auth.user ? true : false;
  const routes = auth.user ? authenticated : unauthenticated;
  const RouteComponent = auth.user ? PrivateRoute : Route;

  return (
    <Grid rows={2} columns={4}>
      <Cell column={0} row={0} colSpan={4}>
        <p>Header</p>
      </Cell>
      <Cell column={0} row={1} colSpan={1}>
        <Sidebar authed={authed} />
      </Cell>
      <Cell column={1} row={1} colSpan={3}>
        <Main authed={authed} />
      </Cell>
    </Grid>
  );
}

export default Dashboard;
