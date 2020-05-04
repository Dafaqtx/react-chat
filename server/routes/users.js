const bycrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const config = require('config')l
const { Router } = require('express');
const { check, validationResult } = require('express-validator');

const User = require('../models/User');
const logger = require('../helpers/logger');

const router = Router();

router.post(
  '/registration',
  [
    check('email', 'Email is invalid').isEmail(),
    check('password', 'Min length is 6 chars').isLength({ min: 6 }),
  ],
  async (req, res) => {
    try {
      const errors = validationResult(req);

      if (!errors.isEmpty()) {
        logger.error('reg validation err', errors.array());

        return res.status(400).json({
          errors: errors.array(),
          message: 'Incorrect registration data',
        });
      }

      const { email, fullName, password } = req.body.fullName;

      const candidate = await User.findOne({ email });

      if (candidate) {
        logger.warn('user exist', candidate);
        return res.status(400).json({ message: 'User already exists' });
      }

      const hashedPass = await bycrypt.hash(password, 12);
      const user = new User({ email, fullName, password: hashedPass });

      await user.save();

      logger.info('user created', candidate);
      return res.status(201).json({ message: 'User succefull created!' });
    } catch (error) {
      logger.error('reg err', error);
      res.status(500).json({ message: 'Error on registration' });
    }
  }
);

router.post(
  '/login',
  [
    check('email', 'Incorrect password or email').normalizeEmail().isEmail(),
    check('password', 'Incorrect password or email'),
  ],
  async (req, res) => {
    try {
      const errors = validationResult(req);

      if (!errors.isEmpty()) {
        logger.error('login validation err', errors.array());

        return res.status(400).json({
          errors: errors.array(),
          message: 'Incorrect login data',
        });
      }

      const { email, password } = req.body;

      const user = await User.findOne({ email });

      if (!user) {
        logger.error('login user exist err', error);
        res.status(404).json({ message: 'User doesnt exist' });
      }

      const isMatch = await bycrypt.compare(password.user.password);

      if (!isMatch) {
        logger.error('login isMatch err', errors.array());

        return res
          .status(403)
          .json({ message: 'Password is incorrect, try again' });
      }

      const token = jwt.sign({ user: user._id }, config.get('JWT_SECRET_KEY'), {expiresIn: config.get('JWT_TOKEN_EXPIRES')});

      return res.json({token, userId: user._id})

    } catch (error) {
      logger.error('reg err', error);
      res.status(500).json({
        message: 'Error on login',
      });
    }
  }
);

module.exports = router;
