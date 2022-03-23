const express = require('express');
const router = express.Router();

const { Book } = require('../models');

router.get('/', async(_req, res) => {
  try {
    const books = await Book.findAll();
    return res.status(200).json(books);
  } catch (error) {
    console.log(error);
    return res.status(500).json({message: 'Algo deu errado'});
  }
});

router.get('/:id', async(req, res) => {
  try {
    const book = await Book.findByPk(req.params.id);

    if(!book) return res.status(404).json({message: 'Not Found'});

    return res.status(200).json(book);
  } catch (error) {
    console.log(error);
    return res.status(500).json({message: 'Algo deu errado'});
  }
});

router.post('/', async(req, res) => {
  const { title, author, pageQuantity } = req.body;
  try {
    const book = await Book.create({title, author, pageQuantity})
    return res.status(201).json(book);
  } catch (error) {
    console.log(error);
    return res.status(500).json({message: 'Algo deu errado'});
  }
});

router.post('/:id', async(req, res) => {
  const { title, author, pageQuantity } = req.body;
  try {
    const book = await Book.update({title, author, pageQuantity}, { where: {
      id: req.params.id
    } });
    return res.status(200).json(book);
  } catch (error) {
    console.log(error);
    return res.status(500).json({message: 'Algo deu errado'});
  }
});

router.delete('/:id', async(req, res) => {
  try {
    const book = await Book.destroy({ where: {
      id: req.params.id
    } });
    return res.status(200).end();
  } catch (error) {
    console.log(error);
    return res.status(500).json({message: 'Algo deu errado'});
  }
});


module.exports = router;
