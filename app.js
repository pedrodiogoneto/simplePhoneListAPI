require('dotenv').config();
const express = require('express')
const logger = require('morgan')
const cookieParser = require('cookie-parser')
const bodyParser = require('body-parser')
const cors = require('cors')

const phone = require('./routes/phoneRoutes')

const app = express()

// middlewares
app.use(logger('dev'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(cookieParser())
app.use(cors())

app.use('/phone', phone)

// -- 404 and error handler
app.use((req, res, next) => {
  res.status(404).json({ message: 'not found' })
})

// NOTE: requires a views/error.ejs template
app.use((err, req, res, next) => {
  // always log the error
  console.error('ERROR', req.method, req.path, err)

  // only render if the error ocurred before sending the response
  if (!res.headersSent) {
    res.status(500)
    res.json({ message: 'unexpected error' })
  }
})

module.exports = app
