const express = require("express");
const app = express();
const PORT = 3000;

const notes = [];
app.use(express.json());

app.post("/notes", (req, res) => {
  notes.push(req.body);
  console.log(req.body);
  res.send("notes created");
});

app.get('/notes' , (req , res)=> {
    res.send(notes)
})

app.listen(PORT, () => {
  console.log(`server is running on PORT  : ${PORT}`);
});
