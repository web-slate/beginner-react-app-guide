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
