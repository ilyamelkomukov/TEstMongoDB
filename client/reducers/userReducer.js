"use strict";

const actionTypes = require('actionTypes');

const initialState = {
  users: [],
  user: {}
};


function userReducer(state = initialState, action) {

  switch (action.type) {
    case actionTypes.GET_USERS:
      return Object.assign({}, state, {users: action.users});
      break;

    case actionTypes.GET_USER:
      return Object.assign({}, state, {user: action.user});
      break;
  }

  return state;
};

module.exports = userReducer;
