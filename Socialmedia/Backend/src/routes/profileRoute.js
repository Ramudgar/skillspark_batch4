const express = require("express");
const { updateProfile, getProfile, deleteProfile } = require("../controllers/profileController");
const authMiddleware = require("../middlewares/authMiddleware");
const { profileImage } = require("../middlewares/uploadMiddleware");
const router = express.Router();

/**
 * @description To update user profile
 * @api /api/profile/update
 * @access private
 * @type put
 * @return response
 */
router.put("/update", authMiddleware,profileImage.single('profilePic'), updateProfile);

 

module.exports = router;