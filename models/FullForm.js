const mongoose = require('mongoose'); // Mongoose
const Schema = mongoose.Schema;

const fullFieldSchema = require('./FullField').schema;

const fullFormSchema = new Schema({
  fields: {
    type: [fullFieldSchema],
  },

}, {
  timestamps: true,
});

module.exports = mongoose.model('FullForm', fullFormSchema);
