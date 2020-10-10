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

// export default withRouter(SignIn);
export default connect(mapStateToProps, mapDispatchToProps)(withRouter(SignIn));