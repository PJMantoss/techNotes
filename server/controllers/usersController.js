const User = require("../models/User");
const Note = require("../models/Note");
const asyncHandler = require("express-async-handler");
const bcrypt = require("bcrypt"); //For hashing passwords in the database

// @desc - GET All users
// @route GET /users 
// @access Private
const getAllUsers = asyncHandler(async = (req, res) => {
    const users = await User.find().select("-password").lean();
    if(!users){
        return res.status(400).json({ message: "User Not Found!" })
    }
});

// @desc - Create new users
// @route POST /users 
// @access Private
const createNewUser = asyncHandler(async = (req, res) => {});

// @desc - Update user
// @route PATCH /users 
// @access Private
const updateUser = asyncHandler(async = (req, res) => {});

// @desc - Delete user
// @route DELETE /users 
// @access Private
const deleteUser = asyncHandler(async = (req, res) => {});

module.exports = {
    getAllUsers,
    createNewUser,
    updateUser,
    deleteUser
};