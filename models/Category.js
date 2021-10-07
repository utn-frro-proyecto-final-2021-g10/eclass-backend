const mongoose = require('mongoose'); // Mongoose
const Schema = mongoose.Schema;

const fileSchema = require('./File').schema;

const categorySchema = new Schema({
  name: {
    type: String, 
    required: 'Name is required',
  },
  files: {
    type: [fileSchema]
  }
}, {
  timestamps: true,
});

module.exports = mongoose.model('Category', categorySchema);
