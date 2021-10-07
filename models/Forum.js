const mongoose = require('mongoose'); // Mongoose
const Schema = mongoose.Schema;

const messageSchema = require('./Message').schema;

const forumSchema = new Schema({
  messages: {
    type: [messageSchema], 
  }
}, {
  timestamps: true,
});

module.exports = mongoose.model('Forum', forumSchema);
