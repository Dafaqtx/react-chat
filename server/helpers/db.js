const mongoose = require('mongoose')
const config = require('config')
const logger = require('./logger')

const MONGODB_URI = config.get('MONGODB_URI')

logger.info('connecting to', MONGODB_URI)

const start = async () => {
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

module.exports = start