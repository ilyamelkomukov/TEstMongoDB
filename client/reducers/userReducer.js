"use strict";

const actionTypes = require('actionTypes');

const initialState = {
  users: []
};

// TODO: Finish with reducers 

exports.userReducer = function(state = initialState, action) {

  switch (type.action) {
    case 'GET_USERS':
        return Object.assign({}, state, {users: action.users});
      break;
  }

  return state;
};
