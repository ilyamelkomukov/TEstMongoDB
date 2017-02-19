const React = require('react'),
  ReactDOM = require('react-dom'),
  Router = require('Router'),
  ReactRedux = require('react-redux'),
  store = require('store');

ReactDOM.render(
  <ReactRedux.Provider
    store = {store} >
    {Router}
  </ReactRedux.Provider>,
  document.getElementById('root')
);
