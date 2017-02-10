const mongoose = require('mongoose'),
  conConfig = require('../conConfig/conConfig.js'),
  User = require('../models/User.js');

module.exports.dbUtils = {
  setUpConnection: function() {
    mongoose.connect(`mongodb://${conConfig.host}:${conConfig.dbPort}/${conConfig.name}`);
  },

  listUsers: function() {
    return User.find();
  }
};
