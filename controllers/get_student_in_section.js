const db = require('../database')
const SQL = require('../queries/index');

module.exports = (req, res) => {
    let subjectid = req.body.subjectid || req.body.SubjectID || req.body.SubjectId;
    let year = req.body.year || req.body.Year;
    let semester = req.body.semester || req.body.Semester;
    let sectionid = req.body.sectionid || req.body.SectionID || req.body.SectionId;

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
        db.query(SQL.FIND_FINAL_SCHEDULE, [subjectid, sectionid, year, semester], (err, results, fields) => {
            if (err) {
                console.log(err);
                res.sendStatus(500);
            } else {
                res.send(results);
            }
        })  
    }
}