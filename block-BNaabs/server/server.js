const express = require('express');

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(__dirname + '/public'));

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

app.get('/new', (req, res) => {
  res.sendFile(__dirname + '/new.html');
});

app.post('/new', (req, res) => {
  res.send('hello');
  console.log(req.body);
});

app.get('/users', (req, res) => {
  res.json(req.query);
  res.end('welcome');
});

app.get('/users/:username', (req, res) => {
  var username = req.params.username;
  console.log(username);
  res.send(username);
});
app.listen(3000, () => {
  console.log('server is listen on 3000');
});
