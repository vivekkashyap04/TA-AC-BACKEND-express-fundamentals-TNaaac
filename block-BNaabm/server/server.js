const express = require('express');

const app = express();

function loader(req, res, next) {
  console.log(req.method, req.url);
  next();
}

app.use(loader);

app.get('/', (req, res) => {
  res.send('write');
});

app.listen(3000, () => {
  console.log('server is  listen on 3000');
});
