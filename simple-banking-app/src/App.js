import React, { Fragment } from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import { ThemeProvider } from '@material-ui/styles';

import store from './store';
import theme from './theme';

// Component.
import Header from './components/Header';
import PageLoader from './components/PageLoader';

const browserHistory = createBrowserHistory();

import {
  Dashboard,
  SignIn
} from './modules';

export default function App() {
  return (
    <Fragment>
      <Provider store={store}>
        <ThemeProvider theme={theme}>
          <PageLoader />
          <Header />
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
        </ThemeProvider>
      </Provider>
    </Fragment>
  );
};