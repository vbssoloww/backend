const db = require('../database')
const SQL = require('../queries/index');

module.exports = (req, res) => {
    let companyid = req.body.companyId;
    let year = req.body.year;
    let positionNameEn = req.body.positionNameEn;
    let positionNameTh = req.body.positionNameTh || null;
    let positionDescriptionEn = req.body.positionDescriptionEn || null;
    let positionDescriptionTh = req.body.positionDescriptionTh || null;
    let numberOfPositions = req.body.numberOfPositions || null;
    let otherRequirements = req.body.otherRequirements || null;
    let statedMinimumGrade = req.body.statedMinimumGrade || null;
    let statedSalary = req.body.statedSalary || null;
    let otherBenefits = req.body.otherBenefits || null;
    let expiryDate = req.body.expiryDate || null;

    let params = [companyid, year, positionNameEn, positionNameTh, 
                  positionDescriptionEn, positionDescriptionTh, 
                  numberOfPositions, otherRequirements, statedMinimumGrade, 
                  statedSalary, otherBenefits, expiryDate];
    
    if (!companyid) {
        res.status(422).send({
            "message": "Please specify a company ID [field: companyid]"
        })
    } else if (!year) {
        res.status(422).send({
            "message": "Please specify a year"
        })
    } else if (!positionNameEn) {
        res.status(422).send({
            "message": "Please specify a Position Name in English [field: positionNameEn]"
        })
    } else {
        db.query(SQL.CREATE_NEW_OFFER, [params], (err, results, fields) => {
            if (err) {
                if (err.code = 'ER DUP ENTRY') {
                    res.status(400).send({
                        message: "Payment already exists!"
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