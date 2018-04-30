const db = require('../database')
const SQL = require('../queries/index');

module.exports = (req, res) => {

    // Must match DB
    let newSubject = {
        SubjectID: req.body.subjectid || req.body.subjectId,
        NameAbv: req.body.nameabv || req.body.nameAbv,
        NameEN: req.body.nameen || req.body.nameEn,
        NameTH: req.body.nameth || req.body.nameTh,
        Credit: req.body.credit
    }
    
    if (!newSubject.SubjectID) {
        res.status(422).send({
            "message": "Please specify a subject ID"
        })
    } else if (!newSubject.NameAbv || !newSubject.NameEN) {
        res.status(422).send({
            "message": "Please specify both the subject's name and abbreviation"
        })
    } else if (!newSubject.Credit) {
        res.status(422).send({
            "message": "Please specify the credit for the subject"
        })
    } else {
        db.query(SQL.CREATE_NEW_SUBJECT, newSubject, (err, results, fields) => {
            if (err) {
                if (err.code === 'ER DUP ENTRY') {
                    res.status(400).send({
                        message: "Subject already exists!"
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