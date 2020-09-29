import React, { Fragment } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { createBrowserHistory } from 'history';

const browserHistory = createBrowserHistory();

import {
  Dashboard,
  SignIn
} from './modules';

export default function App() {
  return (
    <Fragment>
      <h1>Simple Banking App goes here</h1>
      <Router history={browserHistory}>
        <Switch>
          <Route exact path="/">
            <SignIn />
          </Route>
          <Route exact path="/dashboard">
            <Dashboard />
          </Route>
        </Switch>
      </Router>
    </Fragment>
  );
};