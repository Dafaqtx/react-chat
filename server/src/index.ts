import mongoose from 'mongoose'
import express from 'express'
import bodyParser from 'body-parser'
import dotenv from 'dotenv'

import { UserController } from './controllers'

const app = express()
dotenv.config()

app.use(bodyParser.json())

const User = new UserController()

mongoose.connect('mongodb://localhost:27017/chat', {
  useNewUrlParser: true,
  useCreateIndex: true,
  useFindAndModify: false,
  useUnifiedTopology: true,
})

app.get('/user/:id', User.show)
app.delete('/user/:id', User.delete)
app.post('/user/registration', User.create)
app.post('/user/login', User.login)

app.listen(3001, function () {
  console.log('Server listener on port 3001!')
})

// TODO:
// Sockets: Сделать получение сообщений/я через GET запрос. То есть, когда придет сообщение от сокета
// то мы посылаем запрос на сервер, чтоыб поулчить последнее сообщение из сервера, а не отправлять
// всю инфу в самом сокете.
