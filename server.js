const app = require('./app');

// Config
const PORT = 3145;

app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`);
})
