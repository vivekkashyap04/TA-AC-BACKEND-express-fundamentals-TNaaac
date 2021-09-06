const exppress = require('express');
const loader = require('morgan');
const cookieParser = require('cookie-parser');

const app = exppress();

app.use(loader('dev'));
app.use(cookieParser());

app.use(exppress.json());
app.use(exppress.urlencoded({ extended: false }));
app.use(exppress.static(__dirname + '/public'));

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

app.get('/user', (req, res) => {
  res.send('users');
});

app.get('/project', (req, res) => {
  res.sendFile(__dirname + '/project.html');
});

app.use((req, res, next) => {
  res.send('page not found');
});

app.listen(4000, () => {
  console.log('server is listen on 300');
});
