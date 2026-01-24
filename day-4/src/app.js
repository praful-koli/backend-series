//  - app.js use
//  - server create krna
//  - server ko config krna

const express = require("express");
const app = express(); // server create ho jata hi


 app.use(express.json())
const notes = [
 
]


app.get('/' , (req, res) => {
    res.send('Home api')
})

app.post('/notes' , (req, res) => {
    notes.push(req.body);
    res.send('Data store successfuly')
})

app.get('/notes' , (req, res) => {
    res.send(notes)
})


app.delete('/notes/:id' , (req , res) => {
   delete notes[req.params.id];
   res.send('Delete successfuly')
})


app.patch('/notes/:id' , (req, res) => {
     notes[req.params.id].description = req.body.description;
    res.send('update successfuly')
})








module.exports = app;
