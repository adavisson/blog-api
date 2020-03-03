const express = require('express');
// const db = require('../persistence/models');

const router = express.Router();

router.get('/', (req, res) => {
  res.send("All blogs");
});

router.get('/:id', (req, res) => {
  res.send(`Blog #${req.params.id}`);
});

module.exports = router;