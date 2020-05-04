const { check } = require('express-validator');

module.exports = [
  check('email', 'Email is invalid').isEmail(),
  check('fullName').isLength({ min: 3 }),
  check('password', 'Min length is 6 chars').isLength({ min: 3 }),
];
