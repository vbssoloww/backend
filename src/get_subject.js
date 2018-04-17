const db = require('../database')
const student = require('../queries/student');

module.exports = (req, res) => {

    let subjectid = req.body.subjectid || req.body.SubjectId;
    let year = req.body.year || req.body.Year;
    let semester = req.body.semester || req.body.Semester;

    if (!subjectid) {
        res.status(423).send({
            "message": "Please specify a Subject ID"
        })
    } else {
        // Fetch the subject detail first
        db.query(student.FIND_SUBJECT_DETAILS, [subjectid], (err, results, fields) => {
            if (err) {
                console.log(err);
                res.sendStatus(500);
            } else {
                if (typeof results !== 'undefined' && results.length > 0) {
                    if (year && semester) {
                        // Then Fetch the sections
                        results = results[0];
                        db.query(student.FIND_SUBJECT_SECTION, [subjectid, year, semester], (err, sections, fields) => {
                            if (err) {
                                console.log(err);
                                res.sendStatus(500);
                            } else {
                                results.sections = sections;
                                res.send(results);
                            }
                        });
                    } else {
                        res.send({
                            ...results,
                            message: "Year and/or semester was not specified. Not showing section details"
                        })
                    }
                } else {
                    res.send({
                        ...results,
                        message: "No subject with specified ID was found."
                    });
                }
                
            }
        })
       
    }

}