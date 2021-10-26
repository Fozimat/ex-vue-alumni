const connection = require('../db/connection')

const getAllAlumni = (result) => {
    connection.query(`SELECT * FROM alumni`, (error, results) => {
        if (error) {
            console.log("Error: ", error)
            return result(error, null)
        }
        result(null, results)
    })
}

const getSearchAlumni = (nama, result) => {
    connection.query('SELECT * FROM alumni WHERE nama LIKE ?', '%' + nama + '%', (error, results) => {
        if (error) {
            console.log("Error: ", error)
            return result(error, null)
        }
        result(null, results)
    })
}

const getAlumniById = (id, result) => {
    connection.query(`SELECT * FROM alumni WHERE id = ${id}`, (error, results) => {
        if (error) {
            console.log("Error: ", error)
            return result(error, null)
        }
        result(null, results)
    })
}

const insertAlumni = (data, result) => {
    connection.query(`INSERT INTO alumni SET ?`, [data], (error, results) => {
        if (error) {
            console.log("Error: ", error)
            return result(error, null)
        }
        result(null, results)
    })
}

const updateAlumni = (data, id, result) => {
    connection.query('UPDATE alumni SET nisn = ?, nama = ?, jenis_kelamin = ?, tahun_masuk = ?, tahun_lulus = ?, no_telp = ?, alamat = ?, email = ?, tanggal_lahir = ?, tempat_lahir = ? WHERE id = ?'
        , [data.nisn, data.nama, data.jenis_kelamin, data.tahun_masuk, data.tahun_lulus, data.no_telp, data.alamat, data.email, data.tanggal_lahir, data.tempat_lahir, id], (error, results) => {
            if (error) {
                console.log("Error: ", error)
                return result(error, null)
            }
            result(null, results)
        })
}

const deleteAlumni = (id, result) => {
    connection.query('DELETE FROM alumni WHERE id = ?', [id], (error, results) => {
        if (error) {
            console.log("Error: ", error)
            return result(error, null)
        }
        result(null, results)
    })
}

module.exports = { getAllAlumni, getAlumniById, insertAlumni, updateAlumni, deleteAlumni, getSearchAlumni }