const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const helmet = require('helmet');
const morgan = require('morgan');

// Routes
const api = require('./routes/api');

// Application
const app = express();

// Config
const PORT = 3145;


app.use(helmet());
app.use(morgan('dev'))
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.get('/', (req, res) => {
    res.send("Hello!");
})

app.use('/api', api);

app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`);
})