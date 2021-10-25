const express = require('express')
const { showAlumni, showAlumniByNISN, addAlumni } = require('../controllers/alumni')
const router = express.Router()
const { body, validationResult } = require('express-validator')

router.get('/alumni', showAlumni)
router.get('/alumni/:nisn', showAlumniByNISN)
router.post('/alumni', addAlumni)

module.exports = router