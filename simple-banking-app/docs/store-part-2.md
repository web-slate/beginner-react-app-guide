## Store Implementation

Let's discuss about App State Management Module which means storing data of the App when routed one page to another.

```
npm i -S redux react-redux axios
```

## Reducer - Action Types.
Create File `src/store/actionTypes.js`

```
// Loaders.
export const IS_LOADING = "IS_LOADING";
export const DONE_LOADING = "DONE_LOADING";
```

## Reducer - Loader
Create File `src/store/reducers/loader.js`  

```
import { IS_LOADING, DONE_LOADING } from "../actionTypes";

const initialState = {
  loading: false,
};

export default (state = initialState, action = {}) => {
  switch (action.type) {
    case IS_LOADING:
      return {
        loading: true,
      };
    case DONE_LOADING:
      return {
        loading: false,
      };
    default:
      return state;
  }
};
```

## Reducer - User
Create File `src/store/reducers/user.js`  

```
import { LOG_IN, LOG_OUT } from "../actionTypes";

const initialState = {};

export default (state = initialState, action = {}) => {
  switch (action.type) {
    case LOG_IN:
      return {
        userName: 'Dan Abramov'
      };
    case LOG_OUT:
      return {};
    default:
      return state;
  }
};
```

## Reducer - Main Index
Create File `src/store/index.js`.

```
import loader from './loader'
import user from './user'

import { combineReducers } from 'redux'

const rootReducer = combineReducers({
  loader,
  user,
})

export default rootReducer
```

## Action - Loader
Create File `src/store/actions/loader.js`

```
import { IS_LOADING, DONE_LOADING } from '../actionTypes';

export function loading() {
  return { type: IS_LOADING };
};

export function doneLoading() {
  return { type: DONE_LOADING };
}
```

## Action - User
Create File `src/store/actions/user.js`

```
import { LOG_IN, LOG_OUT } from '../actionTypes';

export function logIn() {
  return { type: LOG_IN };
};

export function logOut() {
  return { type: LOG_OUT };
}
```

## Action - Main Index
Create File - `src/store/actions/index.js`

```
import { ADD_ARTICLE } from "../actionTypes";

export function addArticle(payload) {
  return { type: ADD_ARTICLE, payload };
}
```

### Main App Component - Add Redux
Update File `simple-banking-app/src/App.js`.

```
import { Provider } from 'react-redux';
```

### Main App Component - Add Store
Update File `simple-banking-app/src/App.js`.

```
import store from './store';
```

### Main App Component - Update Provider Component.
Update File `simple-banking-app/src/App.js`.

```
export default function App() {
  return (
    <Fragment>
      <Provider store={store}>
        <ThemeProvider theme={theme}>
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
```