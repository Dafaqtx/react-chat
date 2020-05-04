const jwt = require('jsonwebtoken');
const config = require('config');
const logger = require('./logger');

const requestLogger = (request, response, next) => {
  logger.info('Method:', request.method);
  logger.info('Path:  ', request.path);
  logger.info('Body:  ', request.body);
  logger.info('---');
  next();
};

const unknownEndpoint = (request, response) => {
  response.status(404).send({ error: 'unknown endpoint' });
};

const errorHandler = (error, request, response, next) => {
  logger.error(error.message);

  if (error.name === 'CastError') {
    return response.status(400).send({ error: 'malformatted id' });
  } else if (error.name === 'ValidationError') {
    return response.status(400).json({ error: error.message });
  }

  next(error);
};

const checkAuth = (req, res, next) => {
  if (req.method === 'OPTIONS') {
    return next();
  }

  try {
    const token = req.headers.authorization.split(' ')[1]; // "Bearer TOKEN"

    if (!token) {
      logger.error('auth no toke error', req.headers.authorization);
      return res.status(401).json({ message: 'No token' });
    }

    const decoded = jwt.verify(token, config.get('JWT_SECRET_KEY'));
    req.user = decoded;
    next();
  } catch (e) {
    logger.error('auth error', e);
    res.status(401).json({ message: 'No auth' });
  }
};

module.exports = {
  requestLogger,
  unknownEndpoint,
  errorHandler,
  checkAuth,
};
