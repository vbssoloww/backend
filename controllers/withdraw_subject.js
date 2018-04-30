const db = require('../database')
const SQL = require('../queries/index');

module.exports = (req, res) => {

    let params = [
        req.params.stuid,
        req.body.subjectid || req.body.subjectId,
        req.body.year,
        req.body.semester,
        req.body.sectionNo
    ];
    
    if (!params[1]) {
        res.status(422).send({
            "message": "Please specify a subject ID"
        })
    } else if (!req.body.year || !req.body.semester) {
        res.status(422).send({
            "message": "Please specify both the section's year and semester"
        })
    } else if (!req.body.sectionNo) {
        res.status(422).send({
            "message": "Please specify the section's number"
        })
    } else {
        db.query("UPDATE studies SET Grade = 'W' WHERE studies.StudentID = ? AND studies.SubjectID = ? AND studies.Year = ? AND studies.Semester = ? AND studies.SectionNo = ?", params, (err, results, fields) => {
            if (err) {
                console.log(err);
                res.sendStatus(500);
            } else {
                res.sendStatus(202);
            }
        })
    }
}