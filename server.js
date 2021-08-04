const express = require('express')
const app = express()
const db = require('./db')
const Pizza = require('./models/pizzaModel')


app.use(express.json());

app.get("/", (req, res) => {
  res.send("Server is running.")
})

app.get("/getpizzas", (req, res) => {
  Pizza.find({}, (err, docs) => {
    if (err) {
      console.log(err)
    }
    else {
      res.send(docs)
    }
  })
})

const port = process.env.port || 5000

app.listen(5000)