const express = require('express');
const loader = require('morgan');
const cookieParser = require('cookie-parser');
const { application } = require('express');

const app = express();

app.use(cookieParser());
app.use(loader('dev'));

app.use('/about', (req, res, next) => {
  res.cookie('username', 'vivek');
  next();
});

app.use((res, req, next) => {
  console.log(res.cookies);
  next();
});

app.get('/', (req, res) => {
  res.send('welcome');
});

app.use(express.json());
app.use(express.static(__dirname + '/public'));

app.listen(3000, () => {
  console.log('server is listen on 3000');
});
