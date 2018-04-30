const db = require('../database')
const SQL = require('../queries/index');

module.exports = (req, res) => {
    let companyid = req.body.companyid || req.body.companyId;
    let year = req.body.year;
    let positionNameEn = req.body.positionnameen || req.body.positionNameEn;
    let positionNameTh = req.body.positionnameth || req.body.positionNameTh;
    let positionDescriptionEn = req.body.positiondescriptionen || req.body.positionDescriptionEn;
    let positionDescriptionTh = req.body.positiondescriptionth || req.body.positionDescriptionTh;
    let numberOfPositions = req.body.numberofpositions || req.body.numberOfPositions;
    let otherRequirements = req.body.otherrequirements || req.body.otherRequirements;
    let statedMinimumGrade = req.body.statedminimumgrade || req.body.statedMinimumGrade;
    let statedSalary = req.body.statedsalary || req.body.statedSalary;
    let otherBenefits = req.body.otherbenefits || req.body.otherBenefits;
    let expiryDate = req.body.expirydate || req.body.expiryDate;

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
                if (err.code === 'ER DUP ENTRY') {
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