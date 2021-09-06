const express = require('express');
const url = require('url');

const app = express();

app.use((req, res, next) => {
  const current = new Date();
  console.log(req.method, req.url, current);
  next();
});

app.get('/', (req, res) => {
  res.send('welcome');
});
app.get('/user', (req, res) => {
  res.send('user');
});

app.get('/stylesheets/style.css', (req, res) => {
  res.sendFile(__dirname + '/public/stylesheets/style.css');
});

app.get('/media/cat.jpg', (req, res) => {
  res.sendFile(__dirname + '/public/media/cat.jpg');
});

app.listen(3000, () => {
  console.log('server is listen on 3000');
});
