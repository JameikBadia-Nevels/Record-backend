require('dotenv').config()
const express = require('express')
const mongoose = require('mongoose')
const db = mongoose.connection
const app = express()
const cors = require('cors')

const mongoURI = process.env.MONGO_URI
const PORT = process.env.PORT

mongoose.connect(mongoURI, {useNewUrlParser: true}, ()=> console.log('Mongo is connected'))

db.on('error', err => console.log(err.message + ' there is an issue connecting Mongo'))
db.on('disconnected', () => console.log('Mongo has been disconnected'))

app.use(express.urlencoded({extended:false}))
app.use(express.json())
app.use(express.static('public'))
app.use(cors())

const recordsController = require('./controllers/records')
app.use('/records', recordsController)

app.listen(PORT, () => {
    console.log('BACKDOOR!')
})