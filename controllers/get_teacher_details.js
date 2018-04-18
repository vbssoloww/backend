const db = require('../database')
const SQL = require('../queries/index');

module.exports = (req, res) => {

    let teacherid = req.params.tid;

    // Maintain compatability with APIv1
    if (!teacherid) teacherid = req.body.teacherid || req.body.TeacherID || req.body.TeacherId || req.query.teacherid || req.query.TeacherID || req.query.TeacherId;

    if (!teacherid) {
        res.status(422).send({
            "message": "Please specify a teacher ID"
        })
    } else {
        db.query(SQL.FIND_TEACHER_DETAILS, [teacherid], (err, results, fields) => {
            if (err) {
                console.log(err);
                res.sendStatus(500);
            } else {
                res.send(results);
            }
        })  
    }
}