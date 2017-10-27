const mongoose = require('mongoose');

const userDataSchema = new mongoose.Schema({
  username: {type: String, required: true, unique: true},
  password: {type: String, required: true},

})

const userData = mongoose.model('userData', userDataSchema);

module.exports = userData;
