const mongoose = require('mongoose'); // Mongoose
const Schema = mongoose.Schema;

const userSchema = require('./User').schema;
const fullFormSchema = require('./FullForm').schema;
const forumSchema = require('./Forum').schema;
const taskSchema = require('./Task').schema;

const answerSchema = new Schema({
  user: {
    type: userSchema, 
    required: 'user is required',
  },
  form: {
    type: fullFormSchema,
    required: 'form is required',
  },
  dateSubmitted: {
    type: Date
  },
  score: {
    type: Number
  }
}, {
  timestamps: true,
});

module.exports = mongoose.model('Answer', answerSchema);
