const db = require('../database')
const SQL = require('../queries/index');

module.exports = (req, res) => {

    let companyid = req.params.compid;

    // Maintain compatability with APIv1
    if (!companyid) companyid = req.body.companyid || req.body.CompanyID || req.body.CompanyId || req.query.companyid || req.query.CompnayID || req.query.CompanyId;
    
    if (!companyid) {
        res.status(422).send({
            "message": "Please specify a company ID"
        })
    } else {
        db.query(SQL.FIND_COMPANY_BRANCHES, [companyid], (err, results, fields) => {
            if (err) {
                console.log(err);
                res.sendStatus(500);
            } else {
                res.send(results);
            }
        })
    }

}