const {Router, Route, browserHistory, IndexRoute} = require('react-router'),
  React = require('react'),
  UserList = require('UserList'),
  User = require('User'),
  App = require('App'),
  Home = require('Home');

module.exports = (
  <Router
    history={browserHistory}>
    <Route
      component={App}
      path='/'>
      <IndexRoute component={Home} />
      <Route
        path='users'>
        <IndexRoute component={UserList} />
        <Route
          path=':userId'
          component={User}>
        </Route>
      </Route>
    </Route>
  </Router>
);
