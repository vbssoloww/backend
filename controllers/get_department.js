const db = require('../database')
const SQL = require('../queries/index');

module.exports = (req, res) => {

    let facultyid = req.params.fid;
    let departmentid = req.params.depid;

    // Maintain Compatability with APIv1
    if (!facultyid) facultyid = req.body.facultyid || req.body.FacultyID || req.body.FacultyId || req.query.facultyid || req.query.FacultyID || req.query.FacultyId;
    if (!departmentid) departmentid = req.body.departmentid || req.query.departmentid;

    if (!facultyid) {
        res.status(422).send({
            "message": "Please specify a Faculty ID"
        })
    } else if (!departmentid) {
        res.status(422).send({
            "message": "Please specify a Department ID"
        })
    } else {
        // Fetch the subject detail first
        db.query(SQL.FIND_DEPARTMENT_DETAILS, [facultyid, departmentid], (err, results, fields) => {
            if (err) {
                console.log(err);
                res.sendStatus(500);
            } else {
                if (results.length > 1) {
                    db.query(SQL.FIND_DEPARTMENT_HEAD, [facultyid, departmentid], (err, dephead, fields) => {
                        if (err) {
                            console.log(err);
                            res.sendStatus(500);
                        } else {

                            results.departmentHead = dephead.length > 0 ? dephead[0] : null;

                            db.query(SQL.FIND_DEPARTMENT_TEACHERS, [facultyid, departmentid], (err, teachers, fields) => {
                                if (err) {
                                    console.log(err);
                                    res.sendStatus(500);
                                } else {
                                    
                                    results.teachers = teachers;
                                    res.send(results);
                                }
                            })
                        }
                    })
                    res.send(results[0]);
                } else {
                    res.sendStatus(404);
                }
            }
        });
    }

}