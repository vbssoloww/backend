const express = require('express')
const router = express.Router()

const db = require('../database')

router.get('/test', (req, res) => {
    res.status(200).send({
        message: "Hello from API"
    })
})

/* Student */
router.get('/students', require('../controllers/get_students'));
router.put('/students/undergrad', require('../controllers/put_new_undergrad'));
router.put('/students/grad', require('../controllers/put_new_grad'));
router.get('/students/:stuid', require('../controllers/get_student_details'));
router.get('/students/:stuid/registered', require('../controllers/get_registered_subjects'));
router.get('/students/:stuid/registered/:year', require('../controllers/get_registered_subjects'));
router.get('/students/:stuid/registered/:year/:semester', require('../controllers/get_registered_subjects'));
// Edit Student Details

/* Student Schedules */
router.get('/students/:stuid/schedules/study', require('../controllers/get_study_schedule'));
router.get('/students/:stuid/schedules/study/:year', require('../controllers/get_study_schedule'));
router.get('/students/:stuid/schedules/study/:year/:semester', require('../controllers/get_study_schedule'));

router.get('/students/:stuid/schedules/final', require('../controllers/get_final_schedule'));
router.get('/students/:stuid/schedules/final/:year', require('../controllers/get_final_schedule'));
router.get('/students/:stuid/schedules/final/:year/:semester', require('../controllers/get_final_schedule'));

router.get('/students/:stuid/schedules/midterm', require('../controllers/get_midterm_schedule'));
router.get('/students/:stuid/schedules/midterm/:year', require('../controllers/get_midterm_schedule'));
router.get('/students/:stuid/schedules/midterm/:year/:semester', require('../controllers/get_midterm_schedule'));

/* Student Financial */
router.get('/students/:stuid/fee', require('../controllers/get_student_fee'));
router.get('/students/:stuid/payments', require('../controllers/get_payment_status'));
router.put('/students/:stuid/payments', require('../controllers/put_new_payment'));

/* Student Internship */
router.get('/students/:stuid/internships', require('../controllers/get_student_internships'));
router.get('/students/:stuid/internships/:year', require('../controllers/get_student_internships'));

/* Subject */
router.get('/subjects', require('../controllers/get_subjects'));
router.get('/subjects/:subid', require('../controllers/get_subject'));
// router.get('/subjects/:sid/:year', require('../controllers/get_subject'));
router.get('/subjects/:subid/:year/:semester', require('../controllers/get_subject'));
router.get('/subjects/:subid/:year/:semester/sections', require('../controllers/get_sections'));
router.get('/subjects/:subid/:year/:semester/sections/:sectno', require('../controllers/get_section_detail'));
router.get('/subjects/:subid/:year/:semester/sections/:sectno/students', require('../controllers/get_student_in_section'));

/* Teacher */
router.put('/teachers', require('../controllers/put_new_teacher'));
router.get('/teachers', require('../controllers/get_teachers'));
router.get('/teachers/:tid', require('../controllers/get_teacher_details'));
router.get('/teachers/:tid/advisees', require('../controllers/get_student_under_advisor'));
// Add new teacher
// Edit Teacher Details

/* Misc. */
router.get('/students/unpaid', require('../controllers/get_unpaid_students'));
router.get('/offers', require('../controllers/get_offers'));
router.put('/offers', require('../controllers/put_new_offer'));

/* Faculty & Department */
router.get('/faculties', require('../controllers/get_faculties'));
router.get('/faculties/:fid', require('../controllers/get_faculty'));
router.get('/faculties/:fid/departments', require('../controllers/get_departments'));
router.get('/faculties/:fid/departments/:depid', require('../controllers/get_department'));
router.get('/faculties/:fid/departments/:depid/head', require('../controllers/get_department_head'));
router.get('/faculties/:fid/departments/:depid/teachers', require('../controllers/get_department_teachers'));

/* Faculty Groups */


/* Company & Branch */
router.get('/companies', require('../controllers/get_companies'));
router.get('/companies/:compid', require('../controllers/get_company'));
router.get('/companies/:compid/branches', require('../controllers/get_company_branches'));
router.get('/companies/:compid/branches/:brid', require('../controllers/get_branch_details'));
router.get('/companies/:compid/reviews', require('../controllers/get_company_review'));


module.exports = router