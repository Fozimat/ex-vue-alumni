const { getAllAlumni, getAlumniByNISN, insertAlumni } = require('../models/alumniModel')
const respondFormatter = require('../utils/respondFormatter')

const showAlumni = (req, res) => {
    getAllAlumni((error, results) => {
        if (error) {
            res.send(error)
        }
        res.json(respondFormatter('success', 'Daftar data seluruh alumni', results))
    })
}

const showAlumniByNISN = (req, res) => {
    getAlumniByNISN(req.params.nisn, (error, results) => {
        if (error) {
            res.send(error)
        }
        if (results.length === 0) {
            res.json(respondFormatter('error', `Data alumni berdasarkan NISN`, []))
            return
        }
        res.json(respondFormatter('success', `Data alumni berdasarkan NISN`, results))
    })
}

const addAlumni = (req, res) => {
    const data = req.body
    insertAlumni(data, (error, results) => {
        if (error) {
            res.send(error)
        }
        res.json(respondFormatter('success', 'Berhasil menambahkan data', results))
    })
}

module.exports = { showAlumni, showAlumniByNISN, addAlumni }