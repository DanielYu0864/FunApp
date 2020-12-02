const express = require("express");
const path = require("path");
const mongoose = require('mongoose');

const PORT = process.env.PORT || 3001;
const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

// mongodb connection
mongoose.connect(
  process.env.MONGODB_URI || 'mongodb://localhost/project3',
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false
  }
);
const connection = mongoose.connection;
connection.once('open', function() {
  console.log('MongoDE connection successed');
});
// routes
require('./router/apiRoute')(app);
require('./router/loginRoute')(app);
// Send every request to the React app
// Define any API routes before this runs
// app.get("*", function(req, res) {
//   res.sendFile(path.join(__dirname, "./client/build/index.html"));
// });

app.listen(PORT, function() {
  console.log(`🌎 ==> API server now on port ${PORT}!`);
});
