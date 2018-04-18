const db = require('../database')
const SQL = require('../queries/index');

module.exports = (req, res) => {

    let teacherid = req.params.tid;

    // Maintain Compatability with APIv1
    if (!teacherid) teacherid = req.body.teacherid || req.body.TeacherID || req.body.TeacherId || req.query.teacherid || req.query.TeacherID || req.query.TeacherId;

    if (!teacherid) {
        res.status(423).send({
            "message": "Please specify a teacher ID"
        })
    } else {
        db.query(SQL.FIND_STUDENT_UNDER_ADVISOR, [teacherid], (err, results, fields) => {
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
    }
}