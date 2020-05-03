import bodyParser from 'body-parser';
import express from 'express';
import socket from 'socket.io';
import { updateLastSeen, checkAuth } from '../middleware';
import {
  loginValidation,
  registrationValidation,
} from '../helpers/validations';

import multer from './multer';

import {
  UserController,
  DialogController,
  MessageController,
  UploadFileController,
} from '../controllers';

const createRoutes = (app: express.Express, io: socket.Server) => {
  const User = new UserController(io);
  const Dialog = new DialogController(io);
  const Messages = new MessageController(io);
  const UploadFile = new UploadFileController();

  app.use(bodyParser.json());
  app.use(checkAuth);
  app.use(updateLastSeen);

  app.get('/users/list', User.getAll);
  app.get('/users/:id', User.show);
  app.get('/users/me', User.getMe);
  app.get('/user/verify', User.verify);
  app.post('/user/signup', registrationValidation, User.create);
  app.post('/user/signin', loginValidation, User.login);
  app.delete('/users/:id', User.delete);
  app.get('/users/find', User.findUsers);

  app.get('/dialogs', Dialog.index);
  app.delete('/dialogs/:id', Dialog.delete);
  app.post('/dialogs', Dialog.create);

  app.get('/messages', Messages.index);
  app.post('/messages', Messages.create);
  app.delete('/messages', Messages.delete);

  app.post('/files', multer.single('file'), UploadFile.create);
  app.delete('/files', UploadFile.delete);
};

export default createRoutes;
