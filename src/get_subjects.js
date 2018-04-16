const db = require('../database')
const student = require('../queries/student');

module.exports = (req, res) => {

    db.query(student.FIND_SUBJECTS_ALL, (err, results, fields) => {
        if (err) {
            console.log(err);
            res.sendStatus(500);
        } else {
            res.send(results);
        }
    })

}