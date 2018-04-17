const db = require('../database')
const SQL = require('../queries/index');

module.exports = (req, res) => {
    let companyid = req.body.companyid || req.body.CompanyID || req.body.CompanyId || req.query.companyid || req.query.CompnayID || req.query.CompanyId;
    
    if (!companyid) {
        res.status(422).send({
            "message": "Please specify a compnay ID"
        })
    } else {
        db.query(SQL.FIND_REVIEW_COMPANY, [companyid], (err, results, fields) => {
            if (err) {
                console.log(err);
                res.sendStatus(500);
            } else {
                res.send(results);
            }
        });
    }

}