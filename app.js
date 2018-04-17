const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const helmet = require('helmet');
const morgan = require('morgan');
const cors = require('cors')
const compression = require('compression');

// Routes
const api = require('./routes/api');

// Application
const app = express();

const corsConfig = require('./config/cors')

app.use(morgan('dev'));

app.use(helmet());
app.use(cors(corsConfig));

app.use(compression());


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.get('/', (req, res) => {
    res.send("Hello!");
})

app.use('/api', api);

module.exports = app;