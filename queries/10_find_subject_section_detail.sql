SELECT sec.SectionNo, sec.Classroom, sec.GenedType, sec.MaxStudent, sec.CurrentStudent, CONCAT(CONCAT(t.FnameEN, ' '), t.LnameEN) AS TeacherName
FROM (`subject` s, section sec) LEFT JOIN teacher t ON sec.TeachedBy = t.TeacherID
WHERE s.SubjectID = ? AND
	  sec.SubjectID = s.SubjectID AND
      sec.`Year` = ? AND
      sec.Semester = ? AND
      sec.SectionNo = ?