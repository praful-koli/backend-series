/**
 *   app.js
 *   1. create a server
 *   2.configur the server
 */

const express = require("express");
const noteModel = require("./models/notes.model.js");
const app = express();

app.use( express.json() );



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


app.get('/notes', async (req, res) => {
    try {
        const notes = await noteModel.find();
        console.log(typeof notes)
        if (notes.length === 0) {
            return res.status(404).json({
                message: "No notes found"
            });
        }

        res.status(200).json({
            message: "Your Notes",
            notes
        });
    } catch (error) {
        res.status(500).json({
            message: "Server error",
            error: error.message
        });
    }
});


app.delete('/notes/:id', (req , res) => {
  
})

module.exports = app;
