const mongoose = require('mongoose'); // Mongoose
const Schema = mongoose.Schema;

const userSchema = require('./Message').schema;

const forumSchema = new Schema({
  messages: {
    type: [messageSchema], 
  }

}, {
  timestamps: true,
});

module.exports = mongoose.model('Forum', forumSchema);
