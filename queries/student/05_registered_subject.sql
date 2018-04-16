SELECT stdy.SubjectID, s.Credit
FROM `subject` s, studies stdy
WHERE stdy.StudentID = ? AND
      s.SubjectID = stdy.SubjectID