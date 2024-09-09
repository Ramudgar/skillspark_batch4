const express = require("express");
const { createUser } = require("../controllers/userController");
// const userController= require('../controllers/userController');
const router = express.Router();

// router to create a new user
router.post("/create", createUser);

// router.post( '/create',userController.createUser);
