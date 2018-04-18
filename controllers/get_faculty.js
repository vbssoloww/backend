const db = require('../database')
const SQL = require('../queries/index');

module.exports = (req, res) => {

    let facultyid = req.params.fid;

    // Maintain Compatability with APIv1
    if (!facultyid) facultyid = req.body.facultyid || req.body.FacultyID || req.body.FacultyId || req.query.facultyid || req.query.FacultyID || req.query.FacultyId;

    if (!facultyid) {
        res.status(422).send({
            "message": "Please specify a Faculty ID"
        })
    } else {
        // Fetch the subject detail first
        db.query(SQL.FIND_FACULTY_DETAIL, [facultyid], (err, results, fields) => {
            if (err) {
                console.log(err);
                res.sendStatus(500);
            } else {
                if (typeof results !== 'undefined' && results.length > 0) {
                    results = results[0];
                    db.query(SQL.FIND_DEPARTMENT_IN_FACULTY, [facultyid], (err, departments, fields) => {
                        if (err) {
                            console.log(err);
                            res.sendStatus(500);
                        } else {
                            results.departments = departments;
                            res.send(results);
                        }
                    });
                } else {
                    res.status(404).send({
                        ...results,
                        message: "No faculty with specified ID was found."
                    });
                }
                
            }
        })
       
    }

}