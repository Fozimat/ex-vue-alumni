const express = require('express')
const { showAlumni } = require('../controllers/alumni')
const router = express.Router()

router.get('/alumni', showAlumni)

module.exports = router