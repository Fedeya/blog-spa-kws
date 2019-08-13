"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = _interopRequireDefault(require("express"));

var _dotenv = _interopRequireDefault(require("dotenv"));

var _cors = _interopRequireDefault(require("cors"));

var _posts = _interopRequireDefault(require("./routes/posts"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

// requirements
var app = (0, _express["default"])(); // importing routes

// setting up the enviorement variables
_dotenv["default"].config(); // settings


app.set('port', process.env.PORT || 4000); // middlewares

app.use((0, _cors["default"])());
app.use(_express["default"].json());
app.use(_express["default"].urlencoded({
  extended: false
})); // routes

app.use('/posts', _posts["default"]);
var _default = app;
exports["default"] = _default;