const axios = require('axios'),
  conConfig = require('../../server/conConfig/conConfig.js');

var api = {
  getUsers: function() {
    return axios.get(`${conConfig.prefix}/${conConfig.name}/main`);
  }

};

module.exports = api;
