import express from 'express'
import { UserModel } from '../models'
import { IUser } from '../models/User'

class UserController {
  show(req: express.Request, res: express.Response) {
    const id: string = req.params.id
    UserModel.findById(id, (err, user) => {
      if (err) {
        return res.status(404).json({
          message: 'User not found',
        })
      }
      res.json(user)
    })
  }

  getAll(req: express.Request, res: express.Response) {
    UserModel.find({}, (err, users) => {
      if (err) {
        return res.status(409).json({
          message: 'Somthing went wrong'
        })
      }
      const userList = users.map(user => ({_id: user._id, email: user.email, fullName: user.fullname}))
      res.json(userList); 
    })
  }

  getMe() {
    // TODO: Сделать возвращение инфы о самом себе (аутентификация)
  }

  create(req: express.Request, res: express.Response) {
    const userRegistrationData = {
      email: req.body.email,
      fullname: req.body.fullname,
      password: req.body.password,
    }

    const user = new UserModel(userRegistrationData)

    user
      .save()
      .then((obj: any) => {
        res.json(obj)
      })
      .catch((reason) => {
        res.json(reason)
      })
  }

  delete(req: express.Request, res: express.Response) {
    const id: string = req.params.id

    UserModel.findOneAndRemove({ _id: id })
      .then((user) => {
        if (user) {
          res.json({
            message: `User ${user.fullname} deleted`,
          })
        }
      })
      .catch(() => {
        res.json({
          message: `User not found`,
        })
      })
  }

  login(req: express.Request, res: express.Response) {
    const userLoginData = {
      email: req.body.login,
      password: req.body.password,
    }

    UserModel.findOne({ email: userLoginData.email }, (err, user: IUser) => {
      if (err) {
        return res.status(404).json({
          message: 'User not found',
        })
      }
    })
  }
}

export default UserController
