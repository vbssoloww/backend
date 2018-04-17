SELECT s.SubjectID, s.SectionNo, sec.Classroom, sdt.Day, sdt.StartTime, sdt.EndTime
FROM section_datetime sdt NATURAL LEFT JOIN section sec, studies s
WHERE s.StudentID = ? AND
	  sdt.SubjectID = s.SubjectID AND
      sdt.`Year` = s.`Year` AND
      sdt.Semester = s.Semester AND
      sdt.`Year` = ? AND
      sdt.Semester = ? AND
      sdt.SectionNo = s.SectionNo