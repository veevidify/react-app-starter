import React from 'react';
import './App.css';

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import { PrivateRoute } from './components/auth/auth';
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
          </div>
        </Router>
      </header>
    </div>
  );
}

export default App;
