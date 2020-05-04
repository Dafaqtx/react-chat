const { verifyJWTToken } = require('../helpers');

exports.module =  (req, res, next) => {
  if (
    req.path === '/users/signIn' ||
    req.path === '/users/signUp' ||
    req.path === '/users/verify'
  ) {
    return next();
  }

  const token = req.headers.token;

  verifyJWTToken(token)
    .then((user) => {
      req.user = user.data._doc;
      next();
    })
    .catch(err => {
      res.status(403).json({ message: err.message });
    });
};
