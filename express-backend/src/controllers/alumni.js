const { getAllAlumni, getAlumniById, insertAlumni, updateAlumni, deleteAlumni, getSearchAlumni } = require('../models/alumniModel')
const respondFormatter = require('../utils/respondFormatter')

const showAlumni = (req, res) => {
    getAllAlumni((error, results) => {
        if (error) {
            res.send(error)
        }
        res.json(respondFormatter('success', 'Daftar data seluruh alumni', results))
    })
}

const searchAlumni = (req, res) => {
    const nama = req.params.nama
    getSearchAlumni(nama, (error, results) => {
        if (error) {
            res.send(error)
        }
        res.send(results)
    })
}

const showAlumniById = (req, res) => {
    getAlumniById(req.params.id, (error, results) => {
        if (error) {
            res.send(error)
        }
        if (results.length === 0) {
            res.json(respondFormatter('error', `Data alumni berdasarkan ID`, []))
            return
        }
        res.json(respondFormatter('success', `Data alumni berdasarkan ID`, results))
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

const editAlumni = (req, res) => {
    const data = req.body
    const id = req.params.id
    updateAlumni(data, id, (error, results) => {
        if (error) {
            res.send(error)
        }
        res.json(results)
    })
}

const removeAlumni = (req, res) => {
    const id = req.params.id
    deleteAlumni(id, (error, results) => {
        if (error) {
            res.send(error)
        }
        res.json(results)
    })
}

module.exports = { showAlumni, showAlumniById, addAlumni, editAlumni, removeAlumni, searchAlumni }