const db = require('../database')
const SQL = require('../queries/index');

module.exports = (req, res) => {

    let teacherid = req.body.teacherid || req.body.teacherId;    

    // Must match DB
    let newTeacher = {
        TeacherID: teacherid,
        FnameEN: req.body.fnameen || req.body.fNameEn,
        MnameEN: req.body.mnameen || req.body.mNameEn,
        LnameEN: req.body.lnameen || req.body.lNameEn,
        FnameTH: req.body.fnameth || req.body.fNameTh,
        MnameTH: req.body.mnameth || req.body.mNameTh,
        LnameTH: req.body.lnameth || req.body.lNameTh,
        TeacherEmail: req.body.teacheremail || req.body.teacherEmail,
        TelNo: req.body.telno || req.body.TelNo,
        WorksForFaculty: req.body.worksForFaculty,
        WorksForDepartment: req.body.worksForDepartment,
        Since: req.body.since
    }
    if (!teacherid) {
        res.status(422).send({
            "message": "Please specify a teacher ID"
        })
    } else if (!newTeacher.FnameEN || !newTeacher.LnameEN) {
        res.status(422).send({
            "message": "Please specify the teacher's first name and last name"
        })
        console.log('received: ');
        console.log(newTeacher);
    } else if (!newTeacher.WorksForFaculty || !newTeacher.WorksForDepartment) {
        res.status(422).send({
            "message": "Please specify the teacher's department and faculty"
        })
    } else if (!newTeacher.Since) {
        res.status(422).send({
            "message": "Please specify the teacher's work since date"
        })
    } else {
        db.query(SQL.CREATE_NEW_TEACHER, newTeacher, (err, results, fields) => {
            if (err) {
                if (err.code === 'ER DUP ENTRY') {
                    res.status(400).send({
                        message: "Teacher already exists!"
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