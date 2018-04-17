const db = require('../database')
const SQL = require('../queries/index');

module.exports = (req, res) => {
    let studentid = req.body.studentid || req.body.StudentID || req.body.StudentId || req.query.studentid || req.query.StudentID || req.query.StudentId;
    let year = req.body.year || req.body.Year || req.query.year || req.query.Year;
    let semester = req.body.semester || req.body.Semester || req.query.semester || req.query.Semester;
    let sectionid = req.body.sectionid || req.body.SectionID || req.body.SectionId || req.query.sectionid || req.query.SectionId || req.query.SectionId;

    if (!subjectid) {
        res.status(423).send({
            "message": "Please specify a subject ID"
        })
    } else if (!sectionid) {
        res.status(423).send({
            "message": "Please specify a section ID"
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
        db.query(SQL.FIND_STUDENT_IN_SECTION, [subjectid, sectionid, year, semester], (err, results, fields) => {
            if (err) {
                console.log(err);
                res.sendStatus(500);
            } else {
                res.send(results);
            }
        })  
    }
}