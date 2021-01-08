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
import Unauthenticated from './pages/Unauthenticated';
import Authenticated from './pages/Authenticated';
import Sidebar from './components/sidebar/Sidebar';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <ProvideAuth>
          <Router>
            <div>
              <AuthButton />
              <Sidebar />

              <Switch>
                <Route path="/public">
                  <Unauthenticated />
                </Route>
                <Route path="/login">
                  <Login />
                </Route>
                <PrivateRoute path="/protected">
                  <Authenticated />
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
