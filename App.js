const express = require('express')
const app = express();

app.get('/blank', (req, res) => {
  res.send('Empty Route')
})

app.listen(5000, () => {
  console.log("Server is running on port 5000")
})

