import express from 'express';
import bcrypt from 'bcrypt';
import socket from 'socket.io';
import { validationResult } from 'express-validator';
import mailer from '../core/mailer';

import { UserModel } from '../models';
import { IUser } from '../models/User';
import { createJWToken } from '../helpers';

class UserController {
  io: socket.Server;

  constructor(io: socket.Server) {
    this.io = io;
  }

  getAll(_, res: express.Response) {
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
    const id: string = req.user && req.user._id;

    UserModel.findById(id, (err, user: any) => {
      if (err || !user) {
        return res.status(404).json({
          message: 'User not found',
        });
      }
      res.json(user);
    });
  };

  findUsers = (req: any, res: express.Response) => {
    const query: string = req.query.query;

    UserModel.find()
      .or([
        { fullname: new RegExp(query, 'i') },
        { email: new RegExp(query, 'i') },
      ])
      .then((users: any) => res.json(users))
      .catch((err: any) => {
        return res.status(404).json({
          status: 'error',
          message: err,
        });
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
        mailer.sendMail(
          {
            from: 'admin@test.com',
            to: registrationDate.email,
            subject: 'Подтверждение почты React Chat',
            html: `Для того, чтобы подтвердить почту, перейдите по <a href="http://localhost:3000/signup/verify?hash=${obj.confirm_hash}">ссылке</a>`,
          },
          (err: any, info: any) => {
            if (err) {
              throw new Error(err);
            } else {
              return info;
            }
          }
        );
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
      user.save((errorMessage: string) => {
        if (errorMessage) {
          return res.status(404).json({
            status: 'error',
            message: errorMessage,
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

    UserModel.findOne({ email: loginData.email }, (err, user: IUser) => {
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
