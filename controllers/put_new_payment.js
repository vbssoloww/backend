const db = require('../database')
const SQL = require('../queries/index');

module.exports = (req, res) => {

    let studentid = req.params.stuid;

    let year = req.body.year;
    let semester = req.body.semester;
    let paymentid = req.body.paymentid || req.body.paymentId;
    let paymentdate = req.body.paymentdate || req.body.paymentDate;

    if (!studentid) {
        res.status(422).send({
            "message": "Please specify a student ID"
        })
    } else if (!year || !semester) {
        res.status(422).send({
            "message": "Please specify a year / semester"
        })
    } else if (!paymentid) {
        res.status(422).send({
            "message": "Please specify a Payment ID [field: paymentid]"
        })
    } else {
        db.query(SQL.CREATE_NEW_PAYMENT, [[studentid, year, semester, paymentid, 'Pending', '1999-12-01']], (err, results, fields) => {
            if (err) {
                if (err.code = 'ER DUP ENTRY') {
                    res.status(400).send({
                        message: "Payment already exists!"
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