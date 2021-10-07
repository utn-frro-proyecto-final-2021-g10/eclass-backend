const mongoose = require('mongoose'); // Mongoose
const Schema = mongoose.Schema;

const userSchema = require('./User').schema;
const categorySchema = require('./Category').schema;
const forumSchema = require('./Forum').schema;
const taskSchema = require('./Task').schema;

const courseSchema = new Schema({
  name: {
    type: String, 
    required: 'Type is required',
  },
  owner: {
    type: userSchema,
    required: 'Owner is required',
  },
  members: {
    type: [userSchema],
  },
  classwork: {
    type: [categorySchema],
  },
  forum: {
    type: forumSchema,
  },
  tasks: {
    type: [taskSchema],
  },

}, {
  timestamps: true,
});

module.exports = mongoose.model('Course', courseSchema);
