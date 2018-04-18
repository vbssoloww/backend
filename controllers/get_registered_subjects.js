const db = require('../database')
const SQL = require('../queries/index');

module.exports = (req, res) => {
    
    let studentid = req.params.stuid;
    let year = req.params.year;
    let semester = req.params.semester;

    // Compatability with APIv1
    if (!studentid) studentid = req.body.studentid || req.body.StudentID || req.body.StudentId || req.query.studentid || req.query.StudentID || req.query.StudentId;
    if (!year) year = req.body.year || req.body.Year || req.query.year || req.query.Year;
    if (!semester) semester = req.body.semester || req.body.Semester || req.query.semester || req.query.Semester;

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