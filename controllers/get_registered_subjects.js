const db = require('../database')
const SQL = require('../queries/index');

module.exports = (req, res) => {
    let studentid = req.body.studentid || req.body.StudentID || req.body.StudentId;;
    let year = req.body.year || req.body.Year;
    let semester = req.body.semester || req.body.Semester;

    if (!studentid) {
        res.status(423).send({
            "message": "Please specify a student ID"
        })
    } else if (!year && semester) {
        res.status(422).send({
            "message": "Please specify a year"
        })
    } else {
        if (!year && !semester) {
            db.query(SQL.FIND_REGISTERED_SUBJECTS, studentid, (err, results, fields) => {
                if (err) {
                    console.log(err);
                    res.sendStatus(500);
                } else {
                    res.send(results);
                }
            })
        } else if (year && !semester) {
            db.query(SQL.FIND_REGISTERED_SUBJECTS_YEAR, [studentid, year], (err, results, fields) => {
                if (err) {
                    console.log(err);
                    res.sendStatus(500);
                } else {
                    res.send(results);
                }
            })
        } else {
            db.query(SQL.FIND_REGISTERED_SUBJECTS_SEMESTER, [studentid, year, semester], (err, results, fields) => {
                if (err) {
                    console.log(err);
                    res.sendStatus(500);
                } else {
                    res.send(results);
                }
            })
        }
    }
}