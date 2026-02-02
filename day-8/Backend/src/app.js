const express = require("express");
const app = express();
const noteModel = require("./models/notes.model.js");

app.use(express.json());
/**
 *  post /api/notes
 *  create new note and save data in mongodb
 */
app.post("/api/notes", async (req, res) => {
  const { title, description } = req.body;
  const note = await noteModel.create({
    title,
    description,
  });

  res.status(201).json({
    message: "Data create and save in db",
    note,
  });
});

/**
 *  GET /api/notes
 *  Fetch all the notes data from nongodb and send them in the response
 */

app.get("/api/notes", async (req, res) => {
  const notes = await noteModel.find(); // find return data in the array format
  res.status(200).json({
    message: "Notes fetched successfully",
    notes,
  });
});

/**
 *  Delete /api/notes/:id
 *  Delete note with the id from req.params
 */

app.delete("/api/notes/:id", async (req, res) => {
  const id = req.params.id;
  await noteModel.findByIdAndDelete(id);
  res.status(204).json({
    messsage: "Note Deleted Successfuly",
  });
});

/**
 * PATCH /api/notes/:id
 * Update notes
 * req.body {description}
 */

app.patch("/api/notes/:id", async (req, res) => {
  const id = req.params.id;
  const { description } = req.body;
  await noteModel.findByIdAndUpdate(id, { description });
  res.status(200).json({
    message: "Note update successfully",
  });
});

module.exports = app;
