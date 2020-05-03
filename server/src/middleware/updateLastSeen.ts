import express from 'express';
import { UserModel } from '../models';

export default (
  _: express.Request,
  __: express.Response,
  next: express.NextFunction
) => {
  UserModel.findOneAndUpdate(
    { _id: '5eae96ac838ef314f410bba3' },
    {
      fullName: 'Test one',
      last_seen: new Date(),
    },
    { new: true },
    () => {
      return;
    }
  );
  next();
};
