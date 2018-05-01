const db = require('../database')
const SQL = require('../queries/index');

module.exports = (req, res) => {

    let newInternship = {
        StudentID: req.params.stuid,
        Year: req.body.year,
        CompanyID: req.body.companyid || req.body.companyId,
        BranchName: req.body.branchname || req.body.branchName,
        Status: 'Pending', 
        StartDate: req.body.startdate || req.body.StartDate,
        EndDate: req.body.enddate || req.body.EndDate,
        PositionNameEN: req.body.positionNameEn,
        PositionNameTH: req.body.positionNameTh,
        Comment: req.body.comment,
        Rating: req.body.rating,
        OfferID: req.body.offerId || req.body.offerid,
    }

    if (!newInternship.CompanyID) {
        res.status(422).send({
            "message": "Please specify a company ID [field: companyid]"
        })
    } else if (!newInternship.Year) {
        res.status(422).send({
            "message": "Please specify a year"
        })
    } else if (!newInternship.PositionNameEN) {
        res.status(422).send({
            "message": "Please specify a Position Name in English [field: positionNameEn]"
        })
    } else {
        db.query(SQL.CREATE_NEW_INTERNSHIP, newInternship, (err, results, fields) => {
            if (err) {
                if (err.code === 'ER_DUP_ENTRY') {
                    res.status(400).send({
                        message: "Internship already exists!"
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