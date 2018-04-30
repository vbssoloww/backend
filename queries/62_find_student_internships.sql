SELECT I.StudentID, I.`Year`, I.Status, I.StartDate, I.EndDate, I.PositionNameEn, I.PositionNameTH, C.NameEN, C.NameTH, S.FnameEN, S.MnameEN, S.LnameEN, S.FnameTH, S.MnameTH, S.LnameTH 
FROM internship I, company C, student S
WHERE I.StudentID = S.StudentID
AND C.CompanyID = I.CompanyID
AND S.StudentID = ?;