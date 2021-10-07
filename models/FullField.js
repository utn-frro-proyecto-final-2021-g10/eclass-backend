const mongoose = require('mongoose'); // Mongoose
const Schema = mongoose.Schema;

const fieldSchema = require('./Field').schema;

const fullFieldSchema = new Schema({
  ...fieldSchema.obj,
  studentAnswer: {
    type: String
  },
  score: {
    type: Number
  }
  
}, {
  timestamps: true,
});

module.exports = mongoose.model('FullField', fullFieldSchema);
