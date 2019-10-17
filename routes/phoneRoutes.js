const express = require('express')
const phoneRoutes = express()
const phoneController = require('../controllers/phoneController')

phoneRoutes.get("/", phoneController.getAllPhones)

module.exports = phoneRoutes
