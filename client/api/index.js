const axios = require('axios'),
  conConfig = require('../../server/conConfig/conConfig.js');

module.exports = {
  listUsers: function() {
    return axios.get(`${conConfig.prefix}/${conConfig.name}`);
  }
};
