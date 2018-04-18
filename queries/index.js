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
    FIND_SUBJECT_SECTION_DETAIL: loadSql('10_find_subject_section_detail.sql'),

    FIND_STUDENT_IN_SECTION: loadSql('13_find_student_in_section.sql'),

    FIND_STUDENT_UNDER_ADVISOR: loadSql('14_find_student_under_advisor.sql'),

    FIND_TEACHER_LIST: loadSql('16_find_teacher_list.sql'),
    FIND_TEACHER_DETAILS: loadSql('16_find_teacher_details.sql'),

    FIND_STUDENT_FEE: loadSql('19_find_fee.sql'),

    FIND_STUDENT_PAYMENT_STATUS: loadSql('20_payment_status.sql'),

    FIND_UNPAID_STUDENT: loadSql('21_unpaid_students.sql'),

    FIND_ALL_OFFERS: loadSql('25_find_all_offers.sql'),
    FIND_ALL_OFFERS_COMPANY: loadSql('25_find_all_offers_by_company.sql'),

    FIND_REVIEW_COMPANY: loadSql('26_find_review.sql'),

    FIND_STUDENT_DETAIL: loadSql('50_student_details.sql'),
    FIND_STUDENTS_ALL: loadSql('50_student_list.sql'),

    FIND_FACULTY_ALL: loadSql('51_faculty_list.sql'),
    FIND_FACULTY_DETAIL: loadSql('51_faculty_details.sql'),

    FIND_DEPARTMENT_IN_FACULTY: loadSql('52_department_in_faculty.sql'),

    FIND_DEPARTMENT_DETAILS: loadSql('53_find_department_details.sql'),
}
