const mongoose = require ('mongoose')

const recordSchema = new mongoose.Schema({
    title: String,
    art: String, 
    artist: String,
    year: String,
    genre: String
})

const Records = mongoose.model('Record', recordSchema)

module.exports = Records