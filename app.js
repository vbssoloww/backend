const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const helmet = require('helmet');
const morgan = require('morgan');

// Routes
const api = require('./routes/api');

// Application
const app = express();

app.use(helmet());
app.use(morgan('dev'))
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.get('/', (req, res) => {
    res.status(200).send("Hello!");
})

app.use('/api', api);

module.exports = app;