const mongoose = require("mongoose");

const AutoIncrement = require("mongoose-sequence")(mongoose);

const noteSchema = new mongoose.Schema(
    {
        user: {
            type: mongoose.Schema.Types.ObjectId,
            required: true,
            ref: "User"
        },

        title: {
            type: String,
            required: true
        },

        text: {
            type: String,
            required: true
        },

        completed: {
            type: Boolean,
            default: false
        },
    },
    {
        timestamp: true
    }
);

noteSchema.plugin(AutoIncrement, {})

module.exports = mongoose.model("Note", noteSchema);