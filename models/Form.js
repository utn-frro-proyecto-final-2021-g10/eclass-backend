const mongoose = require('mongoose'); // Mongoose
const Schema = mongoose.Schema;

const fieldSchema = require('./Field').schema;

const formSchema = new Schema({
  fields: {
    type: [fieldSchema],
  }
}, {
  timestamps: true,
});

module.exports = mongoose.model('Form', formSchema);
