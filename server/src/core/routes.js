const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');
const cors = require('cors');

const { updateLastSeen, checkAuth } = require('../middleware');
const {
  loginValidation,
  registrationValidation,
} = require('../helpers/validations');
const multer = require('./multer');

const {
  UserController,
  DialogController,
  MessageController,
  UploadFileController,
} = require('../controllers');

const createRoutes = (app, io) => {
  const User = new UserController(io);
  const Dialog = new DialogController(io);
  const Messages = new MessageController(io);
  const UploadFile = new UploadFileController();

  app.use(cors());
  app.use(bodyParser.json());
  app.use(checkAuth);
  app.use(updateLastSeen);

  router.get('/users/list', User.getAll);
  router.get('/users/:id', User.show);
  router.get('/users/me', User.getMe);
  router.get('/users/verify', User.verify);
  router.post('/users/signUp', registrationValidation, User.create);
  router.post('/users/signIn', loginValidation, User.login);
  router.delete('/users/:id', User.delete);
  router.get('/users/find', User.findUsers);

  router.get('/dialogs', Dialog.index);
  router.delete('/dialogs/:id', Dialog.delete);
  router.post('/dialogs', Dialog.create);

  router.get('/messages', Messages.index);
  router.post('/messages', Messages.create);
  router.delete('/messages', Messages.delete);

  router.post('/files', multer.single('file'), UploadFile.create);
  router.delete('/files', UploadFile.delete);

  app.use('/api/', router);
};

module.exports = createRoutes;
