import mongoose from 'mongoose';
import express from 'express';
import bodyParser from 'body-parser';
import { config } from 'dotenv';
import { compose }  from "compose-middleware";
import { updateLastSeen, checkAuth } from "./middleware";

import {
  UserController,
  DialogController,
  MessageController,
} from './controllers';

config();

const app = express();

app.use(compose([
  bodyParser.json(),
  updateLastSeen,
  checkAuth
]))

const User = new UserController();
const Dialog = new DialogController();
const Messages = new MessageController();

mongoose.set('debug', true);
mongoose.connect('mongodb://localhost:27017/chat', {
  useNewUrlParser: true,
  useCreateIndex: true,
  useFindAndModify: false,
  useUnifiedTopology: true,
});

app.get('/users/', User.get);
app.get('/users/:id', User.show);
app.post('/users/registration', User.create);
app.post('/users/login', User.login);
app.delete('/users/:id', User.delete);

app.get('/dialogs', Dialog.index);
app.post('/dialogs', Dialog.create);
app.delete('/dialogs/:id', Dialog.delete);

app.get('/messages', Messages.index);
app.post('/messages', Messages.create);
app.delete('/messages/:id', Messages.delete);

app.listen(process.env.PORT, () => (`Server running on : http://localhost:${process.env.PORT}`));
