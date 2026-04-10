require('dotenv').config({ path: require('path').join(__dirname, '.env') })
const express = require('express')
const cors = require('cors')
const cookieParser = require('cookie-parser')
const mongoose = require('mongoose')
const router = require('./router/index')

const PORT = process.env.PORT || 5050
const app = express()

app.use(cookieParser())
app.use(express.json())
app.use(cors())
app.use('/api', router)

const start = async () => {
    try {
        await mongoose.connect(process.env.DB_URL)
        app.listen(PORT, () => console.log(`server is started ${PORT}`))
    } catch (error) {
        console.log(error)
    }
}

start()
