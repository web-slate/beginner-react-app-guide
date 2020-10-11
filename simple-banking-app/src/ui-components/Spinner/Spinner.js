import React from "react";
import CircularProgress from "@material-ui/core/CircularProgress";

import useStyles from './Spinner.style';

export default function Spinner(props) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <CircularProgress
        variant="indeterminate"
        disableShrink
        className={classes.top}
        classes={{
          circle: classes.circle
        }}
        size={40}
        thickness={4}
        {...props}
      />
    </div>
  );
};
