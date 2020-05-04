const cors = require('cors');
const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');

const middleware = require('../helpers/middleware');
const {
  registerValidation,
  loginValidation,
} = require('../helpers/validations');

const { UserController } = require('../controllers');

const createRoutes = app => {
  const User = new UserController();

  app.use(cors());
  app.use(bodyParser.json());

  app.use('/api', router);

  router.post('/users/registration', registerValidation, User.registration);
  router.post('/users/login', loginValidation, User.login);

  app.use(middleware.requestLogger);
  app.use(middleware.unknownEndpoint);
  app.use(middleware.errorHandler);
};

module.exports = createRoutes;
