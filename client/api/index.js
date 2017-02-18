const axios = require('axios'),
  conConfig = require('../../server/conConfig/conConfig.js'),
  store = require('store'),
  userActions = require('userActions');

var api = {
  getUsers: function() {
    return axios.get(`${conConfig.prefix}/${conConfig.name}/getusers`)
                .then((res) => {
                  store.dispatch(userActions.getUsers(res.data));
                });
  },

  getUser: function(userId) {
    return axios.get(`${conConfig.prefix}/${conConfig.name}/getuser${userId}`).
                .then((res) => {
                  store.dispatch(userActions.getUser(res.data));
                });
  }

};

module.exports = api;
