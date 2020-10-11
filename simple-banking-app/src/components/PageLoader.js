import React, { Fragment } from 'react';
import { useSelector } from 'react-redux';

// `UI` Components.
import {
  Spinner,
} from '../ui-components';

export default function PageLoader() {
  const loader = useSelector(state => state.loader);

  return (
    <Fragment>
      {loader.loading && <Spinner />}
    </Fragment>
  );
};
