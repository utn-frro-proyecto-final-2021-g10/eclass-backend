const mongoose = require('mongoose'); // Mongoose
const Schema = mongoose.Schema;

const fieldSchema = new Schema({
  type: {
    type: String, 
    required: 'type is required'
  },
  question: {
    type: String,
    required: 'question is required'
  },
  correctAnswer: {
    type: String
  },
  value: {
    type: Number
  }
}, {
  timestamps: true,
});

module.exports = mongoose.model('Field', fieldSchema);
