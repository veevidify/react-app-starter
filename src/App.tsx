import React from 'react';
import './App.css';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
} from "react-router-dom";

import { ProvideAuth, PrivateRoute } from './components/auth/auth';
import Login, { AuthButton } from './pages/Login';
import Public from './pages/Public';
import Protected from './pages/Protected';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <ProvideAuth>
          <Router>
            <div>
              <AuthButton />

              <ul>
                <li>
                  <Link to="/public">Public Page</Link>
                </li>
                <li>
                  <Link to="/protected">Protected Page</Link>
                </li>
              </ul>

              <Switch>
                <Route path="/public">
                  <Public />
                </Route>
                <Route path="/login">
                  <Login />
                </Route>
                <PrivateRoute path="/protected">
                  <Protected />
                </PrivateRoute>
              </Switch>
            </div>
          </Router>
        </ProvideAuth>
      </header>
    </div>
  );
}

export default App;
