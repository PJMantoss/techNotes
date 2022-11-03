const express = require("express");
const router = express.Router();
const asyncHandler = require("express-async-handler");
const bcrypt = require("bcrypt");

router.route("/")
    .get()
    .post()
    .patch()
    .delete();

// @desc - GET All users
// @route GET /users 
// @access Private
const getAllUsers = asyncHandler(async = (req, res) => {});

// @desc - Create new users
// @route POST /users 
// @access Private
const createNewUsers = asyncHandler(async = (req, res) => {});

module.exports = router;