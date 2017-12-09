import React from 'react';
import { Switch, Route, Link, Redirect, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { login, signup } from '../actions';

function Auth({ user, login, signup, error, location }) {
  const redirect = location.state ? location.state.from : '/';

  if(user) return<Redirect to={redirect}/>;

  return (
    <div>
      <Switch>
        <Route path="/auth/login" component={() => (
          <div>
            <p>Not yet registered? <Link to="/auth/login">Sign Up</Link></p>
          </div>
        )}
        />
      </Switch>
    </div>
  );
}

export default withRouter(connect(
  ({ auth }) => ({
    error: auth.error,
    user: auth.user
  }),
  { login, signup }
)(Auth));