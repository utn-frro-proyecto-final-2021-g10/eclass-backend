const mongoose = require('mongoose'); // Mongoose
const Schema = mongoose.Schema;

const userSchema = require('./User').schema;
const replySchema = require('./Reply').schema;

const messageSchema = new Schema({
  user: {
    type: userSchema, 
    required: 'user is required',
  },
  message: {
    type: String,
    required: 'message is required',
  },
  replies: {
    type: [replySchema],
  }

}, {
  timestamps: true,
});

module.exports = mongoose.model('Message', messageSchema);
