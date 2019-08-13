"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _md = _interopRequireDefault(require("md5"));

var _Post = _interopRequireDefault(require("../models/Post"));

var _Comment = _interopRequireDefault(require("../models/Comment"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var postCtrl = {}; // importing md5

postCtrl.getAllPosts =
/*#__PURE__*/
function () {
  var _ref = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee(req, res) {
    var limit, skip, posts;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            limit = req.query.page * 5;
            skip = (req.query.page - 1) * 5;
            _context.next = 4;
            return _Post["default"].find().limit(limit).skip(skip).sort({
              createdAt: "desc"
            });

          case 4:
            posts = _context.sent;
            res.json(posts);

          case 6:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function (_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();

postCtrl.getOnePost =
/*#__PURE__*/
function () {
  var _ref2 = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee2(req, res) {
    var post;
    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.next = 2;
            return _Post["default"].findOne({
              _id: req.params.id
            });

          case 2:
            post = _context2.sent;
            res.json(post);

          case 4:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));

  return function (_x3, _x4) {
    return _ref2.apply(this, arguments);
  };
}();

postCtrl.createPost =
/*#__PURE__*/
function () {
  var _ref3 = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee3(req, res) {
    var _req$body, title, content, category, imageUrl, newPost;

    return regeneratorRuntime.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            _req$body = req.body, title = _req$body.title, content = _req$body.content, category = _req$body.category, imageUrl = _req$body.imageUrl;
            newPost = new _Post["default"]({
              title: title,
              content: content,
              imageUrl: imageUrl,
              category: category
            });
            _context3.next = 4;
            return newPost.save();

          case 4:
            res.json(newPost);

          case 5:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3);
  }));

  return function (_x5, _x6) {
    return _ref3.apply(this, arguments);
  };
}();

postCtrl.editPost =
/*#__PURE__*/
function () {
  var _ref4 = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee4(req, res) {
    var _req$body2, title, content, category, imageUrl, postUpdated;

    return regeneratorRuntime.wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            _req$body2 = req.body, title = _req$body2.title, content = _req$body2.content, category = _req$body2.category, imageUrl = _req$body2.imageUrl;
            _context4.next = 3;
            return _Post["default"].findByIdAndUpdate(req.params.id, {
              title: title,
              content: content,
              category: category,
              imageUrl: imageUrl
            }, {
              "new": true
            });

          case 3:
            postUpdated = _context4.sent;
            res.json(postUpdated);

          case 5:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4);
  }));

  return function (_x7, _x8) {
    return _ref4.apply(this, arguments);
  };
}();

postCtrl.addLike =
/*#__PURE__*/
function () {
  var _ref5 = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee5(req, res) {
    var post;
    return regeneratorRuntime.wrap(function _callee5$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            _context5.next = 2;
            return _Post["default"].findOne({
              _id: req.params.id
            });

          case 2:
            post = _context5.sent;

            if (!post) {
              _context5.next = 10;
              break;
            }

            post.likes = post.likes + 1;
            _context5.next = 7;
            return post.save();

          case 7:
            res.json({
              likes: post.likes
            });
            _context5.next = 11;
            break;

          case 10:
            res.status(500).json({
              error: "internal error"
            });

          case 11:
          case "end":
            return _context5.stop();
        }
      }
    }, _callee5);
  }));

  return function (_x9, _x10) {
    return _ref5.apply(this, arguments);
  };
}();

postCtrl.getComments =
/*#__PURE__*/
function () {
  var _ref6 = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee6(req, res) {
    var comments;
    return regeneratorRuntime.wrap(function _callee6$(_context6) {
      while (1) {
        switch (_context6.prev = _context6.next) {
          case 0:
            _context6.next = 2;
            return _Comment["default"].find({
              post_id: req.params.id
            });

          case 2:
            comments = _context6.sent;
            res.json(comments);

          case 4:
          case "end":
            return _context6.stop();
        }
      }
    }, _callee6);
  }));

  return function (_x11, _x12) {
    return _ref6.apply(this, arguments);
  };
}();

postCtrl.postComment =
/*#__PURE__*/
function () {
  var _ref7 = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee7(req, res) {
    var post, _req$body3, email, name, comment, newComment;

    return regeneratorRuntime.wrap(function _callee7$(_context7) {
      while (1) {
        switch (_context7.prev = _context7.next) {
          case 0:
            _context7.next = 2;
            return _Post["default"].findOne({
              _id: req.params.id
            });

          case 2:
            post = _context7.sent;

            if (!post) {
              _context7.next = 12;
              break;
            }

            _req$body3 = req.body, email = _req$body3.email, name = _req$body3.name, comment = _req$body3.comment;
            newComment = new _Comment["default"]({
              email: email,
              name: name,
              comment: comment,
              post_id: post._id,
              gravatar: (0, _md["default"])(email)
            });
            _context7.next = 8;
            return newComment.save();

          case 8:
            post.comments = post.comments + 1;
            _context7.next = 11;
            return post.save();

          case 11:
            res.json(newComment);

          case 12:
          case "end":
            return _context7.stop();
        }
      }
    }, _callee7);
  }));

  return function (_x13, _x14) {
    return _ref7.apply(this, arguments);
  };
}();

postCtrl.deletePost =
/*#__PURE__*/
function () {
  var _ref8 = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee8(req, res) {
    return regeneratorRuntime.wrap(function _callee8$(_context8) {
      while (1) {
        switch (_context8.prev = _context8.next) {
          case 0:
            _context8.next = 2;
            return _Post["default"].findByIdAndDelete(req.params.id);

          case 2:
            _context8.next = 4;
            return _Comment["default"].deleteMany({
              post_id: req.params.id
            });

          case 4:
            res.json({
              message: "El Post Fue Eliminado."
            });

          case 5:
          case "end":
            return _context8.stop();
        }
      }
    }, _callee8);
  }));

  return function (_x15, _x16) {
    return _ref8.apply(this, arguments);
  };
}();

postCtrl.getPopularPosts =
/*#__PURE__*/
function () {
  var _ref9 = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee9(req, res) {
    var posts;
    return regeneratorRuntime.wrap(function _callee9$(_context9) {
      while (1) {
        switch (_context9.prev = _context9.next) {
          case 0:
            _context9.next = 2;
            return _Post["default"].find().limit(10).sort({
              likes: -1
            });

          case 2:
            posts = _context9.sent;
            res.json(posts);

          case 4:
          case "end":
            return _context9.stop();
        }
      }
    }, _callee9);
  }));

  return function (_x17, _x18) {
    return _ref9.apply(this, arguments);
  };
}();

var _default = postCtrl;
exports["default"] = _default;