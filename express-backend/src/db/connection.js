const mysql = require('mysql2')
const dotenv = require('dotenv')

dotenv.config({ path: 'config.env' })

const host = process.env.DB_HOST || '127.0.0.1'
const username = process.env.DB_USERNAME || 'root'
const password = process.env.DB_PASSWORD || ''
const database = process.env.DB_DATABASE || 'alumni'

const connection = mysql.createConnection({
    host: host,
    user: username,
    password: password,
    database: database
})

module.exports = connection