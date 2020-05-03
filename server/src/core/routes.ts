import bodyParser from 'body-parser';
import express from 'express';
import socket from 'socket.io';
import { updateLastSeen, checkAuth } from '../middleware';
import { loginValidation } from '../helpers/validations';

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
  app.use(updateLastSeen);
  app.use(checkAuth);

  app.get('/users/list', User.getAll);
  app.get('/users/me', User.getMe);
  app.get('/users/:id', User.show);
  app.delete('/users/:id', User.delete);
  app.post('/users/registration', User.create);
  app.post('/users/login', loginValidation, User.login);

  app.get('/dialogs', Dialog.index);
  app.delete('/dialogs/:id', Dialog.delete);
  app.post('/dialogs', Dialog.create);

  app.get('/messages', Messages.index);
  app.post('/messages', Messages.create);
  app.delete('/messages/:id', Messages.delete);
};

export default createRoutes;
