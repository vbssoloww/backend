const db = require('../database')
const SQL = require('../queries/index');

module.exports = (req, res) => {

    let facultyId = req.params.fid;
    let departmentId = req.params.depid;

    // Must match DB
    let newManagementship = {
        TeacherID: req.body.teacherId,
        FacultyID: facultyId,
        DepartmentID: departmentId,
        StartDate: req.body.startDate,
    }

    if (!newManagementship.TeacherID) {
        res.status(422).send({
            "message": "Please specify teacher ID"
        })
    } 
    if (!newManagementship.FacultyID) {
        res.status(422).send({
            "message": "Please specify faculty ID"
        })
    } else {
        db.query(SQL.CREATE_NEW_DEPARTMENT_HEAD, newManagementship, (err, results, fields) => {
            if (err) {
                if (err.code === 'ER_DUP_ENTRY') {
                    res.status(400).send({
                        message: "Department Head already exists!"
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