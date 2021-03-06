import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

import { Auth, Home } from './pages';

const App = props => {
  const { isAuth } = props
  return (
    <div className="wrapper">
      {/* <Switch>
        <Route
          exact
          path={["/signin", "/signup", "/signup/verify"]}
          component={Auth}
        />
        <Route
          path="/"
          render={() => (isAuth ? <Home /> : <Redirect to="/signin" />)}
        />
      </Switch> */}
      {isAuth
        ? <Redirect to='/me' />
        : <Redirect to='/signin' />
      }
      <Route exact path={['/', '/signin', '/signup', '/signup/verify']} component={Auth} />
      <Route path='/me' component={Home} />
    </div>
  )
}


export default connect(({ user }) => ({ isAuth: user.isAuth }))(App);
