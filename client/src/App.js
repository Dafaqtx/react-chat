import React from 'react';
import { connect } from 'react-redux';
import { Route, Redirect, Switch } from 'react-router-dom';

import { Auth, Home } from 'pages';

const App = props => {
  const { isAuth } = props;
  return (
    <div className="wrapper">
      <Switch>
        <Route
          exact
          path={['/login', '/registration', '/registration/verify']}
          component={Auth}
        />
        <Route
          path="/"
          render={() => (isAuth ? <Home /> : <Redirect to="/registration" />)}
        />
      </Switch>
    </div>
  );
};

export default connect(state => ({
  isAuth: state.users.isAuth,
}))(App);
