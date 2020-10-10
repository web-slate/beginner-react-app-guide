## Store Implementation

Let's discuss about App State Management Module which means storing data of the App when routed one page to another.

```
npm i -S redux react-redux axios
```

## Reducer - Action Types.
Create File `src/store/actionTypes.js`

```
// User.
export const LOG_IN = "LOG_IN";
export const LOG_OUT = "LOG_OUT";
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
import user from './user'

import { combineReducers } from 'redux'

const rootReducer = combineReducers({
  user,
})

export default rootReducer
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

### Sign In Module - Component.
Update File - `simple-banking-app/src/modules/SignIn/index.js`.  
  
Import Connect HOC (Higher Order Component) from Redux.
```
import { connect } from 'react-redux'
```

### Add User Actions.
```

// Actions.
import { logIn } from '../../store/actions/user'
```

### Create `mapStateToProps` method helps to get data from store then we need to pass it `connect` Method.  
After Passing to `connect` Method this will passed as props to our component.  
Get data from Store which means from `User` Reducer. you can access as `props.userName`.  
Here user object from state generated from `src/store/reducers/user.js` where you defined initialState.  
```
const mapStateToProps = state => ({
  userName: state.user.userName
})
```

### Create `mapDispatchToProps` method helps to trigger actions from store then we need to pass it `connect` Method. 
After Passing to `connect` Method this will passed as props to our component.   
Trigger the action to Store to `User` Action. you can access as `props.logIn`.  
We imported `src/store/actions/user.js` and dispatch the login method.  
```
const mapDispatchToProps = dispatch => ({
  logIn: id => dispatch(logIn())
})
```

### Remove the first export approach which is plain.  
Now, Add new Export approach where we called `connect` HOC Method and passed our two maps Method.  
```
// export default withRouter(SignIn);
export default connect(mapStateToProps, mapDispatchToProps)(withRouter(SignIn));
```

### Add Welcome Paragraph in Login Page.  
```
<p>Welcome {props.userName}</p>
```

### Remove the Router library link component which will directly redirect to dashboard.  
Add Login Anchor and onClick you trigger the `logIn` action then redirect to `dashboard` page.  

```
{/* <Link to="dashboard">Log in</Link> */}
    <a href="#" onClick={e => {
      e.preventDefault();
      props.logIn();
      history.push('dashboard');
    }}>Login Now</a>
```

### If you lazy still, then copy this content below to `simple-banking-app/src/modules/SignIn/index.js`.  
```
import React, { Fragment } from 'react';
import { useHistory } from 'react-router-dom';
import { connect } from 'react-redux'
import { withRouter, Link } from 'react-router-dom';

// Actions.
import { logIn } from '../../store/actions/user'

function SignIn(props) {
  const history = useHistory();
  return (
    <Fragment>
      <h4>Login Form Goes here</h4>
      <p>Welcome {props.userName}</p>
      {/* <Link to="dashboard">Log in</Link> */}
      <a href="#" onClick={e => {
        e.preventDefault();
        props.logIn();
        history.push('dashboard');
      }}>Login Now</a>
    </Fragment>
  );
};

const mapStateToProps = state => ({
  userName: state.user.userName
})

const mapDispatchToProps = dispatch => ({
  logIn: id => dispatch(logIn())
})

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(SignIn));
```

## Now Show Logged In User name in Dashboard.  
Update File - `simple-banking-app/src/modules/Dashboard/index.js`  

### Import Reduce Hooks to simplify the part.
```
import { useSelector, useDispatch } from 'react-redux';
```

### Now you can call these methods inside `Dashboard` Component.

```
  const dispatch = useDispatch();
  const userName = useSelector(state => state.user.userName);
```

### Add Welcome Note with LoggIn Username.

```
<p>Welcome {userName}</p>
```

### Then Add Logout link with dispatch the `logout` action.  
```
<a href="#" onClick={e => {
  e.preventDefault();
  dispatch(logOut());
  history.push('/');
}}>Logout</a>
```

