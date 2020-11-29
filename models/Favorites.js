const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const FavoriteSchema = new Schema({
  'age': String,
  'type': String,
  'title': String,
  'imbedLind': String,
  'wideth': String,
  'height': String,
  'scrolling': String
});

const Favorite = mongoose.model('Favorite', FavoriteSchema);

module.exports = Favorite;