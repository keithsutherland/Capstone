import mongoose from "mongoose";

const notesSchema = new mongoose.Schema({
  noteCategory: {
    type: String
  },

  character: {
    type: String,
    required: true,
    enum: ["akira", "jean", "jacky", "paichan", "lion"]
  },

  noteBody: {
    type: String,
    required: true
  }
});

const Notes = mongoose.model("Notes", notesSchema);

export default Notes;
