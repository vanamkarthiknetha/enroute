const express = require('express')
const connectToMongo = require('./config/connectToMongoDB')
const app = express()
require('dotenv').config()


connectToMongo()
app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(process.env.PORT, () => {
  console.log(`Enroute server listening on port ${process.env.PORT}`)
})