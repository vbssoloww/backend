SELECT `StudentID`, `FnameEN`, `MnameEN`, `LnameEN`, `FnameTH`, `MnameTH`, `LnameTH`, `StudentEmail`, `GPAX`, `EnterYear`, `Nation`, f.`NameTH` AS FacultyNameTH, f.`NameEN` AS FacultyNameEN, d.`NameEN` AS DepartmentNameEN, d.`NameTH` AS DepartmentNameTH 
FROM (
	SELECT `StudentID`, `FnameEN`, `MnameEN`, `LnameEN`, `FnameTH`, `MnameTH`, `LnameTH`, `StudentEmail`, `GPAX`, `EnterYear`, `Nation`, `MajorFaculty`, `MajorDepartment`
	FROM rexchula.`student`
	WHERE StudentID = ?
) AS s
JOIN rexchula.`faculty` AS f ON f.FacultyID = s.MajorFaculty
JOIN rexchula.`department` AS d ON d.DepartmentID = s.MajorDepartment;