const { check } = require('express-validator');

exports.module = [
  check('email').isEmail(),
  check('fullName').isLength({ min: 3 }),
  check('password').isLength({ min: 3 }),
];
