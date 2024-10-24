const PostModel = require("../models/postModel");
const UserModel = require("../models/userModel");

// @desc   to create a post

const createPost = async (req, res) => {
  try {
    const data = req.body;
    const newPost = new PostModel({
      user: req.user.id,
      description: data.description,
      category: data.category,
    });
    const post = await newPost.save();
    return res.status(201).json({ msg: "Post created", post });
  } catch (err) {
    return res.status(500).json({ msg: err.message });
  }
};

// @desc   to get all posts

const getAllPosts = async (req, res) => {
  try {
    const posts = await PostModel.find({});
    return res.status(200).json({ msg: "All posts", posts });
  } catch (err) {
    return res.status(500).json({ msg: err.message });
  }
};

// @desc   to get a post by post id

const getPostById = async (req, res) => {
  try {
    const postId = req.params.id;
    const post = await PostModel.findById(postId);
    if (!post) {
      return res.status(404).json({ msg: "Post not found" });
    }
    return res.status(200).json({ msg: "Post found", post });
  } catch (err) {
    return res.status(500).json({ msg: err.message });
  }
};

// @desc to get all posts of a user

const getPostsByUser = async (req, res) => {
  try {
    const userId = req.user.id;
    const user = await UserModel.findById(userId);
    if (!user) {
      return res.status(404).json({ msg: "User not found" });
    }
    const posts = await PostModel.find({ user: userId });
    return res.status(200).json({ msg: "Posts found", posts });
  } catch (err) {
    return res.status(500).json({ msg: err.message });
  }
};

// @desc to update a post by post id and validate user if he is the owner of the post or not to update the post

const updatePost = async (req, res) => {
  try {
    const postId = req.params.id;
    const data = req.body;
    const post = await PostModel.findById(postId);
    if (!post) {
      return res.status(404).json({ msg: "Post not found" });
    }
    if (post.user.toString() !== req.user.id) {
      return res
        .status(401)
        .json({ msg: "User not authorized to update the post" });
    }
    const updatedPost = await PostModel.findByIdAndUpdate(postId, data, {
      new: true,
    });
    return res.status(200).json({ msg: "Post updated", updatedPost });
  } catch (err) {
    return res.status(500).json({ msg: err.message });
  }
};

module.exports = { createPost, getAllPosts, getPostById };
