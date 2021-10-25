const express = require('express')
const { showAlumni, showAlumniByNISN } = require('../controllers/alumni')
const router = express.Router()

router.get('/alumni', showAlumni)
router.get('/alumni/:nisn', showAlumniByNISN)

module.exports = router