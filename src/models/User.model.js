const mongoose = require('mongoose');

const UserSchema = mongoose.Schema({
  username: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  role: {
    type: mongoose.Types.ObjectId,
    ref: 'Role'
  },
}, {
  version: false,
  timestamps: true,
});

module.exports = mongoose.model('User', UserSchema);
