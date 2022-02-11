const express = require('express');

const app = express();
app.use(express.json());


//ex 01
app.get('/ping', (_req, res) => res.json({message: "pong"}));


//ex02
app.post('/hello', (req, res) => {
  const { name } = req.body;
  res.status(200).json({ "message": `Hello, ${name}!` })
});

//ex 03
function validationAge(req, res, next) {
  const { age } = req.body;
  if(age < 18) {
    return res.status(401).json({ "message": "Unauthorized" });
  }
  next();
}

app.post('/greetings', validationAge, (req, res) => {
  const { name, age } = req.body;
  res.status(200).json({ "message": `Hello, ${name}!` })
});

//ex 04
app.put('/users/:name/:age', (req, res) => {
  const { name, age } = req.params;
  
  res.status(200).json({ "message": `Seu nome é ${name} e você tem ${age} anos de idade` } );
});

app.listen(3001);
