const fs = require('fs');
const path = require('path');

function loadSql(filename) {
    return fs.readFileSync(path.join(__dirname, filename)).toString()
}

module.exports = {
    FIND_REGISTERED_SUBJECTS : loadSql('05_registered_subject.sql'),
    FIND_REGISTERED_SUBJECTS_YEAR : loadSql('05_registered_subject_year.sql'),
    FIND_REGISTERED_SUBJECTS_SEMESTER : loadSql('05_registered_subject_semester.sql'),

    FIND_STUDY_SCHEDULE : loadSql('06_study_schedule.sql'),

    FIND_FINAL_SCHEDULE : loadSql('07_final_schedule.sql'),
    FIND_MIDTERM_SCHEDULE: loadSql('07_midterm_schedule.sql'),

    FIND_SUBJECTS_ALL: loadSql('08_find_subject_all.sql'),

    FIND_SUBJECT_DETAILS: loadSql('10_find_subject_details.sql'),
    FIND_SUBJECT_SECTION: loadSql('10_find_subject_section.sql'),

    FIND_STUDENT_IN_SECTION: loadSql('13_find_student_in_section.sql'),

    FIND_STUDENT_UNDER_ADVISOR: loadSql('14_find_student_under_advisor.sql'),

    FIND_TEACHER_DETAILS: loadSql('16_find_teacher_details.sql'),

    FIND_STUDENT_FEE: loadSql('19_find_fee.sql'),

    FIND_STUDENT_PAYMENT_STATUS: loadSql('20_payment_status.sql'),

    FIND_UNPAID_STUDENT: loadSql('21_unpaid_students.sql')

}
