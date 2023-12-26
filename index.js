const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('Hey, I\'m a Node.js app edited by farisp the finalz !');
});

app.listen(8025, '0.0.0.0', () => {
  console.log(`Server is up on http://0.0.0.0:8025`);
});
