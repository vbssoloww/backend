const express = require('express')
const router = express.Router()

router.get('/', (req, res) => {
    res.status(200).send({
        message: "Hello from API"
    })
})


module.exports = router