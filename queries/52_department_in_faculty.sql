SELECT d.`DepartmentID`, d.`NameEN` AS DepartmentNameEN, d.`NameTH` AS DepartmentNameTH 
FROM (
	SELECT `FacultyID`
	FROM rexchula.`faculty`
	WHERE FacultyID = ?
) AS f
JOIN rexchula.`department` AS d ON d.FacultyID = f.FacultyID;