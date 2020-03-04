const blogRouter = require('./src/routes/blog');
const express = require('express');
const bodyParser = require('body-parser');
const app = express()
const port = 3001

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.get('/', (req, res) => res.send('Blog API'))

app.use('/blogs', blogRouter);

app.listen(port, () => console.log(`Example app listening on port ${port}!`))