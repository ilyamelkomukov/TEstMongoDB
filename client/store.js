import {createStore} from 'redux';

const reducers = require('reducers');

const store = createStore(reducers);

module.exports = store;
