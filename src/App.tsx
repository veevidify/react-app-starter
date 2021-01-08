import React from 'react';
import './App.css';

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import { PrivateRoute } from './components/auth/auth';
import Login from './pages/Login';
import Unauthenticated from './pages/Unauthenticated';
import Authenticated from './pages/Authenticated';
import Sidebar from './components/sidebar/Sidebar';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Router>
          <div>
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
      </header>
    </div>
  );
}

export default App;
