const express = require('express');

const app = express();


app.use((req, res, next) => {
  console.log('Console log something');
  next();
});

app.use('/users', (req, res, next) => {
  res.send('<h1>USERS</h1>');
});

app.use('/', (req, res, next) => {
  res.send('<h1>HOME</h1>');
});

app.listen(3000);
