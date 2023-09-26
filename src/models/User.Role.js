const mongoose = require('mongoose');

const RoleSchema = mongoose.Schema({

  role: {
    type: String
  },
}, {
  version: false,
  timestamps: true,
});

module.exports = mongoose.model('Role', RoleSchema);
