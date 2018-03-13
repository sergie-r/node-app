const express = require('express');

const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('Hello World!!')
});

app.get('/foo', (req, res) => {
  res.send(`foo: ${req.query[Object.keys(req.query)[0]]}`);
});

app.get('/bar', (req, res) => {
  res.send(`bar: ${req.query[Object.keys(req.query)[0]]}`);
});

app.listen(port, () => {
  console.log(`App is listening on port ${port}`);
})


