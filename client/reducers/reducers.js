import {combineReducers} from 'redux';

const userReducer = require('./userReducer.js');


var reducers = combineReducers({
  userState: userReducer
});

module.exports = reducers;
