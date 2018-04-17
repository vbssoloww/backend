const express = require('express')
const router = express.Router()

const db = require('../database')

router.get('/test', (req, res) => {
    res.status(200).send({
        message: "Hello from API"
    })
})

router.get('/registered_subjects', require('../controllers/get_registered_subjects'));

router.get('/study_schedule', require('../controllers/get_study_schedule'));

router.get('/final_schedule', require('../controllers/get_final_schedule'));

router.get('/midterm_schedule', require('../controllers/get_midterm_schedule'));

router.get('/subjects', require('../controllers/get_subjects'));

router.get('/subject', require('../controllers/get_subject'));

router.get('/student_in_section', require('../controllers/get_student_in_section'));

router.get('/student_under_advisor', require('../controllers/get_student_under_advisor'));

router.get('/teacher', require('../controllers/get_teacher_details'));

router.get('/student/fee', require('../controllers/get_student_fee'));

router.get('/unpaid', require('../controllers/get_unpaid_students'));


module.exports = router