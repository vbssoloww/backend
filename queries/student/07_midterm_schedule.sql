SELECT s.SubjectID, s.NameEN, s.MidtermStartDatetime, s.MidtermEndDatetime
FROM `subject` s, studies stdy
WHERE stdy.StudentID = ? AND
      stdy.Year = ? AND
      stdy.Semester = ? AND
	s.SubjectID = stdy.SubjectID;