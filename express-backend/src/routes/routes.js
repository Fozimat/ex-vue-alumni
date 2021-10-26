const express = require('express')
const { showAlumni, showAlumniById, addAlumni, editAlumni, removeAlumni } = require('../controllers/alumni')
const router = express.Router()
const { validateInfo, result } = require('../utils/validator')

router.get('/alumni', showAlumni)
router.get('/alumni/:id', showAlumniById)
router.post('/alumni', validateInfo, result, addAlumni)
router.put('/alumni/:id', validateInfo, result, editAlumni)
router.delete('/alumni/:id', removeAlumni)

module.exports = router