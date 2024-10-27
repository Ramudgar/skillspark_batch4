const express = require("express");
const {
  createPost,
  getAllPosts,
  getPostById,
} = require("../controllers/postController");
const authMiddleware = require("../middlewares/authMiddleware");
const { postImageUpload } = require("../middlewares/uploadMiddleware");
const router = express.Router();

/**
 * @route   POST /api/posts/create
 * @desc    Create a post
 * @access  Private
 * @returns response of post creation with status code and post data
 */

router.post(
  "/create",
  authMiddleware,
  postImageUpload.single("postImage"),
  createPost
);

/**
 * @route   GET /api/posts/all
 * @desc    Get all posts
 * @access  Private
 * @returns response of all posts with status code and post data
 */
router.post("/all", authMiddleware, getAllPosts);

/**
 * @route   GET /api/posts/:id
 * @desc    Get a post by id
 * @access  Private
 * @returns response of post with status code and post data
 */
router.get("/getbypostid/:id", authMiddleware, getPostById);

module.exports = router;
