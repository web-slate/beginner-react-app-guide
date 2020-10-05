## Router Implementation

Let's discuss about Router Module which means. redirecting from one page to another.

#### Install react-router-dom history
These modules are installed as dependency module and update `package.json`.
Router Module will help to route and history helps to maintain the history when user redirect back and forth.
What is depedency module which is shipped with web bundle which is used in website.
```
npm i -S react-router-dom history
```

### Import the library in App Component.
```
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { createBrowserHistory } from 'history';

const browserHistory = createBrowserHistory();

import {
  Dashboard,
  SignIn
} from './modules';
```

### Add Router Component.
<Router> - We are adding Router Component which helps to maintain your history as parent Component.  
<Switch> - `Switch` Component helps to show component as per URL.
<Route> - `Route` Component Show the Component when satisfies with `path` props.
Note: `Switch` Component part is dynamic but h1 remains same even you redirect new page.
```
export default function App() {
  return (
    <Fragment>
      <Router history={browserHistory} basename="/your-folder-name-in-github.io">
        <h1>Simple Banking App goes here</h1>
        <Switch>
          <Route path="/dashboard">
            <Dashboard />
          </Route>
          <Route path="/">
            <SignIn />
          </Route>
        </Switch>
      </Router>
    </Fragment>
  );
};
```

### Add Module. Base
```
mkdir src/modules/index.js
```

### Add SignIn Module.
```
mkdir src/modules/SignIn/index.js
```

### Add Simple SignIn Component.
In `src/modules/SignIn/index.js` File.
1. We imported `withRouter` HOC.
2. What is HOC? Its called as High Order Component. basically this component can accept component as param.
3. When we export, we passed our component to `withRouter` HOC to enable to Router mechanism and its a tradional way of Router integration.
4. We added Link component which is nothing but Anchor tag for React Routers.
```
import React, { Fragment } from 'react';
import { withRouter, Link } from 'react-router-dom';

function SignIn() {
  return (
    <Fragment>
      <h4>Login Form Goes here</h4>
      <Link to="dashboard">Log in</Link>
    </Fragment>
  );
};

export default withRouter(SignIn);
```

### Add Dashboard Module.
```
mkdir src/modules/Dashboard/index.js
```

### Add Simple Dashboard Component.
In `src/modules/Dashboard/index.js` File.
1. This time, we are going with hooks to enable the Router Mechanism and see how easy it is.
2. Import useHistory, Add it inside the component and call `history.push()` inside onClick event.
3. By the way, onClick event is native event and this is called Synthetic Event in React now in React 17 they removed and kept Native Event.
4. event.preventDefault(), Your experience should teach you what is that!!
```
import React, { Fragment } from 'react';
import { useHistory } from 'react-router-dom';

export default function Dashboard() {
  const history = useHistory();

  return (
    <Fragment>
      <p>Dashboard Goes here</p>
      <a href="#" onClick={e => {
        e.preventDefault();
        history.push('/');
      }}>Logout</a>
    </Fragment>
  );
};

```

### Add Module Index
```
mkdir src/modules/index.js
```

### Export your both Module here.
In `src/modules/Dashboard/index.js` File.
```
export { default as Dashboard } from './Dashboard';
export { default as SignIn } from './SignIn';
```

