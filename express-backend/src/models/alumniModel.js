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

const getAlumniByNISN = (nisn, result) => {
    connection.query(`SELECT * FROM alumni WHERE nisn = ${nisn}`, (error, results) => {
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

module.exports = { getAllAlumni, getAlumniByNISN, insertAlumni }