const Profile = require("../models/profileModel");

// @desc   update user profile

const updateProfile = async (req, res) => {
  try {
    const { bio, fullName, age } = req.body;
    const userId = req.user.id;

    // const profile = await Profile.findOne({ user: userId });
    // if (!profile) {
    //   return res.status(400).json({ msg: "Profile not found" });
    // }

    // const profileFields = {
    //   user: userId,
    //   //   bio: bio || profile.bio,
    //   //   fullName: fullName || profile.fullName,
    //   //   age: age || profile.age,
    //   fullName: fullName ?? profile.fullName,
    //   age: age ?? profile.age,
    //   bio: bio ? bio : profile.bio,
    // };

    // const updatedProfile = await Profile.updateOne(
    //   { user: userId },
    //   profileFields
    // );

    const updatedProfile = await Profile.findOneAndUpdate(
      { user: userId },
      {
        bio: bio ?? Profile.bio,
        fullName: fullName ?? Profile.fullName,
        age: age ?? Profile.age,
      },
      { new: true }
    );

    if (!updatedProfile) {
      return res.status(400).json({ msg: "Profile not found" });
    }

    return res
      .status(200)
      .json({ msg: "Profile updated successfully", updatedProfile });
  } catch (err) {
    console.error(err);
    res.status(500).json({ msg: "error updating profile", error: err.message });
  }
};

module.exports = { updateProfile };
