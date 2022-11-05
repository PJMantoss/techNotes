const User = require("../models/User");
const Note = require("../models/Note");
const User = require("../models/User");
const asyncHandler = require("express-async-handler");

// @desc - GET All notes
// @route GET /notes 
// @access Private
const getAllNotes = asyncHandler(async (req, res) => {
    const notes = await Note.find().select().exec();
});

// @desc - Create new notes
// @route POST /notes 
// @access Private
const createNewNote = asyncHandler(async (req, res) => {});

// @desc - Update note
// @route PATCH /note
// @access Private
const updateNote = asyncHandler(async (req, res) => {});

// @desc - Delete note
// @route DELETE /notes 
// @access Private
const deleteNote = asyncHandler(async (req, res) => {});

module.exports = {
    getAllNotes,
    createNewNote,
    updateNote,
    deleteNote
};