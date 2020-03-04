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

module.exports = router;