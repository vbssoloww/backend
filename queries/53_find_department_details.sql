SELECT `FacultyID`, `DepartmentID`, `NameEN`, `NameTH`
FROM department AS d
WHERE d.FacultyID = ?
AND d.DepartmentID = ?;