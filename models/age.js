const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ageSchema = new Schema({
  data_user_age: {
    type: String
  },
  data_name: {
    type: String
  },
  data_type: {
    type: String
  },
  data_info: {
    type: Array
  }
})

const Age = mongoose.model('Age', ageSchema);

module.exports = Age;