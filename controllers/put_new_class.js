const db = require('../database')
const SQL = require('../queries/index');

module.exports = (req, res) => {

    let subjectid = req.params.subid;
    let year = req.params.year;
    let semester = req.params.semester;

    // Must match DB
    let newClass = {
        SubjectID: subjectid,
        Year: year,
        Semester: semester,
        MidtermStartDatetime: req.body.midtermStartDatetime,
        MidtermEndDatetime: req.body.midtermEndDatetime,
        FinalStartDatetime: req.body.finalStartDatetime,
        FinalEndDatetime: req.body.finalEndDatetime
    }
    
    if (!newClass.SubjectID) {
        res.status(422).send({
            "message": "Please specify a subject ID"
        })
    } else if (!newClass.Year || !newClass.Semester) {
        res.status(422).send({
            "message": "Please specify both the class' year and semester"
        })
    } else {
        db.query(SQL.CREATE_NEW_CLASS, newClass, (err, results, fields) => {
            if (err) {
                if (err.code === 'ER_DUP_ENTRY') {
                    res.status(400).send({
                        message: "Class already exists!"
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