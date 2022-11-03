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
// @access private
const getAllUsers = asyncHandler(async = () => {})

module.exports = router;