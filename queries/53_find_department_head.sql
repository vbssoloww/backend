SELECT `TeacherID`, `FacultyID`, `DepartmentID`, `StartDate`, `EndDate`
FROM managementship
WHERE FacultyID = ?
AND DepartmentID = ?;