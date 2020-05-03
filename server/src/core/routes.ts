import bodyParser from 'body-parser';
import express from 'express';
import socket from 'socket.io';
import { updateLastSeen, checkAuth } from '../middleware';
import {
  loginValidation,
  registrationValidation,
} from '../helpers/validations';

import {
  UserController,
  DialogController,
  MessageController,
} from '../controllers';

const createRoutes = (app: express.Express, io: socket.Server) => {
  const User = new UserController(io);
  const Dialog = new DialogController(io);
  const Messages = new MessageController(io);

  app.use(bodyParser.json());
  app.use(checkAuth);
  app.use(updateLastSeen);

  app.get('/users/list', User.getAll);
  app.get('/users/me', User.getMe);
  app.get('/user/verify', User.verify);
  app.post('/user/signup', registrationValidation, User.create);
  app.post('/user/signin', loginValidation, User.login);
  app.get('/users/:id', User.show);
  app.delete('/users/:id', User.delete);

  app.get('/dialogs', Dialog.index);
  app.delete('/dialogs/:id', Dialog.delete);
  app.post('/dialogs', Dialog.create);

  app.get('/messages', Messages.index);
  app.post('/messages', Messages.create);
  app.delete('/messages/:id', Messages.delete);
};

export default createRoutes;
