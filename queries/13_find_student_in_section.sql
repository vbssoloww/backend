SELECT stdn.StudentID, CONCAT(CONCAT(stdn.FnameEN, ' '), stdn.LnameEN) AS StudentName
FROM (studies stdy NATURAL LEFT JOIN student stdn) NATURAL LEFT JOIN section sec
WHERE sec.`SubjectID` = ? AND
      sec.`SectionNo` = ? AND
      sec.`Year` = ? AND
      sec.`Semester` = ? 