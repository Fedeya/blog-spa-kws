"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = require("express");

var _postCtrl = _interopRequireDefault(require("../controllers/postCtrl"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var router = (0, _express.Router)();
// sending all posts
router.get('/getAll', _postCtrl["default"].getAllPosts); // sending one post

router.get('/getOne/:id', _postCtrl["default"].getOnePost); // creating a post

router.post('/add', _postCtrl["default"].createPost); // deleting a post

router["delete"]('/delete/:id', _postCtrl["default"].deletePost); // editing a post

router.put('/edit/:id', _postCtrl["default"].editPost); // liking a post

router.post('/like/:id', _postCtrl["default"].addLike); // get post comments

router.get('/getComments/:id', _postCtrl["default"].getComments); // comment a post

router.post('/comment/:id', _postCtrl["default"].postComment); // most popular posts

router.get('/popular', _postCtrl["default"].getPopularPosts);
var _default = router;
exports["default"] = _default;