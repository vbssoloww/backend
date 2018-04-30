const db = require('../database')
const SQL = require('../queries/index');

module.exports = (req, res) => {

    let studentId = req.params.stuid;

    // Must match DB
    let registerRequest = {
        StudentID: studentId,
        SubjectID: req.body.subjectid || req.body.subjectId,
        Year: req.body.year,
        Semester: req.body.semester,
        SectionNo: req.body.sectionNo,
        Grade: 'P'
    }
    
    if (!registerRequest.SubjectID) {
        res.status(422).send({
            "message": "Please specify a subject ID"
        })
    } else if (!registerRequest.Year || !registerRequest.Semester) {
        res.status(422).send({
            "message": "Please specify both the section's year and semester"
        })
    } else if (!registerRequest.SectionNo) {
        res.status(422).send({
            "message": "Please specify the section's number"
        })
    } else {
        db.query("INSERT INTO studies SET ?", registerRequest, (err, results, fields) => {
            if (err) {
                if (err.code === 'ER_DUP_ENTRY') {
                    res.status(400).send({
                        message: "Already registered for this section!"
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