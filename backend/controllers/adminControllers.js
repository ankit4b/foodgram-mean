const asyncHandler = require("express-async-handler");
const User = require("../models/UserModel");
const generateToken = require("../config/generateToken");

const registerAdmin = asyncHandler(async (req, res) => {
  console.log("Inside Admin Registration", req.body);
  const { name, email, password } = req.body;

  if (!name || !email || !password) {
    res.status(400);
    throw new Error("Please Enter all the fields");
  }

  // Chech user is previously registered or not
  const userExist = await User.findOne({ email });

  console.log("userExist: ", userExist);

  if (userExist) {
    res.status(400);
    throw new Error("User Already Exists");
  }

  const user = await User.create({
    name,
    email,
    isAdmin: true,
    password,
  });

  console.log("user : ", user);

  if (user) {
    res.status(201).json({
      _id: user._id,
      name: user.name,
      email: user.email,
      isAdmin: user.isAdmin,
      token: generateToken(user._id),
    });
  } else {
    res.status(400);
    throw new Error("Failed to Create the User");
  }
});

const authAdmin = asyncHandler(async (req, res) => {
  const { email, password } = req.body;

  const user = await User.findOne({ email });
  console.log(user);
  if (user && user.isAdmin && (await user.matchPassword(password))) {
    res.json({
      _id: user._id,
      name: user.name,
      email: user.email,
      isAdmin: user.isAdmin,
      token: generateToken(user._id),
    });
  } else {
    res.status(401);
    throw new Error("Invalid Email or Password");
  }
});

module.exports = { registerAdmin, authAdmin };
