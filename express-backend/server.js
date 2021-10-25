const express = require('express')
const dotenv = require('dotenv')
const router = require('./src/routes/routes')

dotenv.config({ path: 'config.env' })

const app = express()
const PORT = process.env.PORT || 8080

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(router)

app.listen(PORT, () => {
    console.log(`Server is running on http://127.0.0.1:${PORT}`)
})
