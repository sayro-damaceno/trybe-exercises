require('dotenv').config();
const express = require('express');

const app = express();

app.get('/ping', (req, res) => res.status(200).json({message: 'pong!'}));


app.get('/cep/:cep', (req, res) => {
  res.status(200).json({message: '1'})
});

const PORT = 3000;

app.listen(PORT, () => {
    console.log(`Ouvindo a porta ${PORT}`);
});