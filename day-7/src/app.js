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


app.get('/notes' , async(req, res) => {
    const note = await noteModel.find()
    if(!note) {
       return res.status(404).json({
            message : "data not found"
        })
    }
    res.status(200).json({
        message : "your Notes",
        note
    })
})


app.delete('/notes/:id', (req , res) => {
  
})

module.exports = app;
