const express = require('express');
const db = require('../persistence/models');

const router = express.Router();

router.get('/', async (req, res) => {
  let blogs = await db.Blog.findAll({
    attributes: ['id', 'date', 'title', 'content']
  });
  res.send(blogs);
});

router.get('/:id', async (req, res) => {
  let blog = await db.Blog.findAll({
    where: {id: req.params.id},
    attributes: ['id', 'date', 'title', 'content']
  });
  res.send(blog);
});

router.post('/', (req, res) => {
  res.send("Blog Post Route")
});

module.exports = router;