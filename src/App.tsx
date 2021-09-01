import React from 'react';
import {
  Switch,
  Route,
  Link
} from "react-router-dom";
import logo from './logo.svg';
import './App.css';
import { CallBackHandler } from './pages/callback';
import { Providers } from './_providers';
import { CatPage } from './pages/cat';

function App() {
  return (
    <Providers>
    <div className="App">
      
      <Switch>
          <Route exact path="/">
            <a href="https://developer.matataki.io/app/bfba5b6eace73430/oauth">Login With Matataki</a>
          </Route>
          <Route path="/callback">
            <CallBackHandler />
          </Route>
          <Route path="/cat">
            <CatPage />
          </Route>
        </Switch>
      </div>
      </Providers>
  );
}

export default App;
