const express = require("express");

const app = express();

const notes = [];

app.use(express.json());

app.get("/", (req, res) => {
  res.send("server is runing perfectly");
});

app.post("/notes", (req, res) => {
  notes.push(req.body);
  res.status(201).json({
    message: "Note created successfully",
  });
});

app.get("/notes", (req, res) => {
  res.status(200).json({
    notes: notes,
  });
});

app.delete("/notes/:id", (req, res) => {
  const id = req.params.id;
  delete notes[id];
  res.status(204).json({
    message: "Data delete successfully",
  });
});

app.patch("/notes/:id", (req, res) => {
  const id = req.params.id;
  if (!notes[id]) {
    return res.status(404).json({ message: "Note not found" });
  }
  notes[id].description = req.body.description;
  res.status(200).json({ message: "Note updated successfully" });
});

module.exports = app;
