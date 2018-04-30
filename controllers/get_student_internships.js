const db = require('../database')
const SQL = require('../queries/index');

module.exports = (req, res) => {

    let studentid = req.params.stuid;
    let year = req.params.year;

    console.log('get_student_internships: studentid = ' + studentid + ', year = ', + year + '.');
    if (!studentid) {
        res.status(423).send({
            "message": "Please specify a student ID"
        })
    } else if (!year) {
        db.query(SQL.FIND_STUDENT_INTERNSHIPS, [studentid], (err, results, fields) => {
            if (err) {
                console.log(err);
                res.sendStatus(500);
            } else {
                if (results.length > 0) {
                    res.send(results);
                } else {
                    res.sendStatus(404);
                }
            }
        })  
    } else {
        db.query(SQL.FIND_STUDENT_INTERNSHIP_YEAR, [studentid, year], (err, results, fields) => {
            if (err) {
                console.log(err);
                res.sendStatus(500);
            } else {
                if (results.length > 0) {
                    res.send(results[0]);
                } else {
                    res.sendStatus(404);
                }
            }
        }) 
    }
}