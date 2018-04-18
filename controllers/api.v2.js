const express = require('express')
const router = express.Router()

const db = require('../database')

router.get('/test', (req, res) => {
    res.status(200).send({
        message: "Hello from API"
    })
})

router.get('/students', require('../controllers/get_students'));
router.get('/students/:stuid', require('../controllers/get_student_details'));

router.get('/students/:stuid/registered-subjects', require('../controllers/get_registered_subjects'));
router.get('/students/:stuid/registered-subjects/:year', require('../controllers/get_registered_subjects'));
router.get('/students/:stuid/registered-subjects/:year/:semester', require('../controllers/get_registered_subjects'));

router.get('/students/:stuid/schedules/study', require('../controllers/get_study_schedule'));
router.get('/students/:stuid/schedules/study/:year', require('../controllers/get_study_schedule'));
router.get('/students/:stuid/schedules/study/:year/:semester', require('../controllers/get_study_schedule'));

router.get('/students/:stuid/schedules/final', require('../controllers/get_final_schedule'));
router.get('/students/:stuid/schedules/final/:year', require('../controllers/get_final_schedule'));
router.get('/students/:stuid/schedules/final/:year/:semester', require('../controllers/get_final_schedule'));

router.get('/students/:stuid/schedules/midterm', require('../controllers/get_midterm_schedule'));
router.get('/students/:stuid/schedules/midterm/:year', require('../controllers/get_midterm_schedule'));
router.get('/students/:stuid/schedules/midterm/:year/:semester', require('../controllers/get_midterm_schedule'));

router.get('/students/:stuid/fee', require('../controllers/get_student_fee'));
router.get('/students/:stuid/payments', require('../controllers/get_payment_status'));
router.put('/students/:stuid/payments', require('../controllers/put_new_payment'));

router.get('/subjects', require('../controllers/get_subjects'));
router.get('/subjects/:subid', require('../controllers/get_subject'));
// router.get('/subjects/:sid/:year', require('../controllers/get_subject'));
router.get('/subjects/:subid/:year/:semester', require('../controllers/get_subject'));
router.get('/subjects/:subid/:year/:semester/sections', require('../controllers/get_sections'));
router.get('/subjects/:subid/:year/:semester/sections/:sectno', require('../controllers/get_section_detail'));
router.get('/subjects/:subid/:year/:semester/sections/:sectno/students', require('../controllers/get_student_in_section'));

router.get('/teachers', require('../controllers/get_teachers'))
router.get('/teachers/:tid', require('../controllers/get_teacher_details'));
router.get('/teachers/:tid/advisees', require('../controllers/get_student_under_advisor'));

router.get('/students/unpaid', require('../controllers/get_unpaid_students'));
router.get('/offers', require('../controllers/get_offers'));
router.put('/offers', require('../controllers/put_offers'));
router.get('/reviews', require('../controllers/get_company_review'));

router.get('/faculties', require('../controllers/get_faculties'));
router.get('/faculties/:fid', require('../controllers/get_faculty'));
router.get('/faculties/:fid/departments', require('../controllers/get_departments'));
router.get('/faculties/:fid/departments/:depid', require('../controllers/get_department'));
router.get('/faculties/:fid/departments/:depid/head', require('../controllers/get_department_head'));
router.get('/faculties/:fid/departments/:depid/teachers', require('../controllers/get_department_teachers'));

module.exports = router