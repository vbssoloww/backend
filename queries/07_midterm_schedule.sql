SELECT s.SubjectID, s.NameEN, c.MidtermStartDatetime, c.MidtermEndDatetime
FROM `subject` s, `class` c, `studies` stdy
WHERE stdy.StudentID = ? AND
      stdy.Year = ? AND
      stdy.Semester = ? AND
	s.SubjectID = stdy.SubjectID AND
      s.SubjectID = c.SubjectID ;