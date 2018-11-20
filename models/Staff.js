const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create Schema
const StaffSchema = new Schema({
  name: {
    type: String,
		required: true
  },
  sex: {
    type: String,
    required: true
  },
  state: {
    type: String
  },
  hobby: {
    type: String
  },
  marriage: {
    type: String,
  },
  birthday: {
		type: String,
  },
  address: {
		type: String,
  },
  date: {
    type: Date,
    default: Date.now
  }
});

module.exports = Staff = mongoose.model("staff", StaffSchema);