const { check } = require('express-validator');

exports.module = [check('email').isEmail(), check('password').isLength({ min: 3 })];