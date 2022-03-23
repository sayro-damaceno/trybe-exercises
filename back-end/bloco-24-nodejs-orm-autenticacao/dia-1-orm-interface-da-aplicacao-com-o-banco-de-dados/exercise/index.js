const express = require('express');
const bodyParser = require('body-parser');

const booksController = require('./controllers/booksController');

const app = express();

app.use(bodyParser.json());

app.use('/books', booksController);

app.listen(3000, () => {
  console.log('App ouvindo na 3000');
});
