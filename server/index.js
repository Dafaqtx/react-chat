const http = require('http');
const config = require('config');

const start = require('./helpers/db')
const app = require('./app');
const logger = require('./helpers/logger');
const createRoutes = require('./routes');

start()
createRoutes(app);

const PORT = config.get('PORT') || 3001;

const server = http.createServer(app);

server.listen(PORT, () => {
  logger.info(`Server running on port ${PORT}`);
});
