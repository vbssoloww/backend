const db = require('../database')
const SQL = require('../queries/index');

module.exports = (req, res) => {
    let companyid = req.body.companyid || req.body.CompanyID || req.body.CompanyId || req.query.companyid || req.query.CompnayID || req.query.CompanyId;
    let year = req.body.year || req.body.Year || req.query.year || req.query.Year;
    
    if (!companyid) {
        db.query(SQL.FIND_ALL_OFFERS, (err, results, fields) => {
            if (err) {
                console.log(err);
                res.sendStatus(500);
            } else {
                res.send(results);
            }
        });
    } else {
        db.query(SQL.FIND_ALL_OFFERS_COMPANY, [companyid], (err, results, fields) => {
            if (err) {
                console.log(err);
                res.sendStatus(500);
            } else {
                res.send(results);
            }
        });
    }

}