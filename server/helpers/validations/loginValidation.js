const { check } = require('express-validator');

module.exports = [
  check('email', 'Incorrect password or email').normalizeEmail().isEmail(),
  check('password', 'Incorrect password or email').isLength({ min: 3 }),
];
