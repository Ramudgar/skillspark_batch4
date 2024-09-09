// controller for creating a new user

const UserModel = require("../models/userModel");
const createUser = async (req, res) => {
  try {
    const data = req.body;
    console.log(data);
    const user = new UserModel({
      userName: data.userName,
      email: data.email,
      password: data.password,
      userRole: data.userRole,
    });

    const userResponse = await user.save();

    return res.status(201).json({ msg: "User created", userResponse });
  } catch (err) {
    console.log(err);
    return res.status(500).json({ message: "Server Error" });
  }
};

module.exports = { createUser };
