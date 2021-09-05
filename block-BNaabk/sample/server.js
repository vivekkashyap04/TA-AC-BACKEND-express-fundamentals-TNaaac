const express = require('express');

const app = express();

app.get('/', (req, res) => {
  res.send('welcome to the world of express');
});

app.listen(3000, () => {
  console.log('server is listen on 3000');
});
