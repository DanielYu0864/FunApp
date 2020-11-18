const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
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