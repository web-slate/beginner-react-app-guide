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