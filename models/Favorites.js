const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const FavoriteSchema = new Schema({
  title : String,
  url : String
});

const Favorite = mongoose.model('Favorite', FavoriteSchema);

module.exports = Favorite;