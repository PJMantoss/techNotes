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
const createNewNote = asyncHandler(async (req, res) => {
    const { user, title, text } = req.body;

    // confirm data
    if(!user || !title || !text){
        return res.status(400).json({ message: "All fields are required" });
    }

    // Check for duplicates
    const duplicate = await Note.findOne({ title }).lean().exec();

    if(duplicate){
        return res.status(409).json({ message: "Duplicate Note title found" });
    }

    const noteObj = {
        user,
        title,
        text
    };

    // Create and store new note
    const note = await Note.create(noteObj);

    if(note){
        return res.status(201).json({ message: "New Note Created" });
    } else {
        return res.status(400).json({ message: "Invalid Note data received" })
    }
});

// @desc - Update note
// @route PATCH /note
// @access Private
const updateNote = asyncHandler(async (req, res) => {
    const { id, user, title, text, completed } = req.body;

    // Confirm data
    if(!id || !user || !title || !text || typeof completed !== "boolean"){
        return res.status(400).json({ message: "All fields are required" });
    };

    // Check to see if note exist to update 
    const note = await Note.findById(id).exec();

    if(!note){
        return res.status(400).json({ message: "Note Not found" });
    };

    // Check for duplicate title
    const duplicate = await Note.findOne({ title }).lean().exec();
    // Allow Updates to the Original note
    if(duplicate && duplicate?._id.toString() !== id){
        return res.status(409).json({ message: "Duplicate Note title" });
    };

    note.user = user
    note.title = title
    note.text = text
    note.completed = completed

    const updatedNote = await note.save();

    res.json({ message: `${updatedNote.title} updated` });

});

// @desc - Delete note
// @route DELETE /notes 
// @access Private
const deleteNote = asyncHandler(async (req, res) => {
    const {id} = req.body;

    if(!id){
        return res.status(400).json({ message: "Note ID Required!" })
    };
});

module.exports = {
    getAllNotes,
    createNewNote,
    updateNote,
    deleteNote
};