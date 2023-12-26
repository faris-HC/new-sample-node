const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('Hey, I\'m a Node.js app edited by faris!');
});

app.listen(8025, '127.0.0.1', () => {
  console.log(`Server is up on http://127.0.0.1:8025`);
});

