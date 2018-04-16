const mysql = require('mysql');
const dbConfig = require('./config/db');

// DB Connection
const connection = mysql.createConnection(dbConfig);

connection.connect((err) => {
    if (err) {
        console.log("Database connection failed")
        throw err;
    }
    console.log("Database connection successful")
})


module.exports = connection;