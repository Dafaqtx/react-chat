const http = require('http')
const config = require('config')

const app = require('./app')
const logger = require('./helpers/logger')

const PORT = config.get('port') || 3001

const server = http.createServer(app)

server.listen(PORT, () => {
  logger.info(`Server running on port ${PORT}`)
})
