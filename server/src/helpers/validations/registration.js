const { check } = require('express-validator');

module.exports = [
  check('email').isEmail(),
  check('fullName').isLength({ min: 3 }),
  check('password').isLength({ min: 3 }),
];
