const axios = require('axios'),
  conConfig = require('../../server/conConfig/conConfig.js');

var api = {
  getUsers: function() {
    return axios.get(`${conConfig.prefix}/${conConfig.name}/users`);
  },

  getUser: function(userId) {
    return axios.get(`${conConfig.prefix}/${conConfig.name}/users/getuser${userId}`);
  }

};

module.exports = api;
