const mongoose = require('mongoose'); // Mongoose
const Schema = mongoose.Schema;

const userSchema = require('./User').schema;

const courseSchema = new Schema({
  name: {
    type: String, 
    required: 'Type is required',
  },
  owner: {
    type: userSchema,
    required: 'Owner is required',
  }
}, {
  timestamps: true,
});

module.exports = mongoose.model('Course', courseSchema);
