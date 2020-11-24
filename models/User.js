const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
  email: {
    type: String,
    unique: true,
    required: true
  },
  username: {
    type: String,
    unique: true,
    require: true
  },
  password: {
    type: String,
    require: true
  },
  favorites: [
    {
      type: Schema.Types.ObjectId,
      ref: 'Favorite'
    }
  ]
});

const User = mongoose.model('User', UserSchema);

module.exports = User;