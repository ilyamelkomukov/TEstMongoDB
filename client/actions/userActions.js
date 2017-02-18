const actionTypes = require('actionTypes');

var userActions = {
  function getUsers(users) {
    return {
      type: actionTypes.GET_USERS,
      users: users
    };
  }

  function getUser(user) {
    return {
      type: actionTypes.GET_USER,
      user: user
    };
  }
};

module.exports = userActions;
