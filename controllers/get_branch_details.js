const db = require('../database')
const SQL = require('../queries/index');

module.exports = (req, res) => {

    let companyid = req.params.compid;
    let branchid = req.params.brid;

    if (!companyid) {
        res.status(422).send({
            "message": "Please specify a company ID"
        })
    } else if (!branchid) {
        res.status(422).send({
            "message": "Please specify a branch ID"
        })
    } else {
        db.query(SQL.FIND_BRANCH_DETAILS, [companyid, branchid], (err, results, fields) => {
            if (err) {
                console.log(err);
                res.sendStatus(500);
            } else {
                res.send(results);
            }
        })
    }

}