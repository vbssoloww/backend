const express = require('express')
const router = express.Router()

const db = require('../database')

router.get('/test', (req, res) => {
    res.status(200).send({
        message: "Hello from API"
    })
})

router.get('/student', require('../controllers/get_student_details'));
router.get('/student/registered_subjects', require('../controllers/get_registered_subjects'));
router.get('/student/study_schedule', require('../controllers/get_study_schedule'));
router.get('/student/final_schedule', require('../controllers/get_final_schedule'));
router.get('/student/midterm_schedule', require('../controllers/get_midterm_schedule'));
router.get('/student/fee', require('../controllers/get_student_fee'));
router.get('/student/payments', require('../controllers/get_payment_status'));

router.get('/subjects', require('../controllers/get_subjects'));
router.get('/subject', require('../controllers/get_subject'));

router.get('/section/students', require('../controllers/get_student_in_section'));

router.get('/teacher/students', require('../controllers/get_student_under_advisor'));

router.get('/teacher', require('../controllers/get_teacher_details'));

router.get('/unpaid', require('../controllers/get_unpaid_students'));

router.get('/offers', require('../controllers/get_offers'));

router.get('/reviews', require('../controllers/get_company_review'));

router.get('/faculties', require('../controllers/get_faculties'));

router.get('/faculty', require('../controllers/get_faculty'));


module.exports = router