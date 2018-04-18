const db = require('../database')
const SQL = require('../queries/index');

module.exports = (req, res) => {

    let studentid = req.params.stuid;

    // Compatability with APIv1
    if (!studentid) studentid = req.body.studentid || req.body.StudentID || req.body.StudentId || req.query.studentid || req.query.StudentID || req.query.StudentId;

    if (!studentid) {
        res.status(422).send({
            "message": "Please specify a student ID"
        })
    } else {
        db.query(SQL.FIND_STUDENT_PAYMENT_STATUS, [studentid], (err, results, fields) => {
            if (err) {
                console.log(err);
                res.sendStatus(500);
            } else {
                if (results.length > 0){
                    res.send(results);
                } else {
                    res.status(404).send(results);
                }
            }
        })
    }
}