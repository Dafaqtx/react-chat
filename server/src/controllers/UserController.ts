import express from 'express';
import bcrypt from 'bcrypt';
import socket from 'socket.io';
import { validationResult } from 'express-validator';

import { UserModel } from '../models';
import { createJWToken } from '../helpers';

class UserController {
  io: socket.Server;

  constructor(io: socket.Server) {
    this.io = io;
  }
  // TODO: В конструкторе следить за методоами сокета относящихся к юзеру и вызывать соотв. методы
  // constructor() {
  //   io.on("connection", function(socket: any) {
  //     socket.on('', function(obj: any) {
  //       // Вызывать метод для создания сущности
  //     })
  //   });
  // }

  getAll(req: express.Request, res: express.Response) {
    UserModel.find({}, (err, users) => {
      if (err) {
        return res.status(409).json({
          message: 'Something went wrong',
        });
      }
      const userList = users.map(user => ({
        _id: user._id,
        email: user.email,
        fullName: user.fullName,
      }));
      res.json(userList);
    });
  }

  show = (req: express.Request, res: express.Response) => {
    const id: string = req.params.id;
    UserModel.findById(id, (err, user) => {
      if (err) {
        return res.status(404).json({
          message: 'User not found',
        });
      }
      res.json(user);
    });
  };

  getMe = (req: any, res: express.Response) => {
    const id: string = req.user._id;

    UserModel.findById(id, (err, user: any) => {
      if (err || !user) {
        return res.status(404).json({
          message: 'User not found',
        });
      }
      res.json(user);
    });
  };

  delete = (req: express.Request, res: express.Response) => {
    const id: string = req.params.id;
    UserModel.findOneAndRemove({ _id: id })
      .then(user => {
        if (user) {
          res.json({
            message: `User ${user.fullName} deleted`,
          });
        }
      })
      .catch(() => {
        res.json({
          message: `User not found`,
        });
      });
  };

  create = (req: express.Request, res: express.Response) => {
    const registrationDate = {
      email: req.body.email,
      fullname: req.body.fullname,
      password: req.body.password,
    };

    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      return res.status(422).json({ errors: errors.array() });
    }

    const user = new UserModel(registrationDate);

    user
      .save()
      .then((obj: any) => {
        res.json(obj);
      })
      .catch(reason => {
        res.status(500).json({
          status: 'error',
          message: reason,
        });
      });
  };

  verify = (req: express.Request, res: express.Response) => {
    const hash = req.query.hash;

    if (!hash) {
      return res.status(422).json({ errors: 'Invalid hash' });
    }

    UserModel.findOne({ confirm_hash: hash }, (err, user) => {
      if (err || !user) {
        return res.status(404).json({
          status: 'error',
          message: 'Hash not found',
        });
      }

      user.confirmed = true;
      user.save(err => {
        if (err) {
          return res.status(404).json({
            status: 'error',
            message: err,
          });
        }

        res.json({
          status: 'success',
          message: 'Аккаунт успешно подтвержден!',
        });
      });
    });
  };

  login = (req: express.Request, res: express.Response) => {
    const loginData = {
      email: req.body.email,
      password: req.body.password,
    };

    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      return res.status(422).json({ errors: errors.array() });
    }

    UserModel.findOne({ email: loginData.email }, (err, user: any) => {
      if (err || !user) {
        return res.status(404).json({
          message: 'User not found',
        });
      }

      if (bcrypt.compareSync(loginData.password, user.password)) {
        const token = createJWToken(user);
        res.json({
          status: 'success',
          token,
        });
      } else {
        res.status(403).json({
          status: 'error',
          message: 'Incorrect password or email',
        });
      }
    });
  };
}

export default UserController;
