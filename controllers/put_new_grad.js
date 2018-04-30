const db = require('../database')
const SQL = require('../queries/index');

module.exports = (req, res) => {
    let studentid = req.body.studentid || req.body.studentId;
    let fNameEn = req.body.fnameen || req.body.fNameEn;
    let mNameEn = req.body.mnameen || req.body.mNameEn;
    let lNameEn = req.body.lnameen || req.body.lNameEn;
    let fNameTh = req.body.fnameth || req.body.fNameTh;
    let mNameTh = req.body.mnameth || req.body.mNameTh;
    let lNameTh = req.body.lnameth || req.body.lNameTh;
    let studentEmail = req.body.studentemail || req.body.studentEmail;
    let enterYear = req.body.enteryear || req.body.enterYear;
    let advisor = req.body.advisor;
    let nation = req.body.nation;
    let majorFaculty = req.body.majorfaculty || req.body.majorFaculty;
    let majorDepartment = req.body.majorDepartment || req.body.majorDepartment;

    let studentParams = [studentid, fNameEn, mNameEn, lNameEn, 
                  fNameTH, mNameTh, lNameTh, 
                  studentEmail, enterYear, advisor, 
                  nation, majorFaculty, majorDepartment];

    let gradParams = [studentid];
    
    if (!studentid) {
        res.status(422).send({
            "message": "Please specify a Student ID [field: studentId]"
        })
    } else if (!fNameEn || !lNameEn) {
        res.status(422).send({
            "message": "Please specify the student's name [field: fNameEn, lNameEn]"
        })
    } else if (!advisor) {
        res.status(422).send({
            "message": "Please specify the advisor ID"
        })
    } else if (!nation) {
        res.status(422).send({
            "message": "Please specify the student's nationality [field: nation]"
        })
    } else if (!enterYear) {
        res.status(422).send({
            "message": "Please specify the student's entry year [field: enterYear]"
        })
    } else if (!majorFaculty || !majorDepartment) {
        res.status(422).send({
            "message": "Please specify the student's faculty and department (no department field is not supported yet)" 
        })
    } else {
        db.query(SQL.CREATE_NEW_STUDENT, [studentParams], (err, results, fields) => {
            if (err) {
                if (err.code === 'ER DUP ENTRY') {
                    console.log(err);
                    res.status(400).send({
                        message: "Student already exists!"
                    });
                } else {
                    console.log(err);
                    res.sendStatus(500);
                }
            } else {
                db.query(SQL.CREATE_NEW_GRAD_STUDENT, [gradParams], (err, results, fields) => {
                    if (err) {
                        if (err.code = 'ER DUP ENTRY') {
                            res.status(400).send({
                                message: "Gradd Student already exists!"
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
        })
    }
    
}