SELECT b.BranchName, b.Manager, b.TelNo, b.Address, b.City, b.State, b.PostalCode, b.Country
FROM (
	SELECT *
	FROM company c
	WHERE CompanyID = ?
) AS Q
NATURAL JOIN company_branch b
WHERE b.BranchName = ?;