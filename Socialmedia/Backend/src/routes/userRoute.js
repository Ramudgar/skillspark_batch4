const express = require("express");
const router = express.Router();

const { userRegister,userLogin} = require("../controllers/userController");
// const userController= require('../controllers/userController');



// router to create a new user
router.post("/create", userRegister);

// router.post( '/create',userController.createUser);

router.post('/login',userLogin);


module.exports = router;