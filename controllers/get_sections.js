const db = require('../database')
const SQL = require('../queries/index');

module.exports = (req, res) => {

    let subjectid = req.params.subid;
    let year = req.params.year;
    let semester = req.params.semester;

    // Maintain APIv1 Compatability
    if (!subjectid) subjectid = req.body.subjectid || req.query.subjectid;
    if (!year) year = req.body.year || req.query.year;
    if (!semester) semester = req.body.semester || req.query.semester;

    if (!subjectid) {
        res.status(422).send({
            "message": "Please specify a Subject ID"
        })
    } else {
        db.query(SQL.FIND_SUBJECT_SECTION, [subjectid, year, semester], (err, sections, fields) => {
            if (err) {
                console.log(err);
                res.sendStatus(500);
            } else {
                res.send(sections);
            }
        });
    }

}