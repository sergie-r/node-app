const express = require('express');
const app = express();
const path = require("path");
const bodyParser = require('body-parser')
const MongoClient = require('mongodb').MongoClient
const URL = 'mongodb://localhost:27017'
const port = 3000;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname+'/index.html'));
});

app.post('/save', (req, res) => {
  MongoClient.connect(URL, function(err, client) {
    const collection = client.db('test').collection('names');

    collection.insert({name: req.body.name}, function(err, result) {

      if (err) return;

      client.close();
      res.redirect('/');
    })
  })
})

app.get('/foo', (req, res) => {
  res.send(`foo: ${req.query[Object.keys(req.query)[0]]}`);
});

app.get('/bar', (req, res) => {
  res.send(`bar: ${req.query[Object.keys(req.query)[0]]}`);
});

app.listen(port, () => {
  console.log(`App is listening on port ${port}`);
})


