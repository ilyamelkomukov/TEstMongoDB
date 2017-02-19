const actionTypes = require('actionTypes');

var userActions = {
  getUsers: function(users) {
    return {
      type: actionTypes.GET_USERS,
      users: users
    };
  },

  getUser: function(user) {
    return {
      type: actionTypes.GET_USER,
      user: user
    };
  }
};

module.exports = userActions;
