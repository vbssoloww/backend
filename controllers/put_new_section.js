const db = require('../database')
const SQL = require('../queries/index');

module.exports = (req, res) => {

    let subjectid = req.params.subid;
    let year = req.params.year;
    let semester = req.params.semester;

    // Must match DB
    let newSection = {
        SubjectID: subjectid,
        Year: year,
        Semester: semester,
        SectionNo: req.body.sectionNo,
        Classroom: req.body.classroom,
        GenedType: req.body.genedType || 0,
        MaxStudent: req.body.maxStudent,
        TeachedBy: req.body.teachedBy
    }
    
    if (!newSection.SubjectID) {
        res.status(422).send({
            "message": "Please specify a subject ID"
        })
    } else if (!newSection.Year || !newSection.Semester) {
        res.status(422).send({
            "message": "Please specify both the section's year and semester"
        })
    } else if (!newSection.SectionNo) {
        res.status(422).send({
            "message": "Please specify the section's number"
        })
    } else if (!newSection.MaxStudent) {
        res.status(422).send({
            "message": "Please specify the section's student max capacity"
        })
    } else {
        db.query(SQL.CREATE_NEW_SECTION, newSection, (err, results, fields) => {
            if (err) {
                if (err.code === 'ER_DUP_ENTRY') {
                    res.status(400).send({
                        message: "Section already exists!"
                    });
                } else {
                    console.log(err);
                    res.sendStatus(500);
                }
            } else {
                res.sendStatus(202);
            }
        })
    }
}