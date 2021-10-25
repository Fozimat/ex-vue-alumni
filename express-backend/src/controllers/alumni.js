const { getAllAlumni } = require('../models/alumniModel')
const respondFormatter = require('../utils/respondFormatter')

const showAlumni = (req, res) => {
    getAllAlumni((error, results) => {
        if (error) {
            res.send(error)
        } else {
            res.json(respondFormatter('success', 'Daftar data seluruh alumni', results))
        }
    })
}

module.exports = { showAlumni }