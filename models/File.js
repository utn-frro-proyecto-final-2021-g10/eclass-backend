const mongoose = require('mongoose'); // Mongoose
const Schema = mongoose.Schema;

const fileSchema = new Schema({
  link: {
    type: String,
    required: 'Link is required',
  },
  owner: {
    type: userSchema,
    required: 'Owner is required',
  }
}, {
  timestamps: true,
});

module.exports = mongoose.model('File', fileSchema);
