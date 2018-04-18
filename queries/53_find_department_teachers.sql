SELECT `TeacherID`, `FnameEN`, `MnameEN`, `LnameEN`, `FnameTH`, `MnameTH`, `LnameTH`, `TeacherEmail`, `TelNo`, `Since`
FROM teacher
WHERE teacher.WorksForFaculty = ?
AND teacher.WorksForDepartment = ?;