const express = require('express')
const { showAlumni, showAlumniByNISN, addAlumni } = require('../controllers/alumni')
const router = express.Router()
const { validateInfo, result } = require('../utils/validator')

router.get('/alumni', showAlumni)
router.get('/alumni/:nisn', showAlumniByNISN)
router.post('/alumni', validateInfo, result, addAlumni)

module.exports = router