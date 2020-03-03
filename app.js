// const subjectRouter = require('./src/routes/subject');
// const questionRouter = require('./src/routes/question');
const blogRouter = require('./src/routes/blog');
const express = require('express')
const app = express()
const port = 3001

//app.use(express.json);

app.get('/', (req, res) => res.send('Blog API'))

app.use('/blogs', blogRouter);

app.listen(port, () => console.log(`Example app listening on port ${port}!`))