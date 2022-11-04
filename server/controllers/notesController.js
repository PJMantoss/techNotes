const User = require("../models/User");
const Note = require("../models/Note");
const asyncHandler = require("express-async-handler");

// @desc - GET All notes
// @route GET /notes 
// @access Private
const getAllNotes = asyncHandler(async (req, res) => {});

module.exports = {
    getAllNotes,
    createNewNote,
    updateNote,
    deleteNote
};