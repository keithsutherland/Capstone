import mongoose from "mongoose";

const notesSchema = new mongoose.Schema({
  noteCategory: {
    type: String,
    validate: /^[A-Za-z0-9 ]*$/
  },

  character: {
    type: String,
    required: true,
    enum: ["akira", "jean", "jacky", "paichan", "lion"]
  },

  noteBody: {
    type: String,
    required: true,
    validate: /^[A-Za-z0-9 ]*$/
  }
});

const Notes = mongoose.model("Notes", notesSchema);

export default Notes;
