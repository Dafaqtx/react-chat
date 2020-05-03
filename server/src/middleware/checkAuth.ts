import { verifyJWTToken } from '../helpers';

export default (req: any, res: any, next: Function) => {
  if (req.path === '/users/login' || req.path === '/users/registration') {
    return next();
  }

  const token: any = req.headers.token;

  verifyJWTToken(token)
    .then(user => {
      req.user = user;
      next();
    })
    .catch(err => {
      res.status(403).json({ message: err.message });
    });
};