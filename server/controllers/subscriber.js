const subscriberRouter = require('express').Router()
const inDatabase = require('../database/createTable')
const toDatabase = require('../database/saveData')

async function db (data) {
  await inDatabase.createTable()
  await toDatabase.save(data)
}

subscriberRouter.post('/', async (req, res) => {
  const subscriber = req.body
  db(subscriber)
})

module.exports = subscriberRouter
