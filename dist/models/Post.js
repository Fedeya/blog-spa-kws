"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _mongoose = require("mongoose");

var postSchema = new _mongoose.Schema({
  title: {
    type: String,
    required: true,
    max: 100
  },
  content: {
    type: String,
    required: true,
    min: 64
  },
  category: {
    type: String
  },
  imageUrl: {
    type: String
  },
  likes: {
    type: Number,
    "default": 0
  },
  comments: {
    type: Number,
    "default": 0
  }
}, {
  timestamps: true
});

var _default = (0, _mongoose.model)('Post', postSchema);

exports["default"] = _default;