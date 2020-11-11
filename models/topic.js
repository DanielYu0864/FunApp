const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const topicSchema = new Schema({
  date_user_age: {
    type: String
  },
  data_name: {
    type: String
  },
  data_topic: {
    type: String
  },
  date_type: {
    type: String
  },
  date_info: {
    type: Object
  }
})

const Topic = mongoose.model('Topic', topicSchema);

module.exports = Topic;