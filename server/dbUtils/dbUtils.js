const mongoose = require('mongoose'),
  conConfig = require('../conConfig/conConfig.js'),
  User = require('../models/User.js'),
  assert = require('assert');

mongoose.Promise = require('bluebird');

let dbUtils = {

  setUpConnection: function() {
    mongoose.connect(`mongodb://${conConfig.host}:${conConfig.dbPort}/${conConfig.name}`);
  },

  getUsers: function() {
    return User.find();
  },

  populateDB: function() {
    var users = [
      {
        userId: 1,
        name: 'TEst1'
      },

      {
        userId: 2,
        name: "TEst2"
      }
    ];

    users.forEach((user) => {
      var newUser = new User({
        userId: user.userId,
        name: user.name
      });

      newUser.save(function(err) {
        if(err) {
          console.log('error while saving: ' + err);
        } else {
          console.log('new user: ' + newUser.userId + ' ' + newUser.name + ' was saved');
        }
      });
    });
  }
};

module.exports = dbUtils;
