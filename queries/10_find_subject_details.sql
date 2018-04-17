SELECT s.SubjectID, s.NameEN, s.NameTH, s.Credit, s.MidtermStartDatetime, s.MidtermEndDatetime, s.FinalStartDatetime, s.FinalEndDatetime
FROM `subject` s
WHERE s.SubjectID = ?;