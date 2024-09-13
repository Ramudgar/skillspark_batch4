const PostModel = require("../models/postModel");
const UserModel = require("../models/userModel");

// @desc   to create a post

const createPost = async (req, res) => {
  try {
    
    const data = req.body;
    const newPost = new PostModel({
      user: req.user.id,
      description: data.description,
    });
    const post = await newPost.save();
    return res.status(201).json({ msg: "Post created", post });
  } catch (err) {
    return res.status(500).json({ msg: err.message });
  }
};

module.exports = { createPost };
