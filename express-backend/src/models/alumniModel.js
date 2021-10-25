const connection = require('../db/connection')

const getAllAlumni = (result) => {
    connection.query("SELECT * FROM alumni", (error, results) => {
        if (error) {
            console.log("Error: ", error)
            return result(error, null)
        }
        result(null, results)
    })
}

module.exports = { getAllAlumni }