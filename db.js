const mongoose = require("mongoose");
const mongoUrl = 'mongodb+srv://tester:123456not@cluster0.9fr59.mongodb.net/mern-pizza'

mongoose.connect(mongoUrl, {useNewUrlParser: true, useUnifiedTopology: true})

var db = mongoose.connection

db.on('connected', () => {
  console.log('DB is connected successfully.')
})

db.on('error', () => {
  console.log('DB is not Connected to the server')
})

module.exports = mongoose