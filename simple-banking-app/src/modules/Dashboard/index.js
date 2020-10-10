import React, { Fragment } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';

// Actions.
import { logOut } from '../../store/actions/user'

export default function Dashboard() {
  const history = useHistory();
  const dispatch = useDispatch();
  const userName = useSelector(state => state.user.userName);

  return (
    <Fragment>
      <p>Dashboard Goes here</p>
      <p>Welcome {userName}</p>
      <a href="#" onClick={e => {
        e.preventDefault();
        dispatch(logOut());
        history.push('/');
      }}>Logout</a>
    </Fragment>
  );
};
