const User = require("../models/User");
const Note = require("../models/Note");
const asyncHandler = require("express-async-handler");
const bcrypt = require("bcrypt"); //For hashing passwords in the database

// @desc - GET All users
// @route GET /users 
// @access Private
const getAllUsers = asyncHandler(async (req, res) => {
    const users = await User.find().select("-password").lean();
    if(!users){
        return res.status(400).json({ message: "Users Not Found!" })
    }
    res.json(users);
});

// @desc - Create new users
// @route POST /users 
// @access Private
const createNewUser = asyncHandler(async (req, res) => {
    const { username, password, roles } = req.body;

    // Confirm Data
    if(!username || !password || !Array.isArray(roles) || !roles.length){
        return res.status(400).json({ message: "All fields are required" });
    };

    // Check for Duplicates
    const duplicate = await User.findOne({ username }).lean().exec();

    if(duplicate){
        return res.status(409).json({ message: "Duplicate username" });
    }

    // Hash Password
    const hashedPassword = await bcrypt.hash(password, 10); // salt rounds
    
    const userObj = {
        username,
        "password": hashedPassword,
        roles
    };

    // Create and store new user
    const user = await User.create(userObj);

    if(user){ // user created
        res.status(201).json({ message: `New user ${username} created` })
    }else{
        res.status(400).json({ message: "Invalid user data received" });
    }
 });

// @desc - Update user
// @route PATCH /users 
// @access Private
const updateUser = asyncHandler(async (req, res) => {
    const {id, username, password, active, roles} = req.body;

    // Confirm data
    if(!id || !username || !Array.isArray(roles) || !roles.length || typeof active !== "boolean"){
        return res.status(400).json({ message: "All fields are required" });
    };

    const user = await User.findById(id).exec();

    if(!user){
        return res.status(400).json({ message: "User Not found" });
    }

});

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