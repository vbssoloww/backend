const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const helmet = require('helmet');
const morgan = require('morgan');
const cors = require('cors')
const compression = require('compression');
const lowercasePaths = require('express-lowercase-paths');
const multer = require('multer');

// Routes
const apiv1 = require('./routes/api.v1');
const apiv2 = require('./routes/api.v2');

// Application
const app = express();

// Config
const corsConfig = require('./config/cors')

// Logger
app.use(morgan('dev'));

app.use(helmet());
app.use(cors(corsConfig));

// app.use(compression());

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// Parse form-data
const upload = multer();
app.use(upload.array());

// Convert to lowercase
app.use(lowercasePaths())
// Static Dir

app.use(express.static('public'))

app.get('/', (req, res) => {
    res.send("Hello!");
})

app.use('/v1', apiv1);
app.use('/v2', apiv2);

module.exports = app;