const express = require('express');
const bodyParser = require('body-parser');
const db = require('diskdb');
const app = express();
db.connect('public/db', ['articles']);

app.use(express.static('public/UI'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

const port = 3000;
app.listen(port, () => {
    console.log('We are live on ' + port);
});

app.get('/articles', function (req, res) {
    res.json(db.articles.find());
});

app.get('/article/:id', function (req, res) {
    res.json(db.articles.findOne({id: req.params.id}));
});

app.post('/article', function (req, res) {
    res.json(db.articles.save(req.body));
});

app.delete('/articles/:id', function (req, res) {
    +res.json(db.articles.remove({id: req.params.id}));
});

app.put('/articles/', function (req, res) {
    +res.json(db.articles.update({id: req.body.id}, req.body));
});

