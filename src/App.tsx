import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import logo from './logo.svg';
import './App.css';
import { CallBackHandler } from './pages/callback';

function App() {
  return (
    <Router>
    <div className="App">
      
      <Switch>
          <Route exact path="/">
            <a href="https://developer.matataki.io/app/bfba5b6eace73430/oauth">Login With Matataki</a>
          </Route>
          <Route path="/callback">
            <CallBackHandler />
          </Route>
        </Switch>
      </div>
      </Router>
  );
}

export default App;
