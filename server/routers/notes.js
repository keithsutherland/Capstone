import { Router } from "express";
import Notes from "../models/Notes.js";

const router = Router();

// All our routes go here

// Create pizza route
router.post("/", async (request, response) => {
  try {
    const newNotes = new Notes(request.body);

    const data = await newNotes.save();

    response.json(data);
  } catch (error) {
    // Output error to the console incase it fails to send in response
    console.log(error);

    if ("name" in error && error.name === "ValidationError")
      return response.status(400).json(error.errors);

    return response.status(500).json(error.errors);
  }
});

// Get all notes route
router.get("/", async (request, response) => {
  try {
    // Store the query params into a JavaScript Object
    const query = request.query; // Defaults to an empty object {}

    const data = await Notes.find(query);

    response.json(data);
  } catch (error) {
    // Output error to the console incase it fails to send in response
    console.log(error);

    return response.status(500).json(error.errors);
  }
});

// Get a single note by ID
// router.get("/:id", async (request, response) => {
//   try {
//     const data = await Pizza.findById(request.params.id);

//     response.json(data);
//   } catch (error) {
//     // Output error to the console incase it fails to send in response
//     console.log(error);

//     return response.status(500).json(error.errors);
//   }
// });

// Delete a pizza by ID
router.delete("/:id", async (request, response) => {
  try {
    const data = await Notes.findByIdAndDelete(request.params.id, {});

    response.json(data);
  } catch (error) {
    // Output error to the console incase it fails to send in response
    console.log(error);

    return response.status(500).json(error.errors);
  }
});

// Update a single pizza by ID
router.put("/:id", async (request, response) => {
  try {
    const body = request.body;

    const data = await Notes.findByIdAndUpdate(
      request.params.id,
      {
        $set: {
          noteCategory: body.crust,
          character: body.cheese,
          notebody: body.sauce,
        }
      },
      {
        new: true,
        runValidators: true
      }
    );

    response.json(data);
  } catch (error) {
    // Output error to the console incase it fails to send in response
    console.log(error);

    if ("name" in error && error.name === "ValidationError")
      return response.status(400).json(error.errors);

    return response.status(500).json(error.errors);
  }
});

export default router;
