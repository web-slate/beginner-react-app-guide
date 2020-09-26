import React, { Fragment, useState, useEffect } from 'react';

export default function App() {
  const [loggedIn, login] = useState('');
  const [addedTxn, addTxn] = useState(false);

  // Trigger only First Time aka `Mounting`.
  useEffect(() => {
    console.log('$: Called first time (only once)');
  }, []);

  // Trigger every state update aks `Updating`.
  useEffect(() => {
    console.log('$: Load every time. first time (mounting) and every state update');
  });

  // Trigger only when `loggedIn` state update aks `Updating`.
  useEffect(() => {
    console.log('$: loggedIn changed (useState) when useState and loggedIn state changed');
  }, [loggedIn]);

  // Trigger only when `loggedIn` state is true and `addedTxn` is true update aks `Updating`.
  useEffect(() => {
    console.log('$: addedTxn changed and loggedIn (useState) when useState and loggedIn state changed');
  }, [(loggedIn === true) && addedTxn]);

  return (
    <Fragment>
      <h1>Simple Banking App goes here</h1>
      <p>{loggedIn && 'Welcome to Dashboard'}</p>

      {loggedIn && !addedTxn && <button onClick={e => addTxn(true)}>Add Transaction</button>}
 
      <button onClick={e => login(loggedIn ? false : true)}>
        {loggedIn ? 'Logout' : 'Login'}
      </button>
    </Fragment>
  );
};