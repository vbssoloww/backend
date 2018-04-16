const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');

const app = express();

const PORT = 3145;

app.get('/', (req, res) => {
    res.send("Hello!");
})


app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`);
})