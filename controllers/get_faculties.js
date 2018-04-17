const db = require('../database')
const SQL = require('../queries/index');

module.exports = (req, res) => {


    db.query(SQL.FIND_FACULTY_ALL, (err, results, fields) => {
        if (err) {
            console.log(err);
            res.sendStatus(500);
        } else {
            res.send(results);
        }
    })

}