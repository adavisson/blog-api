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

router.post('/', async (req, res) => {
  let post = await db.Blog.create({date: req.body.date, title: req.body.title, content: req.body.content});
  res.send(post);
});

// Delete route
router.delete('/:id', async (req, res) => {
  await db.Blog.destroy({
    where: {id: req.params.id}
  });
  res.send(`Deleted blog with id: ${req.params.id}`);
});

module.exports = router;