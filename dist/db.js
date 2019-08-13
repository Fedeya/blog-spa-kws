"use strict";

var _mongoose = require("mongoose");

(0, _mongoose.connect)(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useFindAndModify: false
}).then(function (db) {
  return console.log('database is connected');
})["catch"](function (err) {
  return console.error(err);
});