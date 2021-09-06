const express = require('express');
const loader = require('morgan');
const cookieParser = require('cookie-parser');

const app = express();

app.use(loader('dev'));
app.use(cookieParser());

app.use((req, res, next) => {
  res.cookie('username', 'vivek');
  next();
});

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get('/', (req, res) => {
  res.setHeader('Content-Type', 'text/html');
  res.send('<h2>Welcome to express</h2>');
});

app.get('/about', (req, res) => {
  res.send('My name is qwerty');
});

app.post('/form', (req, res) => {
  res.send(req.body);
  console.log(req.body);
});

app.post('/json', (req, res) => {
  res.json(req.body);
});

app.get('/users/:username' , (req,res) => {
    var username = req.params.username;
    res.setHeader('Content-Type','text/html');
    res.send(`<h1>${username}</h1>`);
})

app.use((req,res,next) => {
    res.send('page not found');
})

app.use((err,req,res,next) => {
    res.send(err);
})

app.listen(3000, () => {
  console.log('server is listen on 3000');
});
