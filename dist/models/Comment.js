"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _mongoose = require("mongoose");

var ObjectId = _mongoose.Schema.ObjectId;
var commentSchema = new _mongoose.Schema({
  email: {
    type: String,
    required: true
  },
  name: {
    type: String,
    required: true
  },
  comment: {
    type: String,
    required: true
  },
  gravatar: {
    type: String
  },
  post_id: {
    type: ObjectId,
    required: true
  }
}, {
  timestamps: true
});

var _default = (0, _mongoose.model)('comments', commentSchema);

exports["default"] = _default;