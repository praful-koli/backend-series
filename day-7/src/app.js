/**
 *   app.js
 *   1. create a server
 *   2.configur the server
 */

const express = require("express");
const noteModel = require("./models/notes.model.js");
const app = express();

app.use(express.json());


app.post("/notes", async (req, res) => {
  const { title, description } = req.body;
  const note = await noteModel.create({
    title,
    description,
  });
  res.status(201).json({
    message: "note create sucessfuly",
    note,
  });
});

module.exports = app;
