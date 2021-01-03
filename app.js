const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const feedRoutes = require('./routes/feed');

const app = express();

// app.use(bodyParser.urlencoded()) // x-www-form-urlencoded <form>
app.use(bodyParser.json()) // application/json

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  next();
});

app.use('/feed', feedRoutes);

const username = 'cqhung1412';
const password = 'jaVFccX3gHd47Qh4';
const dbname = 'media';
mongoose.connect(
  `mongodb+srv://${username}:${password}@nodejs-cluster0.pvske.mongodb.net/${dbname}?retryWrites=true&w=majority`
)
  .then(result => app.listen(8080))
  .catch(err => console.log(err));
