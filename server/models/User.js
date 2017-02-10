const mongoose = require('mongoose');

const Schema = mongoose.Schema;


const UserSchema = new Schema({
    userId: {type: Number, required: true},
    name: {type: String, required: true}
  });

const UserModel = mongoose.model('User', UserSchema);

module.exports = UserModel;
