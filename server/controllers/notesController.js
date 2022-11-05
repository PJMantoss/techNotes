const User = require("../models/User");
const Note = require("../models/Note");
const User = require("../models/User");
const asyncHandler = require("express-async-handler");

// @desc - GET All notes
// @route GET /notes 
// @access Private
const getAllNotes = asyncHandler(async (req, res) => {
    // Get all notes from Database (MongoDB)
    const notes = await Note.find().select().lean();
    // if no note is found return a message
    if(!notes?.length){
        return res.status(400).json({ message: "Notes not found!" })
    }

    // Add username to each note before sending the response
    const notesWithUSer = await Promise.all(notes.map(async (note) => {
        const user = await User.findById(note.user).lean().exec();
        return { ...note, username: user.username }
    }));

    res.json(notesWithUSer);
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