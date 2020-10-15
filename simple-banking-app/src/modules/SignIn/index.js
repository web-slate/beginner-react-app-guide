import React, { Fragment, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { connect } from 'react-redux'
import { withRouter, Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';

import FormControl from '@material-ui/core/FormControl';
import TextField from '@material-ui/core/TextField';
import AccountCircle from '@material-ui/icons/AccountCircle';
import Input from '@material-ui/core/Input';
import InputAdornment from '@material-ui/core/InputAdornment';
import InputLabel from '@material-ui/core/InputLabel';
import IconButton from '@material-ui/core/IconButton';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import FormHelperText from '@material-ui/core/FormHelperText';

// Actions.
import { logIn } from '../../store/actions/user'
import { loading } from '../../store/actions/loader';

const useStyles = makeStyles((theme) => ({
  username: {
    margin: theme.spacing(1),
  },
  password: {
    margin: theme.spacing(1),
    width: '25ch',
  },
}));

// Reference - https://material-ui.com/components/text-fields/
const UserName = () => {
  const classes = useStyles();

  return (
    <TextField
      className={classes.username}
      id="input-with-icon-textfield"
      label="Username"
      InputProps={{
        startAdornment: (
          <InputAdornment position="start">
            <AccountCircle />
          </InputAdornment>
        ),
      }}
      helperText="Incorrect entry."
      error
    />
  )
}

// Reference - https://material-ui.com/components/text-fields/#input-adornments
const Password = () => {
  const classes = useStyles();

  const [values, setValues] = useState({
    password: '',
    showPassword: false,
  });

  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };

  const handleClickShowPassword = () => {
    setValues({ ...values, showPassword: !values.showPassword });
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  return (
    <FormControl error className={classes.password}>
      <InputLabel htmlFor="standard-adornment-password">Password</InputLabel>
      <Input
        id="standard-adornment-password"
        type={values.showPassword ? 'text' : 'password'}
        value={values.password}
        onChange={handleChange('password')}
        endAdornment={
          <InputAdornment position="end">
            <IconButton
              aria-label="toggle password visibility"
              onClick={handleClickShowPassword}
              onMouseDown={handleMouseDownPassword}
            >
              {values.showPassword ? <Visibility /> : <VisibilityOff />}
            </IconButton>
          </InputAdornment>
        }
      />
      <FormHelperText id="my-helper-text">Incorrect entry.</FormHelperText>
    </FormControl>
  );
}

function SignIn(props) {
  const history = useHistory();
  return (
    <Fragment>
      <h4>Login Form Goes here</h4>
      <p>Welcome {props.userName}</p>
      <UserName />
      <Password />
      <a href="#" onClick={e => {
        e.preventDefault();
        props.logIn();
        props.setLoading();
        setTimeout(function () {
          history.push('dashboard');
        }, 5000);
      }}>Login Now</a>
    </Fragment>
  );
};

const mapStateToProps = state => ({
  userName: state.user.userName
})

const mapDispatchToProps = dispatch => ({
  logIn: id => dispatch(logIn()),
  setLoading: id => dispatch(loading()),
})

// export default withRouter(SignIn);
export default connect(mapStateToProps, mapDispatchToProps)(withRouter(SignIn));