const express = require('express');
const countStudents = require('./3-read_file_async');

const app = express();
const port = 1245;
const database = process.argv[2];

app.get('/', (req, res) => {
  res.send('Hello Holberton School!');
});

app.get('/students', async (req, res) => {
  try {
    const data = await countStudents(database);
    res.set('Content-Type', 'text/plain');
    res.send(`This is the list of our students\n${data}`);
  } catch (err) {
    res.status(500).send('Cannot load the database');
  }
});

app.listen(port);

module.exports = app;
