const db = require('../database')
const SQL = require('../queries/index');

module.exports = (req, res) => {

    let companyId = req.params.compid;

    // Must match DB
    let newBranch = {
        CompanyID: companyId,
        BranchName: req.body.branchName,
        Manager: req.body.manager,
        TelNo: req.body.telNo,
        Address: req.body.address,
        City: req.body.city,
        State: req.body.state,
        PostalCode: req.body.postalCode,
        Country: req.body.country
    }

    if (!newBranch.BranchName) {
        res.status(422).send({
            "message": "Please specify a branch name"
        })
    } else {
        db.query(SQL.CREATE_NEW_BRANCH, newBranch, (err, results, fields) => {
            if (err) {
                if (err.code === 'ER_DUP_ENTRY') {
                    res.status(400).send({
                        message: "Branch already exists!"
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