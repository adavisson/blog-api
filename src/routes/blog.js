const express = require('express');
const db = require('../persistence/models');

const router = express.Router();

router.get('/', async (req, res) => {
  let blogs = await db.Blog.findAll({
    attributes: ['id', 'date', 'title', 'content']
  });
  res.send(blogs);
});

router.get('/:id', (req, res) => {
  res.send(`Blog #${req.params.id}`);
});

module.exports = router;