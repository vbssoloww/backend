const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const helmet = require('helmet');
const morgan = require('morgan');
const cors = require('cors')
const compression = require('compression');
const lowercasePaths = require('express-lowercase-paths');

// Routes
const apiv1 = require('./routes/api.v1');

// Application
const app = express();

// Config
const corsConfig = require('./config/cors')

app.use(morgan('dev'));

app.use(helmet());
app.use(cors(corsConfig));

// app.use(compression());

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(lowercasePaths())

app.get('/', (req, res) => {
    res.send("Hello!");
})

app.use('/api/v1', apiv1);

module.exports = app;