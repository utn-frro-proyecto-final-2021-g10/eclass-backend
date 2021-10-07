const mongoose = require('mongoose'); // Mongoose
const Schema = mongoose.Schema;

const formSchema = require('./Form').schema;
const answerSchema = require('./Answer').schema;

const taskSchema = new Schema({
  dateStart: {
    type: Date
  },
  dateEnd: {
    type: Date,
    required: "dateEnd is required"
  },
  name: {
    type: String
  },
  description: {
    type: String,
  },
  classwork: {
    type: [categorySchema],
  },
  form: {
    type: formSchema,
  },
  answers: {
    type: [answerSchema],
  },

}, {
  timestamps: true,
});

module.exports = mongoose.model('Task', taskSchema);
