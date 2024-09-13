const express = require('express');
const { createPost } = require('../controllers/postController');
const authMiddleware = require('../middlewares/authMiddleware');
const router = express.Router();

/**
 * @route   POST /api/posts/create
 * @desc    Create a post
 * @access  Private
 * @returns response of post creation with status code and post data
 */

router.post('/create',authMiddleware, createPost);

module.exports = router;