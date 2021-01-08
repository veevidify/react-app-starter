import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import { useStore } from "../../overmind";
import { authenticated, IRoute, unauthenticated } from "../../utils/routes";
import { PrivateRoute } from "../auth/auth";

const Sidebar = () => {
  const { auth } = useStore();
  const routes = auth.user ? authenticated : unauthenticated;
  const RouteComponent = auth.user ? PrivateRoute : Route;

  return (
    <Router>
      <div style={{ display: "flex" }}>
        <div
          style={{
            padding: "10px",
            width: "40%",
            background: "#f0f0f0"
          }}
        >
          <ul style={{ listStyleType: "none", padding: 0 }}>
            {routes.map(route => (
              <li key={route.path}>
                <Link to={route.path}>{route.path}</Link>
              </li>
            ))}
          </ul>

          <Switch>
            {routes.map((route, index) => (
              <RouteComponent
                key={index}
                path={route.path}
                exact={route.exact}
                children={<route.sidebar />}
              />
            ))}
          </Switch>
        </div>

        <div style={{ flex: 1, padding: "10px" }}>
          <Switch>
            {routes.map((route, index) => (
              <RouteComponent
                key={index}
                path={route.path}
                exact={route.exact}
                children={<route.main />}
              />
            ))}
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default Sidebar;
