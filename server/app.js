const config = require('./utils/config')
const express = require('express')
const app = express()

const subscriberRouter = require('./controllers/subscriber')

app.use(express.json())
app.use('/api/subscribers', subscriberRouter)
app.use(express.static('client'))

module.exports = app