const express = require('express')
const router = express.Router()
const mongoose = require('mongoose')
const config = require('config')
const app = express()
const cors = require('cors')
const bodyParser = require('body-parser')

const logger = require('./helpers/logger')

const MONGODB_URI = config.get('MONGODB_URI')

logger.info('connecting to', MONGODB_URI)

mongoose
  .connect(MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    logger.info('connected to MongoDB')
  })
  .catch((error) => {
    logger.error('error connection to MongoDB:', error.message)
  })

app.use(cors())
app.use(bodyParser.json())

router.get('/', (req, res) => {
  res.json(req.query)
})

app.use('/api', router)

module.exports = app
