const User = require("../models/User");
const Note = require("../models/Note");
const asyncHandler = require("express-async-handler");
const bcrypt = require("bcrypt"); //For hashing passwords in the database

// @desc - GET All users
// @route GET /users 
// @access Private
const getAllUsers = asyncHandler(async (req, res) => {
    // Get all users from Database (MongoDB)
    const users = await User.find().select("-password").lean();
    // if no user is foundreturn a message
    if(!users?.length){
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
    const {id, username, roles, active, password} = req.body

    // Confirm data
    if(!id || !username || !Array.isArray(roles) || !roles.length || typeof active !== "boolean"){
        return res.status(400).json({ message: "All fields, except password, are required" });
    };
    // Check to see if user exist to update 
    const user = await User.findById(id).exec();

    if(!user){
        return res.status(400).json({ message: "User Not found" });
    };

    // Check for duplicate
    const duplicate = await User.findOne({ username }).lean().exec();
    // Allow Updates to the Original user
    if(duplicate && duplicate?._id.toString() !== id){
        return res.status(409).json({ message: "Duplicate username" });
    };

    user.username = username
    user.roles = roles
    user.active = active

    if(password){
        // Hash password
        user.password = await bcrypt.hash(password, 10) // salt rounds
    };

    const updatedUser = await user.save();

    res.json({ message: `${updatedUser.username} updated` });

});

// @desc - Delete user
// @route DELETE /users 
// @access Private
const deleteUser = asyncHandler(async (req, res) => {
    const {id} = req.body;

    if(!id){
        return res.status(400).json({ message: "User ID Required!" })
    };

    const note = await Note.findOne({ user: id }).lean().exec();
    if(notes){
        return res.status(400).json({ message: "User has assigned Notes" })
    };

    const user = await User.findById(id).exec();

    if(!user){
        return res.status(400).json({ message: "User Not found!" });
    }

    const result = await user.deleteOne();

    const reply = `Username ${result.username} with ID ${result._id} deleted`;

    res.json(reply)
});

module.exports = {
    getAllUsers,
    createNewUser,
    updateUser,
    deleteUser
};