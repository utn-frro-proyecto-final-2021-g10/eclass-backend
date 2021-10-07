const mongoose = require('mongoose'); // Mongoose
const Schema = mongoose.Schema;

const userSchema = require('./User').schema;

const replySchema = new Schema({
  user: {
    type: userSchema,
    required: 'user is required',
  },
  message: {
    type: String,
    required: 'message is required',
  }
}, {
  timestamps: true,
});

module.exports = mongoose.model('Reply', replySchema);
