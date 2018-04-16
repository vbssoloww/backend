const express = require('express')
const router = express.Router()

const db = require('../database')
const student = require('../queries/student');

router.get('/test', (req, res) => {
    res.status(200).send({
        message: "Hello from API"
    })
})

router.get('/registered_subjects', require('../src/get_registered_subjects'));

router.get('/study_schedule', require('../src/get_study_schedule'));

router.get('/final_schedule', require('../src/get_final_schedule'));

router.get('/midterm_schedule', require('../src/get_midterm_schedule'));

router.get('/subjects', require('../src/get_subjects'));

router.get('/subject', require('../src/get_subject'));

module.exports = router