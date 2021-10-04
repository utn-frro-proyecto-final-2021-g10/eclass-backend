const mongoose = require('mongoose'); // Mongoose
const Schema = mongoose.Schema;

const validateEmail = (email) => { // emailregex.com
  let re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(email)
};

const userSchema = new Schema({
  type: {
    type: String, 
    required: 'Type is required',
  },
  name: {
    type: String,
    required: 'Name is required',
  },
  lastName:{
    type: String,
    required: 'Last Name is required'
  },
  schoolID: {
    type: Number
  },
  dateOfBirth: {
    type: Date
  },
  email: {
    type: String,
    validate: [validateEmail, 'Please fill a valid email address'],
    required: 'Email address is required',
  },
  token: {
    type: String
  }
}, {
  timestamps: true,
});

module.exports = mongoose.model('User', userSchema);

