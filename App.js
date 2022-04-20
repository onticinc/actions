const express = require('express')
const app = express();
const path = require('path')

app.use(express.statis(path.join(__dirname, '/frontend/build')));

app.get('/names', (req, res) => {
  res.send('John Doe')
})

app.listen(5000, () => {
  console.log("Server is running on port 5000")
})

