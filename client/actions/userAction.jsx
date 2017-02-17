const actionTypes = require('actionTypes');

var userActions = {
  function getUsers(users) {
    return {
      type: actionTypes.GET_USERS,
      users: users
    };
  }

  // TODO: Create action creator for getUser
};
