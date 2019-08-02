const postCtrl = {};

// importing the post model
import Post from "../models/Post";

postCtrl.getAllPosts = async (req, res) => {
  const limit = req.query.page * 5;
  const skip = (req.query.page - 1) * 5;

  const posts = await Post.find()
    .limit(limit)
    .skip(skip)
    .sort({ createdAt: "desc" });

  res.json(posts);
};

postCtrl.getOnePost = async (req, res) => {
  const post = await Post.findOne({ _id: req.params.id });
  res.json(post);
};

postCtrl.createPost = async (req, res) => {
  const { title, content } = req.body;
  const newPost = new Post({ title, content });

  await newPost.save();
  res.json(newPost);
};

postCtrl.editPost = async (req, res) => {
  const { title, content } = req.body;
  const postUpdated = await Post.findByIdAndUpdate(
    req.params.id,
    { title, content },
    { new: true }
  );
  res.json(postUpdated);
};

postCtrl.deletePost = async (req, res) => {
  await Post.findByIdAndDelete(req.params.id);
  res.json({ message: "El Post Fue Eliminado." });
};

export default postCtrl;
