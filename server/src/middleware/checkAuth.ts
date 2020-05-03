import { verifyJWTToken } from '../helpers';

export default (req: any, res: any, next: any) => {
  if (req.path === '/users/login' || req.path === '/users/registration') {
    return next();
  }

  const token = req.headers.token;

  verifyJWTToken(token)
    .then((user: any) => {
      req.user = user.data._doc;
      next();
    })
    .catch(err => {
      res.status(403).json({ message: err.message });
    });
};
