const { verifyJWTToken } = require('../helpers');

module.exports = (req, res, next) => {
  if (
    req.path === '/api/users/signIn' ||
    req.path === '/api/users/signUp' ||
    req.path === '/api/users/verify'
  ) {
    return next();
  }

  const token = req.headers.token;
  verifyJWTToken(token)
    .then(user => {
      req.user = user.data._doc;
      next();
    })
    .catch(err => {
      res.status(403).json({ message: err.message });
    });
};
