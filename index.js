
const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('Hey, I\'m a Node.js app from Jenkins test 5!');
})

app.listen(8006, '127.0.0.1', () => {
  console.log(`Server is up on http://127.0.0.1:8006`);
})
