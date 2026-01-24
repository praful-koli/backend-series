const express = require('express')

const app = express()

const PORT = 3000
app.get('/', (req, res) => {
  res.send('Hello, Express server is running!');
});
app.get('/praful', (req, res) => {
  res.send('this is the praful page');
});

app.listen(PORT , ()=> {
    console.log('server is runing on : ', PORT)
})
