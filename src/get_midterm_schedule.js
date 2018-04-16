const db = require('../database')
const student = require('../queries/student');

module.exports = (req, res) => {
    let studentid = req.body.studentid || req.body.StudentID || req.body.StudentId;
    let year = req.body.year || req.body.Year;
    let semester = req.body.semester || req.body.Semester;

    if (!studentid) {
        res.status(423).send({
            "message": "Please specify a student ID"
        })
    } else if (!year) {
        res.status(423).send({
            "message": "Please specify a year"
        })
    } else if (!semester) {
        res.status(423).send({
            "message": "Please specify a semester"
        })
    } else {
        db.query(student.FIND_FINAL_SCHEDULE, [studentid, year, semester], (err, results, fields) => {
            if (err) {
                console.log(err);
                res.sendStatus(500);
            } else {
                res.send(results);
            }
        })  
    }
}