const express = require("express");
const { createCategory } = require("../controllers/categoryController");
const authMiddleware = require("../middlewares/authMiddleware");
const { authorizeRole } = require("../middlewares/authorizationMiddleware");

const router = express.Router();
/**
 * @description: to create a new category
 * @route /api/category/create
 * @access private
 * @type post
 * @returns response
 */

router.post("/create", authMiddleware, authorizeRole("admin"), createCategory);

module.exports = router;
