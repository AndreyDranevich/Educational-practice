const express = require('express');
const bodyParser = require('body-parser');
const db = require('diskdb');

const app = express();
db.connect('public/db', ['articles']);

app.use(express.static('public/UI'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.listen(3000, () => {
  console.log('We are live on 3000');
});
app.get('/articles', (req, res) => {
  res.json(db.articles.find());
});

app.get('/article/:id', (req, res) => {
  res.json(db.articles.findOne({ id: req.params.id }));
});

app.post('/article', (req, res) => {
  res.json(db.articles.save(req.body));
});

app.delete('/articles/:id', (req, res) => {
  res.json(db.articles.remove({ id: req.params.id }));
});

app.put('/articles/', (req, res) => {
  res.json(db.articles.update({ id: req.body.id }, req.body));
});

