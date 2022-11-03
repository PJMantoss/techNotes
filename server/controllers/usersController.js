const User = require("../models/User");
const Note = require("../models/Note");
const asyncHandler = require("express-async-handler");
const bcrypt = require("bcrypt"); //For hashing passwords in the database

// @desc - GET All users
// @route GET /users 
// @access Private
const getAllUsers = asyncHandler(async = (req, res) => {});

// @desc - Create new users
// @route POST /users 
// @access Private
const createNewUsers = asyncHandler(async = (req, res) => {});

// @desc - Update user
// @route PATCH /users 
// @access Private
const updateUser = asyncHandler(async = (req, res) => {});

// @desc - Delete user
// @route DELETE /users 
// @access Private
const deleteUser = asyncHandler(async = (req, res) => {});