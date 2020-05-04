const mongoose = require('mongoose')
const express = require('express')
const router = express.Router()
const config = require('config')
const cors = require('cors')
const bodyParser = require('body-parser')

const logger = require('./helpers/logger')
const middleware = require('./helpers/middleware')

const MONGODB_URI = config.get('MONGODB_URI')
const app = express()

app.use(cors())
app.use(bodyParser.json())
app.use(middleware.requestLogger)

router.get('/', (req, res) => {
  res.json(req.query)
})

app.use('/api', router)

app.use(middleware.unknownEndpoint)
app.use(middleware.errorHandler)

logger.info('connecting to', MONGODB_URI)

async function start() {
  try {
    await mongoose
      .connect(MONGODB_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true,
      })
      .then(() => {
        logger.info('connected to MongoDB')
      })
  } catch (error) {
    logger.error('error connection to MongoDB:', error.message)
    process.exit(1)
  }
}

start()

module.exports = app
