const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const helmet = require('helmet');
const morgan = require('morgan');

const api = require('./routes/api');

const app = express();

const PORT = 3145;


app.use(helmet());
app.use(morgan('dev'))
app.use(bodyParser.json());
app.use(bodyParser.json({ type: 'application/vnd.api+json' }));

app.get('/', (req, res) => {
    res.send("Hello!");
})

app.use('/api', api);


app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`);
})