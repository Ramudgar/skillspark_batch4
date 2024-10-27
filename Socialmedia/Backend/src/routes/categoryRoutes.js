const express = require("express");
const { createCategory, updateCategory, getAllCategories, deleteCategory } = require("../controllers/categoryController");
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

/**
 * @description: to update a category by id
 * @route /api/category/update/:id
 * @access private
 * @type put
 * @returns response
 */

router.put("/update/:id", authMiddleware, authorizeRole("admin"), updateCategory);

/**
 * @description: to get all categories
 * @route /api/category/all
 * @access public
 * @type get
 * @returns response
 */

router.get("/all", getAllCategories);

/**
 * @description: to delete a category by id
 * @route /api/category/delete/:id
 * @access private
 * @type delete
 * @returns response
 * @params id
 */

router.delete("/delete/:id", authMiddleware, authorizeRole("admin"), deleteCategory);

module.exports = router;
